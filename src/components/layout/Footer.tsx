import Link from 'next/link'
import { siteConfig, WA_CTA } from '@/lib/config'
import { SERVICES } from '@/content/services'

const FOOTER_COLS = [
  {
    title: 'Solutions',
    links: SERVICES.map(s => ({ label: s.label, href: `/services/${s.slug}` })),
  },
  {
    title: 'Framework',
    links: [
      { label: 'ST Growth Framework™', href: '/framework' },
      { label: '01 · Assess',         href: '/framework#assess' },
      { label: '02 · Strategy',       href: '/framework#strategy' },
      { label: '03 · Systems',        href: '/framework#systems' },
      { label: '04 · Execution',      href: '/framework#execution' },
      { label: '05 · Scale',          href: '/framework#scale' },
    ],
  },
  {
    title: 'Knowledge',
    links: [
      { label: 'AI Growth Nedir?',       href: '/answers/ai-growth-nedir' },
      { label: 'GEO Nedir?',             href: '/answers/geo-nedir' },
      { label: 'CEO & AI Dönüşüm',       href: '/answers/ceo-ai-donusum' },
      { label: 'AI Agent Nedir?',        href: '/answers/ai-agent-nedir' },
      { label: 'Tüm Hub →',              href: '/knowledge' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'ST Agent ✦',     href: '/st-agent' },
      { label: 'Speaking',       href: '/hakkinda#speaking' },
      { label: 'About & Press',  href: '/hakkinda' },
      { label: 'SMK ↗',         href: siteConfig.social.youtube },
    ],
  },
]

const SOCIAL_LINKS = [
  { label: 'W',  href: WA_CTA,                      title: 'WhatsApp',  wa: true },
  { label: 'in', href: siteConfig.social.linkedin,   title: 'LinkedIn' },
  { label: 'ig', href: siteConfig.social.instagram,  title: 'Instagram' },
  { label: '𝕏',  href: siteConfig.social.twitter,    title: 'X/Twitter' },
  { label: '▶',  href: siteConfig.social.youtube,    title: 'YouTube' },
  { label: '@',  href: `mailto:${siteConfig.email}`, title: 'E-posta' },
]

export function Footer() {
  return (
    <footer style={{ background: 'var(--s1)', borderTop: '1px solid var(--br)' }}>
      {/* ST Agent bar */}
      <div style={{ background: 'linear-gradient(90deg,rgba(79,126,255,.08),rgba(124,58,237,.06))', borderBottom: '1px solid rgba(79,126,255,.2)', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
        <div style={{ fontSize: 14, color: 'var(--t2)' }}>
          <strong style={{ color: 'var(--text)' }}>ST Agent</strong> — AI büyüme potansiyelinizi 5 dakikada analiz edin.{' '}
          <span style={{ opacity: .5, fontSize: 12 }}>Beta · 2026</span>
        </div>
        <Link
          href="/st-agent"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold text-white"
          style={{ background: 'linear-gradient(135deg,#4F7EFF,#7C3AED)', whiteSpace: 'nowrap' }}
        >
          Beta Listesine Katıl
        </Link>
      </div>

      {/* Main footer */}
      <div style={{ padding: '52px 40px 28px', maxWidth: 'var(--max)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-space)', fontWeight: 700, fontSize: 17, marginBottom: 10 }}>
              {siteConfig.name}<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p style={{ fontFamily: 'var(--font-space)', fontSize: 13, color: 'var(--t2)', marginBottom: 18, lineHeight: 1.55 }}>
              AI Dönüşüm Uzmanı · Stratejik Partner · Eğitmen
            </p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  title={s.title}
                  style={{
                    width: 34, height: 34, border: `1px solid ${s.wa ? 'rgba(37,211,102,.28)' : 'var(--br)'}`,
                    borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-space)', fontSize: 12, fontWeight: 700,
                    color: s.wa ? '#25D366' : 'var(--t2)', textDecoration: 'none', transition: 'all .2s',
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
            {FOOTER_COLS.map(col => (
              <div key={col.title}>
                <span style={{ fontFamily: 'var(--font-space)', fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--t3)', display: 'block', marginBottom: 14 }}>
                  {col.title}
                </span>
                {col.links.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ display: 'block', fontFamily: 'var(--font-space)', fontSize: 13, color: 'var(--t2)', marginBottom: 9, textDecoration: 'none', transition: 'color .18s' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--br)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--t3)' }}>
          <span>© 2026 {siteConfig.name} · AI Dönüşüm Uzmanı & Stratejik Partner</span>
          <span>SMK · Fikirbuzz</span>
        </div>
      </div>
    </footer>
  )
}
