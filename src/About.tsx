import { brand } from './brand'
import { useI18n } from './i18n'

export function About() {
  const { copy } = useI18n()

  return (
    <section id="about" className="relative overflow-hidden bg-[linear-gradient(180deg,#1e447c_0%,#2c5ca5_55%,#3a72c0_100%)] py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-cyan/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-wide text-cyan">{copy.about.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{brand.name}</h2>
          <p className="mt-2 text-lg font-medium text-sky">{brand.tagline}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85">{copy.about.body}</p>
          <div className="mt-8 rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">{copy.about.leadership}</p>
            <p className="mt-2 text-2xl font-extrabold">{brand.ceo}</p>
            <p className="text-sm text-white/80">{brand.ceoTitle}</p>
            <p className="mt-3 text-sm text-sky">{brand.location}</p>
          </div>
        </div>

        <BusinessCard />
      </div>
    </section>
  )
}

function BusinessCard() {
  const { copy } = useI18n()

  return (
    <article className="overflow-hidden rounded-[1.6rem] bg-white text-ink shadow-[0_24px_50px_rgba(0,0,0,0.18)]">
      <div className="relative bg-royal px-6 py-5 text-white">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-cyan" />
        <div className="absolute right-0 top-8 h-16 w-24 bg-white" style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%)' }} />
        <h3 className="relative text-xl font-extrabold tracking-wide sm:text-2xl">{brand.ceo.toUpperCase()}</h3>
        <p className="relative mt-1 text-xs font-medium uppercase tracking-[0.22em] text-white/80">{brand.ceoTitle}</p>
      </div>
      <div className="grid gap-6 px-6 py-6 sm:grid-cols-[1.1fr_0.9fr]">
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="mt-0.5 text-royal">☎</span>
            <span>{brand.phoneDisplay}</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-royal">◎</span>
            <span>{brand.webDisplay}</span>
          </li>
          <li className="flex gap-3 break-all">
            <span className="mt-0.5 text-royal">✉</span>
            <span>{brand.email}</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 text-royal">📍</span>
            <span>{brand.location}</span>
          </li>
        </ul>
        <div className="text-center">
          <img src="/logo-mark.svg" alt="" className="mx-auto h-20 w-20 object-contain" />
          <p className="mt-1 text-xs font-extrabold tracking-wide">{brand.name}</p>
          <p className="text-[11px] font-medium text-royal">{brand.tagline}</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <img src="/qr-web.svg" alt={copy.about.qrWeb} className="rounded-md ring-1 ring-sky-mid" />
            <img src="/qr-email.svg" alt={copy.about.qrEmail} className="rounded-md ring-1 ring-sky-mid" />
            <img src="/qr-line.svg" alt={copy.about.qrLine} className="rounded-md ring-1 ring-sky-mid" />
          </div>
        </div>
      </div>
      <div className="h-3 bg-royal" />
    </article>
  )
}
