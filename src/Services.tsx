const services = [
  {
    title: 'ซ่อมคอมพิวเตอร์ตั้งโต๊ะ',
    desc: 'ตรวจเช็คอาการเครื่อง PC แก้ปัญหาเปิดไม่ติด ช้า ร้อน หรือใช้งานไม่เสถียร ให้พร้อมกลับมาทำงาน',
    icon: MonitorIcon,
  },
  {
    title: 'ซ่อมโน้ตบุ๊ก',
    desc: 'ดูแลโน้ตบุ๊กทั้งเครื่องร้อน แบต หน้าจอ คีย์บอร์ด และอาการใช้งานทั่วไปที่เจอในชีวิตประจำวัน',
    icon: LaptopIcon,
  },
  {
    title: 'Windows และซอฟต์แวร์',
    desc: 'ลงวินโดว์ ลงโปรแกรม แก้ระบบช้า ตั้งค่าการใช้งาน และจัดเครื่องให้พร้อมใช้งานจริง',
    icon: WindowIcon,
  },
  {
    title: 'อัปเกรด RAM / SSD',
    desc: 'เพิ่มแรม เปลี่ยน SSD เพื่อให้เปิดเครื่องเร็วขึ้น ทำงานหลายโปรแกรมได้ลื่นขึ้น',
    icon: ChipIcon,
  },
  {
    title: 'ทำความสะอาดเครื่อง',
    desc: 'เป่าฝุ่น ดูแลระบบระบายความร้อน และจัดระเบียบภายในเครื่อง ลดร้อน ลดเสียงดัง',
    icon: SparkIcon,
  },
  {
    title: 'ที่ปรึกษาด้านคอมพิวเตอร์',
    desc: 'คุยอาการเครื่อง วางแผนอัปเกรด หรือเลือกแนวทางซ่อม/ติดตั้งให้เหมาะกับการใช้งาน',
    icon: ChatIcon,
  },
  {
    title: 'IT Support',
    desc: 'สนับสนุนการใช้งานคอมพิวเตอร์และระบบเบื้องต้น สำหรับบ้านและธุรกิจขนาดเล็ก',
    icon: HeadsetIcon,
  },
  {
    title: 'บริการครบวงจร',
    desc: 'ตั้งแต่ตรวจเช็ค ซ่อม ติดตั้ง อัปเกรด ไปจนถึงทดสอบส่งมอบพร้อมคำแนะนำการดูแลต่อ',
    icon: CycleIcon,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-royal">บริการ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">ดูแลคอมพิวเตอร์ครบทุกงานที่ใช้งานจริง</h2>
          <p className="mt-3 text-muted">
            รับงานซ่อม ติดตั้ง อัปเกรด และให้คำปรึกษา โดยเน้นอธิบายภาษาเข้าใจง่าย ไม่ยัดเยียดรายการที่ไม่จำเป็น
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-sky-mid bg-sky/40 p-5 transition hover:-translate-y-0.5 hover:border-royal/25 hover:bg-white hover:shadow-[0_16px_40px_rgba(44,92,165,0.1)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-royal ring-1 ring-sky-mid">
                <service.icon />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MonitorIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 20h8M12 16.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function LaptopIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="14" height="10" rx="1.8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 17.5h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function WindowIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="4" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="13" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="13" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function ChipIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3.5v3.5M12 17v3.5M3.5 12H7M17 12h3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5 13.6 9H19l-4.4 3.2L16.2 18 12 14.8 7.8 18l1.6-5.8L5 9h5.4L12 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 6.5h14v9.2H9.2L5 19.5V6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function HeadsetIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 12v5.2A1.8 1.8 0 0 0 6.8 19H8v-7H5Zm11 0v7h1.2A1.8 1.8 0 0 0 19 17.2V12h-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function CycleIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.8 12a7.2 7.2 0 0 1 12.2-5.2L19 4.8V10h-5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.2 12a7.2 7.2 0 0 1-12.2 5.2L5 19.2V14h5.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
