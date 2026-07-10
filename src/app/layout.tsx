import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Serdar Tezgüler — AI Growth Strategist | Türkiye'nin AI Büyüme Uzmanı",
  description:
    "Serdar Tezgüler, şirketlerin AI çağında büyüme sistemleri kurmasına yardımcı olan AI Growth Strategist. 20+ yıl, 500+ marka, CEO Workshop, AI Readiness Audit, GEO.",
  metadataBase: new URL('https://serdartezguler.com'),
  alternates: { canonical: 'https://serdartezguler.com/' },
  openGraph: {
    title: 'Serdar Tezgüler — AI Growth Strategist',
    description: 'AI çağında büyümek isteyen şirketler için strateji, sistem ve görünürlük.',
    type: 'website',
    url: 'https://serdartezguler.com/',
    images: ['https://serdartezguler.com/img/portrait.jpg']
  },
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1'
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://serdartezguler.com/#person',
      name: 'Serdar Tezgüler',
      jobTitle: 'AI Growth Strategist',
      url: 'https://serdartezguler.com',
      image: 'https://serdartezguler.com/img/portrait.jpg',
      sameAs: [
        'https://linkedin.com/in/serdartezguler',
        'https://twitter.com/serdartezguler',
        'https://youtube.com/@SMK'
      ],
      knowsAbout: [
        'AI Growth Strategy',
        'GEO',
        'Generative Engine Optimization',
        'AI Readiness',
        'Growth Systems',
        'E-Commerce',
        'Digital Transformation'
      ],
      worksFor: { '@type': 'Organization', name: 'Fikirbuzz' },
      description:
        "Türkiye'de şirketlerin AI çağında büyüme sistemleri kurmasına yardımcı olan AI Growth Strategist. 20+ yıl, 500+ marka, 100+ eğitim."
    },
    {
      '@type': 'WebSite',
      '@id': 'https://serdartezguler.com/#site',
      url: 'https://serdartezguler.com',
      name: 'Serdar Tezgüler — AI Growth Strategist',
      publisher: { '@id': 'https://serdartezguler.com/#person' }
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'AI Growth Strategist ne yapar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Şirketlerin yapay zekâ araçlarını büyüme sistemlerine dönüştürmesine yardımcı olur. Analiz, strateji, sistem kurulumu ve ölçeklendirme süreçlerini kapsar.'
          }
        },
        {
          '@type': 'Question',
          name: 'GEO nedir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generative Engine Optimization — ChatGPT, Gemini ve Perplexity gibi AI motorlarında markanın önerilmesini sağlayan optimizasyon stratejisi.'
          }
        },
        {
          '@type': 'Question',
          name: 'AI Readiness Audit ne kadar sürer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Standart süreç 2–3 haftada tamamlanır. AI Readiness Score, fırsat haritası ve 90 günlük roadmap teslim edilir."
          }
        }
      ]
    }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('st-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
