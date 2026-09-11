import { brand, emailHref, phoneHref } from './brand'
import { useI18n } from './i18n'
import { LineIcon, MailIcon, PhoneIcon } from './icons'

export function Hero() {
  const { lang, copy } = useI18n()
  const locationLabel = lang === 'th' ? brand.locationTh : brand.location

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eaf4fc_0%,#ffffff_58%)]" id="top">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-24 h-80 w-80 rounded-full bg-royal/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-royal/15 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-royal">
            {brand.tagline}
            <span className="h-1 w-1 rounded-full bg-cyan" />
            {locationLabel}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-[3.35rem]">
            {copy.hero.headline}
            <span className="block text-royal">{copy.hero.headlineAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {copy.hero.body}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-royal px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(44,92,165,0.28)] transition hover:bg-royal-dark"
            >
              <PhoneIcon className="h-4 w-4" />
              {copy.call} {brand.phoneDisplay}
            </a>
            <a
              href={emailHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-royal/20 bg-white px-5 py-3 text-sm font-semibold text-royal transition hover:bg-sky"
            >
              <MailIcon className="h-4 w-4" />
              {copy.emailCta}
            </a>
            <a
              href={brand.lineUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-line px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <LineIcon className="h-4 w-4" />
              {copy.chatLine} {brand.lineId}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2 text-sm text-muted">
            {copy.hero.chips.map((item) => (
              <li key={item} className="rounded-full bg-white px-3 py-1.5 ring-1 ring-sky-mid">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-x-8 top-8 h-40 rounded-full bg-sky-mid/80 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/90 p-8 shadow-[0_24px_60px_rgba(44,92,165,0.12)]">
            <img src="/logo.png" alt={`${brand.name} ${brand.tagline}`} className="mx-auto w-[118%] max-w-none -translate-x-[8%] scale-105" />
            <div className="mt-4 rounded-2xl bg-royal px-4 py-3 text-center text-white">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">{brand.ceoTitle}</p>
              <p className="mt-1 text-lg font-bold">{brand.ceo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
