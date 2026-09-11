type IconProps = {
  className?: string
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.2 3.6h2.3c.5 0 .9.3 1 .8l.7 2.7a1 1 0 0 1-.3 1l-1.4 1.4a12.5 12.5 0 0 0 5.2 5.2l1.4-1.4a1 1 0 0 1 1-.3l2.7.7c.5.1.8.5.8 1v2.3a1.2 1.2 0 0 1-1.3 1.2A16.4 16.4 0 0 1 3.6 4.9 1.2 1.2 0 0 1 4.8 3.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4.2 7.2 7.8 6.2 7.8-6.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

export function LineIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.7 10.1c0-3.7-3.7-6.7-8.3-6.7S3.1 6.4 3.1 10.1c0 3.3 2.9 6.1 6.9 6.6.27.06.64.18.73.41.08.21.05.55.03.77l-.12 1c-.04.16-.16.63.55.34 3.1-1.3 8.51-5 8.51-9.12Z" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6.2-5.1 6.2-10.1A6.2 6.2 0 0 0 12 4.7a6.2 6.2 0 0 0-6.2 6.2C5.8 15.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10.8" r="2.1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.8 12h16.4M12 3.8c2.2 2.3 3.3 5.1 3.3 8.2S14.2 18 12 20.2C9.8 18 8.7 15.1 8.7 12S9.8 6.1 12 3.8Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
