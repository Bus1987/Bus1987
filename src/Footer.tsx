import { brand, emailHref, phoneHref } from './brand'
import { navLinks, useI18n } from './i18n'
import { LineIcon } from './icons'

export function Footer() {
  const { copy } = useI18n()
  const links = navLinks(copy)

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo-mark.svg" alt="" className="h-12 w-12 rounded-full bg-white object-cover" />
            <div>
              <p className="font-extrabold tracking-wide">{brand.name}</p>
              <p className="text-sm text-sky">{brand.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{copy.footer.blurb}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-sky">{copy.footer.pages}</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-sky">{copy.footer.contact}</p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href={phoneHref} className="hover:text-white">
                {brand.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={emailHref} className="break-all hover:text-white">
                {brand.email}
              </a>
            </li>
            <li>
              <a href={brand.lineUrl} className="inline-flex items-center gap-2 hover:text-white">
                <LineIcon className="h-4 w-4 text-line" />
                LINE {brand.lineId}
              </a>
            </li>
            <li>
              <a href={brand.webUrl} className="hover:text-white">
                {brand.webDisplay}
              </a>
            </li>
            <li>{brand.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 pb-24 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {brand.name} · {brand.location}
      </div>
    </footer>
  )
}
