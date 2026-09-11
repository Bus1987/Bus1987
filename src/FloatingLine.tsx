import { brand } from './brand'
import { LineIcon } from './icons'

export function FloatingLine() {
  return (
    <a
      href={brand.lineUrl}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-line px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(6,199,85,0.35)] transition hover:brightness-110"
      aria-label={`แชท LINE ${brand.lineId}`}
    >
      <LineIcon className="h-5 w-5" />
      LINE {brand.lineId}
    </a>
  )
}
