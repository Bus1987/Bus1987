# PROCOM SERVICES

เว็บไซต์การตลาดของ **PROCOM SERVICES** (Digital Technologies) สำหรับซ่อมคอมพิวเตอร์ โน้ตบุ๊ก ลงโปรแกรม ติดตั้ง อัปเกรด และไอทีครบวงจร ที่ระยอง

สแตก: Vite + React + TypeScript + Tailwind CSS  
ภาษา: สลับไทย / อังกฤษ ในแถบเมนู (ค่าเริ่มต้นไทย บันทึกใน localStorage)  
บิลด์: `npm run build` → โฟลเดอร์ `dist`  
ดีพลอย: Vercel ซิงก์กับ GitHub repo นี้ (โปรเจกต์ `Bus1987`)

## ติดต่อ

- **บริษัท:** PROCOM SERVICES / Digital Technologies
- **CEO:** Panyakorn Panngam
- **โทร:** [095-914-2416](tel:+66959142416)
- **อีเมล:** [procomservices1987@gmail.com](mailto:procomservices1987@gmail.com)
- **เว็บ:** [https://bus1987.vercel.app](https://bus1987.vercel.app)
- **ที่ตั้ง:** Rayong, Thailand
- **LINE:** [@462ysyuy](https://line.me/R/ti/p/@462ysyuy)

## พัฒนาในเครื่อง

```bash
npm install
npm run dev
```

เปิดที่ `http://localhost:5173`

## บิลด์สำหรับโปรดักชัน

```bash
npm run build
npm run preview
```

`vercel.json` ตั้ง SPA rewrite ไปที่ `index.html`

## Vercel

โปรเจกต์นี้ตั้งค่าให้ Vercel ตรวจจับ Vite ได้เอง:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

เมื่อ push ไปที่ `main` (สาขาที่ Vercel ซิงก์อยู่) จะดีพลอยอัตโนมัติที่ [https://bus1987.vercel.app](https://bus1987.vercel.app)
