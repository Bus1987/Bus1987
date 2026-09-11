import { useState } from 'react'
import { brand, emailHref, phoneHref } from './brand'
import { LanguageToggle, navLinks, useI18n } from './i18n'
import { CloseIcon, LineIcon, MenuIcon, PhoneIcon } from './icons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { copy } = useI18n()
  const links = navLinks(copy)

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-sky-mid/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" onClick={close}>
          <img src="/logo-mark.svg" alt="" className="h-12 w-12 rounded-full bg-white object-cover shadow-sm ring-1 ring-sky-mid" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold tracking-wide text-ink">{brand.name}</span>
            <span className="block text-[11px] font-medium text-royal">{brand.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label={copy.navAria}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-ink/80 transition hover:text-royal">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <a
            href={phoneHref}
            className="inline-flex items-center gap-1.5 rounded-full border border-royal/20 px-3 py-2 text-sm font-semibold text-royal transition hover:bg-sky"
          >
            <PhoneIcon className="h-4 w-4" />
            {brand.phoneDisplay}
          </a>
          <a
            href={brand.lineUrl}
            className="inline-flex items-center gap-1.5 rounded-full bg-line px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            <LineIcon className="h-4 w-4" />
            LINE
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-mid text-royal"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-sky-mid bg-white px-4 py-4 md:hidden">
          <nav className="grid gap-1" aria-label={copy.navMobileAria}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-sky"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex justify-center">
            <LanguageToggle />
          </div>
          <div className="mt-3 grid gap-2">
            <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-royal px-4 py-2.5 text-sm font-semibold text-white">
              <PhoneIcon className="h-4 w-4" />
              {copy.call} {brand.phoneDisplay}
            </a>
            <a href={emailHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-royal/20 px-4 py-2.5 text-sm font-semibold text-royal">
              {copy.email}
            </a>
            <a href={brand.lineUrl} className="inline-flex items-center justify-center gap-2 rounded-full bg-line px-4 py-2.5 text-sm font-semibold text-white">
              <LineIcon className="h-4 w-4" />
              {copy.chatLine} {brand.lineId}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
