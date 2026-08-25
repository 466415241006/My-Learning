<div align="center">

# 📚 My-Learning

### บันทึกการเดินทางสายโค้ด — เรียนรู้ ลงมือทำ พังแล้วแก้ ซ้ำไปเรื่อย ๆ

รวมโปรเจคที่หยิบมาฝึกจริง แต่ละโปรเจค = หัวข้อที่กำลังเรียนรู้ในตอนนั้น

![Learning](https://img.shields.io/badge/status-learning-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/Python-Flask-3776AB?logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Last Commit](https://img.shields.io/github/last-commit/466415241006/My-Learning)

</div>

---

## 🧭 เกี่ยวกับ repo นี้

ที่นี่คือที่รวมโปรเจคเล็ก ๆ ที่ทำขึ้นเพื่อฝึกฝีมือ ไม่ได้เน้นความสมบูรณ์แบบ แต่เน้น **ลงมือทำจริง แล้วเข้าใจว่าระบบมันทำงานยังไง** แต่ละโฟลเดอร์คือหนึ่งโปรเจค และมี `README.md` ของตัวเอง อธิบายเป้าหมาย เครื่องมือที่ใช้ และหลักการทำงานแบบเจาะลึก

## 🗂️ โปรเจคทั้งหมด

<table>
<tr>
<td width="50%" valign="top">

### 🌤️ [Weather API Web](./Weather_API%20web)

เว็บแอปเช็คสภาพอากาศแบบเรียลไทม์ ดึงข้อมูลผ่าน REST API ของตัวเอง

`Node.js` `Express` `Open-Meteo API`

**สถานะ:** 🟢 ใช้งานได้

</td>
<td width="50%" valign="top">

### 🛒 [Product CRUD Web](./Input-ProductandDelete%20web)

ระบบจัดการสินค้า เพิ่ม / ดูรายการ / ลบ เชื่อมต่อฐานข้อมูลจริง

`Python` `Flask` `PostgreSQL`

**สถานะ:** 🟢 ใช้งานได้

</td>
</tr>
</table>

| โปรเจค | คำอธิบายสั้น ๆ | เครื่องมือหลัก | สถานะ |
|---|---|---|---|
| [`Weather_API web/`](./Weather_API%20web) | เว็บแอปเช็คสภาพอากาศแบบเรียลไทม์ ผ่าน REST API | Node.js, Express, Open-Meteo API | 🟢 ใช้งานได้ |
| [`Input-ProductandDelete web/`](./Input-ProductandDelete%20web) | ระบบเพิ่ม/ลบสินค้า เชื่อมฐานข้อมูล PostgreSQL | Python, Flask, PostgreSQL | 🟢 ใช้งานได้ |

> 📌 อัปเดตตารางนี้ทุกครั้งที่เพิ่ม/ลบโปรเจคใหม่

## 📁 โครงสร้าง Repo

```
My-Learning/
├── README.md                        <- ไฟล์นี้ (สารบัญหลัก)
├── Template/
│   └── README.md                    <- แม่แบบไว้ก็อปสร้างโปรเจคใหม่
├── Weather_API web/
│   ├── README.md
│   ├── server.js
│   └── public/
└── Input-ProductandDelete web/
    ├── README.MD
    ├── main.py
    ├── index.html
    └── page1.html
```

## ✅ กติกาการเพิ่มโปรเจคใหม่

1. สร้างโฟลเดอร์ใหม่ตั้งชื่อให้สื่อความหมาย
2. ก็อปไฟล์จาก [`Template/README.md`](./Template/README.md) ไปวางเป็น `README.md` ในโฟลเดอร์โปรเจคนั้น แล้วกรอกรายละเอียดให้ครบ
3. เพิ่มแถวใหม่ในตาราง "โปรเจคทั้งหมด" ด้านบน
4. Commit ด้วยข้อความสื่อความหมาย เช่น `add: todo-app project`

## 🖥️ หมายเหตุเรื่อง Git หลายเครื่อง

Repo นี้อาจถูก push จากหลายเครื่อง แต่ใช้ email เดียวกัน (ตั้งค่าผ่าน `git config --global user.email`) ส่วนการยืนยันตัวตน (SSH key / token) ตั้งแยกต่อเครื่อง

---

<div align="center">

*ไม่ได้เก่งตั้งแต่วันแรก แค่ไม่หยุดเขียนโค้ด* ✨

</div>