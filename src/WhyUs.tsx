import { CheckIcon } from './icons'

const points = [
  {
    title: 'คุยตรง ตรวจตรง',
    desc: 'อธิบายอาการและแนวทางแก้ไขให้เข้าใจง่าย แนะนำเท่าที่เครื่องต้องการจริง',
  },
  {
    title: 'งานครบวงจร จบที่เดียว',
    desc: 'ซ่อม ลงโปรแกรม ติดตั้ง อัปเกรด ทำความสะอาด และให้คำปรึกษาต่อเนื่องได้ในที่เดียว',
  },
  {
    title: 'ติดต่อง่าย ที่ระยอง',
    desc: 'โทร อีเมล หรือแชท LINE ได้ตามช่องทางที่ลงบนนามบัตร ไม่ต้องเดาช่องทางติดต่อ',
  },
  {
    title: 'ส่งมอบพร้อมคำแนะนำ',
    desc: 'ทดสอบการใช้งานก่อนส่งคืน และบอกวิธีดูแลเครื่องต่อให้อยู่ในสภาพพร้อมใช้',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-sky py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-royal">ทำไมต้อง PROCOM</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">บริการคอมพิวเตอร์ที่คุยรู้เรื่อง และลงมือจนงานจบ</h2>
            <p className="mt-4 text-muted">
              PROCOM SERVICES ตั้งอยู่ในระยอง ดูแลงานคอมพิวเตอร์และเทคโนโลยีดิจิทัลแบบครบวงจร
              เน้นงานจริง อธิบายตรงไปตรงมา และติดต่อได้ตามช่องทางบนนามบัตร
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <article key={point.title} className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-white">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky text-royal">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
