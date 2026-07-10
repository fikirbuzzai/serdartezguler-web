import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { SERVICES } from '@/content/services'
import { ANSWER_PAGES } from '@/content/answers'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now  = new Date()

  return [
    { url: base,                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/hakkinda`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/framework`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/knowledge`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/st-agent`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...SERVICES.map(s => ({
      url: `${base}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8,
    })),
    ...ANSWER_PAGES.map(p => ({
      url: `${base}/answers/${p.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9,
    })),
  ]
}
