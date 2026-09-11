import { CheckIcon } from './icons'
import { useI18n } from './i18n'

export function WhyUs() {
  const { copy } = useI18n()

  return (
    <section id="why-us" className="bg-sky py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-royal">{copy.whyUs.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">{copy.whyUs.title}</h2>
            <p className="mt-4 text-muted">{copy.whyUs.body}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.whyUs.points.map((point) => (
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
