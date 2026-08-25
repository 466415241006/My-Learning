# Product (Add & Delete)

เว็บแอปจัดการสินค้าอย่างง่าย เพิ่มสินค้าใหม่, ดูรายการสินค้าทั้งหมด, และลบสินค้าออกจากระบบ โดยข้อมูลเก็บลง PostgreSQL จริง
---
## เป้าหมาย
- สร้าง REST API ด้วย Python + Flask (`GET`, `POST`, `DELETE`)
- เชื่อมต่อและสั่งงานฐานข้อมูล PostgreSQL ด้วย `psycopg2`
- จัดการ CORS ระหว่าง Frontend กับ Backend ที่รันคนละ port
- เขียน Frontend ล้วน ๆ ด้วย Vanilla JS ให้คุยกับ API ได้ (fetch, POST/DELETE, render ตาราง)
- ฝึกออกแบบหน้าเว็บหลายหน้า (multi-page) แบบไม่ใช้ framework
---
## เครื่องมือที่ใช้
| **ส่วน** | **เทคโนโลยี** |
|---|---|
| Backend | Python, Flask, Flask-CORS |
| ฐานข้อมูล | PostgreSQL (ผ่าน `psycopg2`) |
| Frontend | HTML, CSS, Vanilla JavaScript |
| การสื่อสาร | REST API (JSON) |
---
## หลักการทำงาน

```
index.html (ฟอร์มเพิ่มสินค้า)
      │  fetch POST /api/products
      ▼
Flask API (main.py) ──► เชื่อมต่อ PostgreSQL ──► บันทึกข้อมูลลงตาราง products
      ▲
      │  fetch GET /api/products
page1.html (ตารางแสดงสินค้า)
      │  กดปุ่ม "ลบ" ──► fetch DELETE /api/products/<id>
      ▼
Flask API ──► ลบแถวออกจากตาราง products ──► โหลดตารางใหม่
```
ขั้นตอนคร่าว ๆ:
1. หน้า **`index.html`** ให้กรอกชื่อ/ราคา/จำนวนสินค้า แล้วกดปุ่ม "Add Product" → `app.js` ยิง `POST /api/products` ไปที่ Flask
2. Flask (`main.py`) รับข้อมูล เชื่อมต่อ PostgreSQL แล้ว `INSERT` ลงตาราง `products`
3. หน้า **`page1.html`** โหลดรายการสินค้าทั้งหมดผ่าน `GET /api/products` แล้วแสดงเป็นตาราง (`page2.js`)
4. แต่ละแถวมีปุ่ม "ลบ" เมื่อกดจะยิง `DELETE /api/products/<id>` ไปลบข้อมูลออกจากฐานข้อมูล แล้วโหลดตารางใหม่ทันที
---
## วิธีรันโปรเจค
**1) เตรียมฐานข้อมูล PostgreSQL**
```sql
CREATE DATABASE "Test01";
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price NUMERIC,
    quantity INTEGER
);
```
**2) รัน Backend**
```bash
cd "Input-ProductandDelete web"
python -m venv .venv
venv\Scripts\activate
pip install requirements.txt
python main.py
```
Server จะรันที่ `http://127.0.0.1:5000`

**3) เปิด Frontend**
เปิดไฟล์ `index.html` (หน้าเพิ่มสินค้า) หรือ `page1.html` (หน้าดูรายการ/ลบสินค้า) ด้วยเบราว์เซอร์โดยตรง หรือรันผ่าน Live Server