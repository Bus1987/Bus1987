const steps = [
  {
    n: '01',
    title: 'ติดต่อเรา',
    desc: 'โทร 095-914-2416 ส่งอีเมล หรือแชท LINE @462ysyuy บอกอาการเครื่องและสิ่งที่ต้องการ',
  },
  {
    n: '02',
    title: 'ตรวจเช็ค',
    desc: 'ประเมินอาการ ชี้แนวทางซ่อม ติดตั้ง หรืออัปเกรด ให้เห็นภาพก่อนลงมือ',
  },
  {
    n: '03',
    title: 'ดำเนินการ',
    desc: 'ซ่อม ลงโปรแกรม ติดตั้ง ทำความสะอาด หรืออัปเกรดตามที่ตกลงไว้',
  },
  {
    n: '04',
    title: 'ส่งมอบ',
    desc: 'ทดสอบการใช้งาน อธิบายผลงาน และแนะนำวิธีดูแลเครื่องต่อ',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-royal">ขั้นตอนการบริการ</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">เริ่มจากคุยอาการ จบที่เครื่องพร้อมใช้</h2>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.n} className="relative rounded-3xl border border-sky-mid bg-sky/30 p-5">
              <span className="text-sm font-extrabold tracking-[0.2em] text-royal">{step.n}</span>
              <h3 className="mt-3 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
              {index < steps.length - 1 ? (
                <span className="absolute right-4 top-5 hidden h-px w-8 bg-royal/30 lg:block" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
