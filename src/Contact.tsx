import { type FormEvent } from 'react'
import { brand, emailHref, phoneHref } from './brand'
import { useI18n } from './i18n'
import { GlobeIcon, LineIcon, MailIcon, PhoneIcon, PinIcon } from './icons'

export function Contact() {
  const { copy } = useI18n()

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = encodeURIComponent(copy.contact.mailSubject)
    const body = encodeURIComponent(`${copy.contact.mailName}: ${name}\n${copy.contact.mailPhone}: ${phone}\n\n${message}`)
    window.location.href = `${emailHref}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="bg-sky py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold tracking-wide text-royal">{copy.contact.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">{copy.contact.title}</h2>
          <p className="mt-3 text-muted">{copy.contact.intro}</p>

          <div className="mt-8 grid gap-3">
            <a href={phoneHref} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-sky-mid transition hover:ring-royal/30">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky text-royal">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-muted">{copy.contact.phone}</span>
                <span className="font-bold text-ink">{brand.phoneDisplay}</span>
              </span>
            </a>
            <a href={emailHref} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-sky-mid transition hover:ring-royal/30">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky text-royal">
                <MailIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-muted">{copy.contact.email}</span>
                <span className="break-all font-bold text-ink">{brand.email}</span>
              </span>
            </a>
            <a href={brand.lineUrl} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-sky-mid transition hover:ring-royal/30">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-line text-white">
                <LineIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-muted">{copy.contact.line}</span>
                <span className="font-bold text-ink">{brand.lineId}</span>
              </span>
            </a>
            <a href={brand.webUrl} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-sky-mid transition hover:ring-royal/30">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky text-royal">
                <GlobeIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-muted">{copy.contact.website}</span>
                <span className="font-bold text-ink">{brand.webDisplay}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-sky-mid">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky text-royal">
                <PinIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-muted">{copy.contact.location}</span>
                <span className="font-bold text-ink">{brand.location}</span>
              </span>
            </div>
          </div>
        </div>

        <form className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-sky-mid sm:p-8" onSubmit={onSubmit}>
          <h3 className="text-xl font-bold text-ink">{copy.contact.formTitle}</h3>
          <p className="mt-1 text-sm text-muted">{copy.contact.formHint}</p>
          <label className="mt-6 block text-sm font-medium text-ink">
            {copy.contact.name}
            <input
              name="name"
              required
              className="mt-1.5 w-full rounded-2xl border border-sky-mid bg-sky/40 px-4 py-3 outline-none ring-royal/30 focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            {copy.contact.phoneField}
            <input
              name="phone"
              required
              className="mt-1.5 w-full rounded-2xl border border-sky-mid bg-sky/40 px-4 py-3 outline-none ring-royal/30 focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-ink">
            {copy.contact.details}
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full resize-y rounded-2xl border border-sky-mid bg-sky/40 px-4 py-3 outline-none ring-royal/30 focus:ring-2"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-royal px-5 py-3 text-sm font-semibold text-white transition hover:bg-royal-dark"
          >
            {copy.contact.submit}
          </button>
        </form>
      </div>
    </section>
  )
}
