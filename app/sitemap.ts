// app/sitemap.ts — Auto-generated XML sitemap
// Next.js reads this at build time (and on-demand in dev) to produce /sitemap.xml

import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sofia-tarasov.com'
const LOCALES = ['he', 'ru'] as const
const PAGES = ['', 'about', 'services', 'faq', 'contact'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of LOCALES) {
    for (const page of PAGES) {
      const path = page === '' ? `/${locale}` : `/${locale}/${page}`
      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [
              l,
              `${SITE_URL}/${l}${page === '' ? '' : `/${page}`}`,
            ]),
          ),
        },
      })
    }
  }

  return entries
}
