export const brand = {
  name: 'PROCOM SERVICES',
  shortName: 'PROCOM',
  tagline: 'Digital Technologies',
  ceo: 'Panyakorn Panngam',
  ceoTitle: 'Chief Executive Officer',
  phoneDisplay: '095-914-2416',
  phoneTel: '+66959142416',
  email: 'procomservices1987@gmail.com',
  webDisplay: 'www.procomservices.co.th',
  webUrl: 'https://www.procomservices.co.th',
  location: 'Rayong, Thailand',
  locationTh: 'ระยอง ประเทศไทย',
  lineId: '@462ysyuy',
  lineUrl: 'https://line.me/R/ti/p/@462ysyuy',
} as const

export const phoneHref = `tel:${brand.phoneTel}`
export const emailHref = `mailto:${brand.email}`
