# Weather App API

เว็บแอปเช็คสภาพอากาศแบบเรียลไทม์ ดึงข้อมูลจาก API ภายนอกแล้วแสดงผลผ่านหน้าเว็บง่าย ๆ
---
## เป้าหมาย
- สร้างเซิร์ฟเวอร์และ REST API endpoint ด้วย Node.js + Express
- เรียกใช้ API ภายนอก (third-party API) แบบ asynchronous ด้วย `fetch`
- เชื่อมฝั่ง Frontend (HTML/JS) เข้ากับ Backend ผ่าน API ของตัวเอง
- จัดการ error เบื้องต้นเวลาดึงข้อมูลจาก API ไม่สำเร็จ
---
## เครื่องมือที่ใช้

| **ส่วน** | **เทคโนโลยี** |
|---|---|
| Backend | Node.js, Express 5 |
| Frontend | HTML, CSS, Vanilla JavaScript |
| แหล่งข้อมูลอากาศ | [Open-Meteo API](https://open-meteo.com/) (ฟรี ไม่ต้องใช้ API key) |
| Package manager | npm |
---
## หลักการทำงาน

```
Browser (index.html)
      │  fetch('/api/weather')
      ▼
Express Server (server.js)
      │  fetch(open-meteo API)
      ▼
Open-Meteo API
      │  ส่งข้อมูลอากาศกลับมาเป็น JSON
      ▼
Express Server  ──►  ส่ง JSON (city, temperature, humidity, windSpeed) กลับไปที่ Browser
      │
      ▼
Browser แสดงผลอุณหภูมิ / ความชื้น / ความเร็วลม บนหน้าเว็บ
```

ขั้นตอนคร่าว ๆ:
1. ผู้ใช้เปิดหน้าเว็บเบราว์เซอร์ยิง request มาที่ `/api/weather`
2. server รับ request แล้วไปเรียก Open-Meteo API เพื่อขอข้อมูลอากาศของพิกัดที่กำหนดไว้ (ปัจจุบัน fix เป็นกรุงเทพฯ)
3. Server แปลงข้อมูลที่ได้ให้อยู่ในรูปแบบ JSON ที่ใช้งานง่าย แล้วส่งกลับไปให้หน้าเว็บ
4. ฝั่ง JavaScript บนหน้าเว็บรับข้อมูล แล้วเอาไปแสดงผลในการ์ด (เมือง, อุณหภูมิ, ความชื้น, ความเร็วลม)
---
## วิธีรันโปรเจค

```bash
cd weather-app-API
npm install
npm start
```
จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:3000`