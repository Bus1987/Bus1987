import { brand } from './brand'
import { useI18n } from './i18n'
import { LineIcon } from './icons'

export function FloatingLine() {
  const { copy } = useI18n()

  return (
    <a
      href={brand.lineUrl}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-line px-3.5 py-2.5 text-xs font-bold text-white shadow-[0_12px_30px_rgba(6,199,85,0.35)] transition hover:brightness-110 sm:px-4 sm:py-3 sm:text-sm"
      aria-label={copy.floatingLineAria}
    >
      <LineIcon className="h-5 w-5" />
      LINE {brand.lineId}
    </a>
  )
}
