# 📚 Learning Notes

Repo รวมแหล่งเรียนรู้และบันทึกส่วนตัวในหัวข้อต่าง ๆ ที่สนใจ แยกเป็นโฟลเดอร์ตามหัวข้อ แต่ละโฟลเดอร์มี README.md ของตัวเองที่สรุปเนื้อหา แหล่งเรียน และ progress

## 🗂️ สารบัญหัวข้อ

| หัวข้อ | คำอธิบายสั้น ๆ | สถานะ |
|---|---|---|
| [`data-science/`](./data-science) | Data Science, ML, สถิติ | 🟡 กำลังเรียน |
| [`web-dev/`](./web-dev) | Frontend / Backend / Full-stack | ⚪ ยังไม่เริ่ม |
| [`language-learning/`](./language-learning) | ภาษาต่างประเทศ | ⚪ ยังไม่เริ่ม |

> แก้ตารางด้านบนทุกครั้งที่เพิ่ม/ลบโฟลเดอร์หัวข้อใหม่

## 📁 โครงสร้าง

```
learning-notes/
├── README.md                 <- ไฟล์นี้ (สารบัญหลัก)
├── .gitignore
├── _templates/
│   └── topic-README-template.md
├── data-science/
│   ├── README.md
│   ├── notes/
│   └── projects/
├── web-dev/
│   └── README.md
└── language-learning/
    └── README.md
```

## ✅ กติกาการเพิ่มหัวข้อใหม่

1. สร้างโฟลเดอร์ใหม่ตั้งชื่อแบบ `kebab-case` (เช่น `machine-learning`, `japanese-n3`)
2. ก็อปไฟล์จาก `_templates/topic-README-template.md` ไปวางเป็น `README.md` ในโฟลเดอร์นั้น แล้วกรอกรายละเอียด
3. เพิ่มแถวใหม่ในตารางสารบัญด้านบน
4. Commit ด้วยข้อความสื่อความหมาย เช่น `add: japanese-n3 topic folder`

## 🖥️ หมายเหตุเรื่อง Git หลายเครื่อง

Repo นี้อาจถูก push จากหลายเครื่อง แต่ใช้ email เดียวกัน (ตั้งค่าผ่าน `git config --global user.email`) ส่วนการยืนยันตัวตน (SSH key / token) ตั้งแยกต่อเครื่อง