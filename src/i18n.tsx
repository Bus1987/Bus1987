import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { brand } from './brand'

export type Lang = 'th' | 'en'

const STORAGE_KEY = 'procom-lang'

type ServiceItem = { title: string; desc: string }
type PointItem = { title: string; desc: string }
type StepItem = { n: string; title: string; desc: string }

export type Copy = {
  documentTitle: string
  documentDescription: string
  skipToContent: string
  languageLabel: string
  navAria: string
  navMobileAria: string
  openMenu: string
  closeMenu: string
  nav: {
    services: string
    whyUs: string
    process: string
    about: string
    contact: string
  }
  call: string
  email: string
  emailCta: string
  chatLine: string
  hero: {
    headline: string
    headlineAccent: string
    body: string
    chips: string[]
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    items: ServiceItem[]
  }
  whyUs: {
    eyebrow: string
    title: string
    body: string
    points: PointItem[]
  }
  process: {
    eyebrow: string
    title: string
    steps: StepItem[]
  }
  about: {
    eyebrow: string
    body: string
    leadership: string
    qrWeb: string
    qrEmail: string
    qrLine: string
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    phone: string
    email: string
    line: string
    website: string
    location: string
    formTitle: string
    formHint: string
    name: string
    phoneField: string
    details: string
    submit: string
    mailSubject: string
    mailName: string
    mailPhone: string
  }
  footer: {
    blurb: string
    pages: string
    contact: string
  }
  floatingLineAria: string
}

const th: Copy = {
  documentTitle: 'ซ่อมคอมพิวเตอร์ ระยอง | PROCOM SERVICES',
  documentDescription:
    'PROCOM SERVICES บริการซ่อมคอมพิวเตอร์ โน้ตบุ๊ก ลงโปรแกรม ติดตั้ง อัปเกรด และไอทีครบวงจร ที่ระยอง โทร 095-914-2416 หรือแชท LINE @462ysyuy',
  skipToContent: 'ข้ามไปยังเนื้อหา',
  languageLabel: 'ภาษา',
  navAria: 'หลัก',
  navMobileAria: 'มือถือ',
  openMenu: 'เปิดเมนู',
  closeMenu: 'ปิดเมนู',
  nav: {
    services: 'บริการ',
    whyUs: 'จุดเด่น',
    process: 'ขั้นตอน',
    about: 'เกี่ยวกับเรา',
    contact: 'ติดต่อ',
  },
  call: 'โทร',
  email: 'อีเมล',
  emailCta: 'ส่งอีเมล',
  chatLine: 'แชท LINE',
  hero: {
    headline: 'ซ่อมคอมพิวเตอร์ โน้ตบุ๊ก',
    headlineAccent: 'และไอทีครบวงจร',
    body: `ที่ปรึกษาปัญหาคอมพิวเตอร์ ลงโปรแกรม ติดตั้ง อัปเกรด ครบวงจร โดย ${brand.name} ดูแลงานตั้งแต่ตรวจเช็คจนถึงส่งมอบ ที่${brand.locationTh}`,
    chips: ['ซ่อม PC / โน้ตบุ๊ก', 'Windows และซอฟต์แวร์', 'RAM / SSD', 'IT Support'],
  },
  services: {
    eyebrow: 'บริการ',
    title: 'ดูแลคอมพิวเตอร์ครบทุกงานที่ใช้งานจริง',
    intro: 'รับงานซ่อม ติดตั้ง อัปเกรด และให้คำปรึกษา โดยเน้นอธิบายภาษาเข้าใจง่าย ไม่ยัดเยียดรายการที่ไม่จำเป็น',
    items: [
      {
        title: 'ซ่อมคอมพิวเตอร์ตั้งโต๊ะ',
        desc: 'ตรวจเช็คอาการเครื่อง PC แก้ปัญหาเปิดไม่ติด ช้า ร้อน หรือใช้งานไม่เสถียร ให้พร้อมกลับมาทำงาน',
      },
      {
        title: 'ซ่อมโน้ตบุ๊ก',
        desc: 'ดูแลโน้ตบุ๊กทั้งเครื่องร้อน แบต หน้าจอ คีย์บอร์ด และอาการใช้งานทั่วไปที่เจอในชีวิตประจำวัน',
      },
      {
        title: 'Windows และซอฟต์แวร์',
        desc: 'ลงวินโดว์ ลงโปรแกรม แก้ระบบช้า ตั้งค่าการใช้งาน และจัดเครื่องให้พร้อมใช้งานจริง',
      },
      {
        title: 'อัปเกรด RAM / SSD',
        desc: 'เพิ่มแรม เปลี่ยน SSD เพื่อให้เปิดเครื่องเร็วขึ้น ทำงานหลายโปรแกรมได้ลื่นขึ้น',
      },
      {
        title: 'ทำความสะอาดเครื่อง',
        desc: 'เป่าฝุ่น ดูแลระบบระบายความร้อน และจัดระเบียบภายในเครื่อง ลดร้อน ลดเสียงดัง',
      },
      {
        title: 'ที่ปรึกษาด้านคอมพิวเตอร์',
        desc: 'คุยอาการเครื่อง วางแผนอัปเกรด หรือเลือกแนวทางซ่อม/ติดตั้งให้เหมาะกับการใช้งาน',
      },
      {
        title: 'IT Support',
        desc: 'สนับสนุนการใช้งานคอมพิวเตอร์และระบบเบื้องต้น สำหรับบ้านและธุรกิจขนาดเล็ก',
      },
      {
        title: 'บริการครบวงจร',
        desc: 'ตั้งแต่ตรวจเช็ค ซ่อม ติดตั้ง อัปเกรด ไปจนถึงทดสอบส่งมอบพร้อมคำแนะนำการดูแลต่อ',
      },
    ],
  },
  whyUs: {
    eyebrow: 'ทำไมต้อง PROCOM',
    title: 'บริการคอมพิวเตอร์ที่คุยรู้เรื่อง และลงมือจนงานจบ',
    body: `${brand.name} ตั้งอยู่ในระยอง ดูแลงานคอมพิวเตอร์และเทคโนโลยีดิจิทัลแบบครบวงจร เน้นงานจริง อธิบายตรงไปตรงมา และติดต่อได้ตามช่องทางบนนามบัตร`,
    points: [
      {
        title: 'คุยตรง ตรวจตรง',
        desc: 'อธิบายอาการและแนวทางแก้ไขให้เข้าใจง่าย แนะนำเท่าที่เครื่องต้องการจริง',
      },
      {
        title: 'งานครบวงจร จบที่เดียว',
        desc: 'ซ่อม ลงโปรแกรม ติดตั้ง อัปเกรด ทำความสะอาด และให้คำปรึกษาต่อเนื่องได้ในที่เดียว',
      },
      {
        title: 'ติดต่อง่าย ที่ระยอง',
        desc: 'โทร อีเมล หรือแชท LINE ได้ตามช่องทางที่ลงบนนามบัตร ไม่ต้องเดาช่องทางติดต่อ',
      },
      {
        title: 'ส่งมอบพร้อมคำแนะนำ',
        desc: 'ทดสอบการใช้งานก่อนส่งคืน และบอกวิธีดูแลเครื่องต่อให้อยู่ในสภาพพร้อมใช้',
      },
    ],
  },
  process: {
    eyebrow: 'ขั้นตอนการบริการ',
    title: 'เริ่มจากคุยอาการ จบที่เครื่องพร้อมใช้',
    steps: [
      {
        n: '01',
        title: 'ติดต่อเรา',
        desc: `โทร ${brand.phoneDisplay} ส่งอีเมล หรือแชท LINE ${brand.lineId} บอกอาการเครื่องและสิ่งที่ต้องการ`,
      },
      {
        n: '02',
        title: 'ตรวจเช็ค',
        desc: 'ประเมินอาการ ชี้แนวทางซ่อม ติดตั้ง หรืออัปเกรด ให้เห็นภาพก่อนลงมือ',
      },
      {
        n: '03',
        title: 'ดำเนินการ',
        desc: 'ซ่อม ลงโปรแกรม ติดตั้ง ทำความสะอาด หรืออัปเกรดตามที่ตกลงไว้',
      },
      {
        n: '04',
        title: 'ส่งมอบ',
        desc: 'ทดสอบการใช้งาน อธิบายผลงาน และแนะนำวิธีดูแลเครื่องต่อ',
      },
    ],
  },
  about: {
    eyebrow: 'เกี่ยวกับเรา',
    body: 'ผู้ให้บริการด้านคอมพิวเตอร์และเทคโนโลยีดิจิทัล ที่ระยอง ประเทศไทย รับดูแลงานซ่อมคอมพิวเตอร์ โน้ตบุ๊ก ลงโปรแกรม ติดตั้ง อัปเกรด ทำความสะอาดเครื่อง ให้คำปรึกษา และ IT Support แบบครบวงจร',
    leadership: 'ผู้บริหาร',
    qrWeb: 'QR เว็บไซต์',
    qrEmail: 'QR อีเมล',
    qrLine: 'QR LINE',
  },
  contact: {
    eyebrow: 'ติดต่อ',
    title: 'พร้อมรับเรื่องซ่อมและให้คำปรึกษา',
    intro: `ใช้ช่องทางตามนามบัตรได้เลย ทั้งโทร อีเมล เว็บไซต์ และ LINE ${brand.lineId}`,
    phone: 'โทร',
    email: 'อีเมล',
    line: 'LINE',
    website: 'เว็บไซต์',
    location: 'ที่ตั้ง',
    formTitle: 'ส่งข้อความทางอีเมล',
    formHint: `ฟอร์มนี้จะเปิดโปรแกรมอีเมลของคุณไปที่ ${brand.email}`,
    name: 'ชื่อ',
    phoneField: 'เบอร์โทร',
    details: 'รายละเอียด',
    submit: 'เปิดอีเมลเพื่อส่งข้อความ',
    mailSubject: `ติดต่อ ${brand.name}`,
    mailName: 'ชื่อ',
    mailPhone: 'โทร',
  },
  footer: {
    blurb: `ซ่อมคอมพิวเตอร์ โน้ตบุ๊ก ลงโปรแกรม ติดตั้ง อัปเกรด และไอทีครบวงจร ที่${brand.locationTh}`,
    pages: 'หน้าเว็บ',
    contact: 'ติดต่อ',
  },
  floatingLineAria: `แชท LINE ${brand.lineId}`,
}

const en: Copy = {
  documentTitle: 'Computer repair in Rayong | PROCOM SERVICES',
  documentDescription:
    'PROCOM SERVICES — computer and notebook repair, software setup, installs, upgrades, and full-cycle IT in Rayong. Call 095-914-2416 or LINE @462ysyuy.',
  skipToContent: 'Skip to content',
  languageLabel: 'Language',
  navAria: 'Primary',
  navMobileAria: 'Mobile',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  nav: {
    services: 'Services',
    whyUs: 'Why us',
    process: 'Process',
    about: 'About',
    contact: 'Contact',
  },
  call: 'Call',
  email: 'Email',
  emailCta: 'Email us',
  chatLine: 'Chat on LINE',
  hero: {
    headline: 'Computer and notebook repair',
    headlineAccent: 'and full-cycle IT',
    body: `PC troubleshooting, software setup, installs, and upgrades — handled from diagnosis through handover in ${brand.location} by ${brand.name}.`,
    chips: ['PC / notebook repair', 'Windows & software', 'RAM / SSD', 'IT Support'],
  },
  services: {
    eyebrow: 'Services',
    title: 'Computer care for the work you actually do',
    intro: 'Repair, installation, upgrades, and advice — explained in plain language, with no extras you do not need.',
    items: [
      {
        title: 'Desktop PC repair',
        desc: 'Diagnose desktop PCs that will not start, run slow, overheat, or crash, and get them back to stable work.',
      },
      {
        title: 'Notebook repair',
        desc: 'Heat issues, batteries, screens, keyboards, and the everyday notebook problems people actually hit.',
      },
      {
        title: 'Windows & software',
        desc: 'Fresh Windows installs, programs, slow-system fixes, and setup so the machine is ready to use.',
      },
      {
        title: 'RAM / SSD upgrades',
        desc: 'Add memory or switch to SSD for faster boot times and smoother multitasking.',
      },
      {
        title: 'Machine cleaning',
        desc: 'Dust-out, cooling care, and an internal tidy-up to cut heat and noise.',
      },
      {
        title: 'Computer consulting',
        desc: 'Talk through symptoms, plan an upgrade, or choose a repair or install path that fits how you work.',
      },
      {
        title: 'IT Support',
        desc: 'Day-to-day computer and basic systems help for homes and small businesses.',
      },
      {
        title: 'Full-cycle service',
        desc: 'From inspection and repair through install, upgrade, testing, and handover with care tips.',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why PROCOM',
    title: 'Computer service that talks straight and finishes the job',
    body: `${brand.name} is based in Rayong. We handle computer and digital-tech work end to end — practical, direct, and easy to reach on the channels printed on our card.`,
    points: [
      {
        title: 'Straight talk, honest diagnosis',
        desc: 'We explain the issue and the fix in plain language, and only recommend what the machine actually needs.',
      },
      {
        title: 'Full-cycle, one place',
        desc: 'Repair, software, installs, upgrades, cleaning, and ongoing advice — without sending you elsewhere.',
      },
      {
        title: 'Easy to reach in Rayong',
        desc: 'Call, email, or LINE using the contacts on our business card. No guessing which channel to use.',
      },
      {
        title: 'Handover with care tips',
        desc: 'We test before return and show you how to keep the machine in working shape.',
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'Start with the symptoms. Finish with a machine that is ready to use.',
    steps: [
      {
        n: '01',
        title: 'Get in touch',
        desc: `Call ${brand.phoneDisplay}, email, or LINE ${brand.lineId}. Tell us what is happening and what you need.`,
      },
      {
        n: '02',
        title: 'Diagnose',
        desc: 'We assess the issue and outline repair, install, or upgrade options before we start.',
      },
      {
        n: '03',
        title: 'Do the work',
        desc: 'Repair, software, install, cleaning, or upgrade as agreed.',
      },
      {
        n: '04',
        title: 'Handover',
        desc: 'We test the machine, walk through the work, and share simple care tips.',
      },
    ],
  },
  about: {
    eyebrow: 'About us',
    body: `${brand.name} is a computer and digital-technology service in ${brand.location}. We repair PCs and notebooks, install software, upgrade hardware, clean machines, advise, and provide IT support — end to end.`,
    leadership: 'Leadership',
    qrWeb: 'Website QR',
    qrEmail: 'Email QR',
    qrLine: 'LINE QR',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Ready for repair jobs and practical advice',
    intro: `Use the channels on our card: phone, email, website, and LINE ${brand.lineId}`,
    phone: 'Phone',
    email: 'Email',
    line: 'LINE',
    website: 'Website',
    location: 'Location',
    formTitle: 'Send a message by email',
    formHint: `This form opens your email app to ${brand.email}`,
    name: 'Name',
    phoneField: 'Phone',
    details: 'Details',
    submit: 'Open email to send',
    mailSubject: `Contact ${brand.name}`,
    mailName: 'Name',
    mailPhone: 'Phone',
  },
  footer: {
    blurb: `Computer and notebook repair, software setup, installs, upgrades, and full-cycle IT in ${brand.location}`,
    pages: 'Pages',
    contact: 'Contact',
  },
  floatingLineAria: `Chat on LINE ${brand.lineId}`,
}

const dictionaries: Record<Lang, Copy> = { th, en }

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  copy: Copy
}

const I18nContext = createContext<I18nContextValue | null>(null)

function readStoredLang(): Lang {
  if (typeof window === 'undefined') return 'th'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' || stored === 'th' ? stored : 'th'
}

function applyDocumentLang(lang: Lang, copy: Copy) {
  document.documentElement.lang = lang
  document.title = copy.documentTitle
  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute('content', copy.documentDescription)
  }
  const ogLocale = document.querySelector('meta[property="og:locale"]')
  if (ogLocale) {
    ogLocale.setAttribute('content', lang === 'th' ? 'th_TH' : 'en_US')
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)
  const copy = dictionaries[lang]

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    applyDocumentLang(lang, copy)
  }, [lang, copy])

  const value = useMemo(() => ({ lang, setLang, copy }), [lang, setLang, copy])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within LanguageProvider')
  }
  return context
}

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang, copy } = useI18n()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-royal/20 bg-white px-1 py-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label={copy.languageLabel}
    >
      <button
        type="button"
        className={`rounded-full px-2.5 py-1 transition ${lang === 'th' ? 'bg-royal text-white' : 'text-royal hover:bg-sky'}`}
        aria-pressed={lang === 'th'}
        onClick={() => setLang('th')}
      >
        TH
      </button>
      <button
        type="button"
        className={`rounded-full px-2.5 py-1 transition ${lang === 'en' ? 'bg-royal text-white' : 'text-royal hover:bg-sky'}`}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  )
}

export function navLinks(copy: Copy) {
  return [
    { href: '#services', label: copy.nav.services },
    { href: '#why-us', label: copy.nav.whyUs },
    { href: '#process', label: copy.nav.process },
    { href: '#about', label: copy.nav.about },
    { href: '#contact', label: copy.nav.contact },
  ]
}
