#  LoginandRegister

ระบบ Register และ Login พื้นฐาน แยก logic เป็น 3 ส่วน (register, login, server) โดยฝั่งหน้าบ้านยิง request ไปหา server กลาง ที่จัดการ hash รหัสผ่านและเช็คข้อมูลกับฐานข้อมูลจริง
---
## เป้าหมาย
- ฝึกทำระบบ Authentication (สมัครสมาชิก/เข้าสู่ระบบ) 
- ฝึกออกแบบระบบแบบแยกฝั่ง Frontend เรียก API ผ่าน fetch ไปหา Backend (REST API)
- ฝึกใช้ bcrypt เข้ารหัสผ่านและเชื่อมต่อฐานข้อมูล PostgreSQL
---
## เครื่องมือที่ใช้

| **ส่วน** | **เทคโนโลยี** |
|---|---|
| Backend | Node.js, Express |
| Frontend | HTML, JavaScript (fetch API) |
| Database | PostgreSQL (ผ่าน pg) |
| อื่น ๆ | bcrypt (เข้ารหัสผ่าน), cors |
---
## หลักการทำงาน

```
[index.html / register.html] ──► [login.js / register.js] ──(fetch REST API)──► [server.js: /api/login, /api/register] ──► [PostgreSQL: ตาราง users]
```

- **register.html + register.js**: กรอกชื่อผู้ใช้/รหัสผ่าน แล้วยิง POST ไปที่ `/api/register` ถ้าสำเร็จจะพาไปหน้า login
- **index.html + login.js**: กรอกชื่อผู้ใช้/รหัสผ่าน แล้วยิง POST ไปที่ `/api/login` เพื่อตรวจสอบสิทธิ์
- **server.js**: รับ request, hash/ตรวจสอบรหัสผ่านด้วย bcrypt, query ฐานข้อมูล PostgreSQL แล้วส่งผลลัพธ์กลับเป็น JSON
---
## วิธีรันโปรเจค

```bash
cd LoginandRegister
npm install
# ตั้งค่าฐานข้อมูล PostgreSQL ให้ตรงกับที่กำหนดใน server.js
# และสร้างตาราง users (username, password_hash) ไว้ล่วงหน้า
npm start
# server จะรันที่ http://localhost:5000
# เปิดไฟล์ index.html (หรือ register.html) ผ่าน browser เพื่อใช้งาน
```