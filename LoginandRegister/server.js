const express = require('express');
const {Pool} = require('pg');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'Test01',
    password : '1234',
    port : '5432',
});

app.post('/api/register',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const passwordHash = await bcrypt.hash(password,10);

        await db.query(
            'INSERT INTO users(username,password_hash) VALUES ($1,$2)',
            [username,passwordHash]
        );
        res.status(201).json({status:"success", message:"สมัคสมาชิคสำเร็จ"});
    }catch(err) {
        console.log("DB Error",err);
        
        if (err.code === '23505'){
            return res.status(400).json({status:"error", message:"ชื่อผู้ใช้มีในระบบแล้ว"});
        }
        res.status(500).json({status:"error",message:"เกิดข้อผิดพลาดในการสมัค"});
    }
});

app.post('/api/login',async(req,res)=>{
    try{
        const {username,password} = req.body;
        const result = await db.query('SELECT * FROM users WHERE username = $1',[username]);
        if (result.rows.length === 0){
            return res.status(400).json({status:"error",message:"ไม่พบชื่อผู้ใช้งานนี้"});
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password,user.password_hash);
        
        if(!isMatch) {
            return res.status(400).json({status:"error",message:"รหัสผ่านไม่ถูกต้อง"});
        }
        res.json({status:"success",message:"เข้าสู่ระบบสำเร็จ",username:user.username});
    }catch (err){
        console.log("Login Error",err);
        res.status(500).json({ status:"error",message:"เกิดข้อผิดพลาดในการเข้าสู่ระบบ"});
    }
});

app.listen(5000, () => console.log('Sever running on htpp://localhost:5000'));