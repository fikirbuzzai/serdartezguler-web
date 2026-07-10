import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Serdar Tezgüler',
  tagline: 'AI Dönüşüm Uzmanı · Stratejik Partner · Eğitmen',
  description:
    'Şirketlerin yapay zekâ çağında dönüşmesine ve büyümesine rehberlik eden danışman, stratejist ve eğitmen.',
  url: 'https://serdartezguler.com',
  email: 'st@serdartezguler.com',
  whatsapp: '905326158718',
  social: {
    linkedin: 'https://linkedin.com/in/serdartezguler',
    twitter: 'https://twitter.com/serdartezguler',
    instagram: 'https://instagram.com/serdartezguler',
    youtube: 'https://youtube.com/@SMK',
  },
}

export const WA_BASE = `https://wa.me/${siteConfig.whatsapp}`
export const WA_CTA  = `${WA_BASE}?text=${encodeURIComponent('Merhaba Serdar Bey, görüşme talep ediyorum.')}`

export const NAV_LINKS = [
  { label: 'Solutions',  href: '/services' },
  { label: 'Framework', href: '/framework' },
  { label: 'Knowledge', href: '/knowledge' },
  { label: 'Speaking',  href: '/hakkinda#speaking' },
  { label: 'About',     href: '/hakkinda' },
  { label: 'Contact',   href: '/#contact' },
] as const
