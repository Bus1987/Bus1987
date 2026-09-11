import { useI18n } from './i18n'

export function Process() {
  const { copy } = useI18n()

  return (
    <section id="process" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-royal">{copy.process.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">{copy.process.title}</h2>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {copy.process.steps.map((step, index) => (
            <li key={step.n} className="relative rounded-3xl border border-sky-mid bg-sky/30 p-5">
              <span className="text-sm font-extrabold tracking-[0.2em] text-royal">{step.n}</span>
              <h3 className="mt-3 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
              {index < copy.process.steps.length - 1 ? (
                <span className="absolute right-4 top-5 hidden h-px w-8 bg-royal/30 lg:block" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
