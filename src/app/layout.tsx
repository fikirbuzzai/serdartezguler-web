import type { Metadata } from 'next'
import '@/app/globals.css'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:  `${siteConfig.name} — AI Dönüşüm Uzmanı & Stratejik Partner`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['AI dönüşüm', 'AI danışman', 'GEO', 'AI Growth', 'Serdar Tezgüler'],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  openGraph: {
    type:        'website',
    locale:      'tr_TR',
    url:         siteConfig.url,
    siteName:    siteConfig.name,
    title:       `${siteConfig.name} — AI Dönüşüm Uzmanı & Stratejik Partner`,
    description: siteConfig.description,
    images: [{ url: '/images/portrait.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card:    'summary_large_image',
    creator: '@serdartezguler',
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('st-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
