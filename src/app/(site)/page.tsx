import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, WA_CTA } from '@/lib/config'
import { SERVICES } from '@/content/services'

export const metadata: Metadata = {
  title: `${siteConfig.name} — AI Dönüşüm Uzmanı & Stratejik Partner`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
}

const PROBLEMS = [
  { n: '01', h: 'Araç var, sistem yok', p: 'ChatGPT hesabı açıldı, prompts denendi. Hiçbir şey sürece, satışa ya da büyümeye entegre edilemedi. Araç kullanmak AI dönüşümü değildir.' },
  { n: '02', h: 'AI aramalarında görünmüyorsunuz', p: 'Alıcıların büyük çoğunluğu kararlarını ChatGPT, Gemini veya Perplexity\'e sorarak veriyor. Markanız burada önerilmiyor.' },
  { n: '03', h: 'Liderlik yanlış sorular soruyor', p: '"Hangi AI aracını alalım?" yanlış soru. Doğrusu: "AI ile hangi dönüşüm problemini çözeceğiz?"' },
]

const FRAMEWORK_STEPS = [
  { n: '01', w: 'Assess',    h: 'Nerede olduğunuzu görün',         p: 'AI olgunluğunu, darboğazları ve rekabetçi konumu nesnel ölçeriz.' },
  { n: '02', w: 'Strategy',  h: 'Nereye gideceğinizi netleştirin',  p: '90 günlük somut yol haritası. Hangi yatırım, hangi sırayla.' },
  { n: '03', w: 'Systems',   h: 'Makineyi kurun',                   p: 'İçerik, satış, GEO ve agent sistemleri. Süreç değil, motor.' },
  { n: '04', w: 'Execution', h: 'Uygulamaya geçin',                 p: 'Plandan sonuçlara. Her adımın sorumlusu ve takvimi netleştirilmiş.' },
  { n: '05', w: 'Scale',     h: 'Kalıcı avantaja dönüştürün',       p: 'Ölç, optimize et, büyüt. Tek seferlik proje değil, kalıcı avantaj.' },
]

const FAQS = [
  { q: 'AI dönüşüm uzmanı ne yapar?', a: 'Şirketlerin yapay zekâ araçlarını büyüme ve dönüşüm sistemlerine entegre etmesine rehberlik eder. Analiz, strateji, sistem kurulumu ve ölçeklendirme.' },
  { q: 'GEO nedir ve neden önemli?', a: 'GEO (Generative Engine Optimization), markaların ChatGPT, Gemini ve Perplexity gibi AI motorlarında önerilmesini sağlayan stratejidir.' },
  { q: 'AI Readiness Audit ne kadar sürer?', a: 'Standart süreç 2–3 haftada tamamlanır. Çıktı: AI Readiness Score, öncelik haritası ve 90 günlük başlangıç roadmap\'i.' },
  { q: 'CEO Workshop hangi şirketlere uygundur?', a: '50–500 kişi arası kurumsal şirketler ve scale-up\'lar. Yönetim ekibinin 4–6 kişi katılması önerilir.' },
  { q: 'ST Agent nedir?', a: 'Şirketlerin AI büyüme potansiyelini 5 dakikada analiz eden yapay zekâ aracı. 2026 içinde beta\'ya açılacak.' },
]

export default function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id':   `${siteConfig.url}/#person`,
        name:    siteConfig.name,
        jobTitle: 'AI Dönüşüm Uzmanı, Stratejik Partner ve Eğitmen',
        description: siteConfig.description,
        url:     siteConfig.url,
        image:   `${siteConfig.url}/images/portrait.jpg`,
        sameAs:  Object.values(siteConfig.social),
        knowsAbout: ['AI Dönüşüm', 'GEO', 'AI Büyüme Stratejisi', 'Dijital Dönüşüm', 'Eğitim'],
      },
      {
        '@type': 'WebSite',
        '@id':   `${siteConfig.url}/#site`,
        url:     siteConfig.url,
        name:    siteConfig.name,
        publisher: { '@id': `${siteConfig.url}/#person` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({
          '@type': 'Question',
          name:    f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  const S: React.CSSProperties = {}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ── */}
      <section style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', minHeight: 'calc(100vh - 62px)' }}>
        <div style={{ padding: '72px 40px 72px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--bg)', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2.5s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'var(--font-space)', fontSize: 12, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              AI Dönüşüm Uzmanı · Stratejik Partner
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-space)', fontSize: 'clamp(48px,5.5vw,72px)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: 1.03, marginBottom: 10 }}>
            {siteConfig.name}<span style={{ color: 'var(--accent)' }}>.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-space)', fontSize: 'clamp(18px,2vw,26px)', fontWeight: 600, color: 'var(--t2)', lineHeight: 1.4, marginBottom: 20, maxWidth: 500 }}>
            Şirketlerin yapay zekâ çağında{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>dönüşmesine ve büyümesine</em>{' '}
            rehberlik eden danışman, stratejist ve eğitmen.
          </p>
          <p style={{ fontSize: 15, color: 'var(--t2)', maxWidth: 440, marginBottom: 32, lineHeight: 1.72 }}>
            CEO'lar, kurucular ve yönetim ekipleri için AI dönüşüm yönetimi, büyüme sistemleri ve GEO görünürlüğü.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}>
            <Link href="/services/ai-readiness-audit"
              style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', borderRadius: 12, background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-space)', fontSize: 16, fontWeight: 700, textDecoration: 'none', transition: 'all .2s' }}>
              AI Readiness Test
            </Link>
            <a href={WA_CTA} target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', borderRadius: 12, background: '#25D366', color: '#fff', fontFamily: 'var(--font-space)', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
              Görüşme Talep Et
            </a>
          </div>

          {/* Credential strip — only verified claim */}
          <div style={{ display: 'flex', background: 'var(--s1)', border: '1px solid var(--br)', borderRadius: 10, overflow: 'hidden', maxWidth: 360 }}>
            <div style={{ flex: 1, padding: '14px 18px', borderRight: '1px solid var(--br)' }}>
              <div style={{ fontFamily: 'var(--font-space)', fontSize: 22, fontWeight: 700, letterSpacing: '-.03em', color: 'var(--text)', lineHeight: 1 }}>
                20<span style={{ color: 'var(--accent)', fontSize: 14 }}>+</span>
              </div>
              <div style={{ fontFamily: 'var(--font-space)', fontSize: 11, color: 'var(--t2)', marginTop: 4 }}>Yıl Deneyim</div>
            </div>
            <div style={{ flex: 2, padding: '14px 18px' }}>
              <div style={{ fontFamily: 'var(--font-space)', fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.35 }}>
                SMK · Fikirbuzz
              </div>
              <div style={{ fontFamily: 'var(--font-space)', fontSize: 11, color: 'var(--t2)', marginTop: 4 }}>Platform & Ajans</div>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--s1)', borderLeft: '1px solid var(--br)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 36px 40px 28px', position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 340 }}>
            <div style={{ position: 'absolute', left: -3, top: '18%', bottom: '18%', width: 3, background: 'var(--accent)', borderRadius: '0 2px 2px 0' }} />
            <div style={{ width: '100%', aspectRatio: '3/4', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--br)', background: 'var(--s2)' }}>
              <Image src="/images/portrait.jpg" alt="Serdar Tezgüler — AI Dönüşüm Uzmanı" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
            </div>
            <div style={{ position: 'absolute', bottom: -16, right: -16, background: 'var(--s2)', border: '1px solid var(--bra)', borderRadius: 10, padding: '12px 16px', fontFamily: 'var(--font-space)', fontSize: 12, color: 'var(--t2)' }}>
              <strong style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>AI Dönüşüm & Strateji</strong>
              Danışman · Eğitmen · Stratejist
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ background: 'var(--bg)', padding: '88px 40px' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-space)', fontSize: 'clamp(22px,2.8vw,32px)', fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1.3, maxWidth: 640, marginBottom: 44 }}>
            Şirketiniz AI <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>kullanıyor.</em>{' '}
            Ama AI ile <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>dönüşemiyor.</em>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: 'var(--br)', borderRadius: 10, overflow: 'hidden' }}>
            {PROBLEMS.map(p => (
              <div key={p.n} style={{ background: 'var(--s1)', padding: '34px 26px', transition: 'background .2s' }}>
                <div style={{ fontFamily: 'var(--font-space)', fontSize: 10, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>{p.n} · Problem</div>
                <h3 style={{ fontFamily: 'var(--font-space)', fontSize: 17, fontWeight: 700, letterSpacing: '-.02em', marginBottom: 10 }}>{p.h}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.72, color: 'var(--t2)' }}>{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK ── */}
      <section style={{ background: 'var(--bg)', padding: '0 40px 88px' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-space)', fontSize: 11, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: 14 }}>Metodoloji</span>
          <h2 style={{ fontFamily: 'var(--font-space)', fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 700, letterSpacing: '-.04em', marginBottom: 8 }}>
            ST Growth Framework<span style={{ color: 'var(--accent)' }}>™</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {FRAMEWORK_STEPS.map((step, i) => (
              <div key={step.n} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 24, padding: '32px 0', borderBottom: i < 4 ? '1px solid var(--br)' : 'none', alignItems: 'start' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--s2)', border: '1px solid var(--bra)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-space)', fontSize: 9, fontWeight: 700, letterSpacing: '.08em', color: 'var(--t2)' }}>{step.n}</span>
                  <span style={{ fontFamily: 'var(--font-space)', fontSize: 16, fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>{step.w}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-space)', fontSize: 20, fontWeight: 700, letterSpacing: '-.025em', marginBottom: 8 }}>{step.h}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.74, color: 'var(--t2)' }}>{step.p}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/framework"
              style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 22px', borderRadius: 10, border: '1px solid var(--bra)', color: 'var(--accent)', fontFamily: 'var(--font-space)', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'all .2s' }}>
              Framework'ün tamamını gör →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: 'var(--s1)', borderTop: '1px solid var(--br)', padding: '88px 40px' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <span style={{ fontFamily: 'var(--font-space)', fontSize: 11, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: 10 }}>Solutions</span>
              <h2 style={{ fontFamily: 'var(--font-space)', fontSize: 'clamp(26px,3.2vw,40px)', fontWeight: 700, letterSpacing: '-.04em', marginBottom: 4 }}>Araç değil. <span style={{ color: 'var(--accent)' }}>Sistem.</span></h2>
            </div>
            <Link href="/services" style={{ display: 'inline-flex', padding: '8px 18px', borderRadius: 8, border: '1px solid var(--br)', color: 'var(--t2)', fontFamily: 'var(--font-space)', fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>Tümünü gör →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg)', border: '1px solid var(--br)', borderRadius: 10, padding: '28px 22px', textDecoration: 'none', transition: 'all .22s' }}>
                <div style={{ fontSize: 11, fontFamily: 'var(--font-space)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', background: 'var(--ad)', color: 'var(--accent)', padding: '3px 9px', borderRadius: 4, marginBottom: 12, display: 'inline-block', alignSelf: 'flex-start' }}>{s.badge}</div>
                <div style={{ fontSize: 20, marginBottom: 10 }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-space)', fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6 }}>Problem → {s.problem}</div>
                <h3 style={{ fontFamily: 'var(--font-space)', fontSize: 16, fontWeight: 700, letterSpacing: '-.02em', marginBottom: 8, color: 'var(--text)' }}>{s.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--t2)', flex: 1, marginBottom: 12 }}>{s.description}</p>
                <span style={{ fontFamily: 'var(--font-space)', fontSize: 13, fontWeight: 600, color: 'var(--accent)' }}>{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: 'var(--bg)', padding: '88px 40px' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-space)', fontSize: 11, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: 14 }}>Bir Sonraki Adım</span>
          <h2 style={{ fontFamily: 'var(--font-space)', fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 700, letterSpacing: '-.04em', marginBottom: 14, maxWidth: 520, margin: '0 auto 14px' }}>
            "Serdar Tezgüler ile görüşmem gerekiyor."
          </h2>
          <p style={{ fontSize: 15, color: 'var(--t2)', maxWidth: 380, margin: '0 auto 28px' }}>Bu fikir aklınıza geldiyse, doğru sayfadasınız.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services/ai-readiness-audit"
              style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', borderRadius: 12, background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-space)', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
              AI Readiness Test
            </Link>
            <a href={`${WA_CTA}&text=${encodeURIComponent('30 dakika strateji görüşmesi talep ediyorum.')}`} target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', borderRadius: 12, background: '#25D366', color: '#fff', fontFamily: 'var(--font-space)', fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
              30 Dk Görüşme
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
