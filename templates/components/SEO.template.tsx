// components/SEO.tsx — Safe Harbor
// Drop this into /components/SEO.tsx in the Next.js project.
//
// Generates consistent metadata for every page from the content JSON files.
// Use generateMetadata() in each page.tsx to call this.
//
// Usage in a page file:
//
//   import { generatePageMetadata } from '@/components/SEO'
//
//   export async function generateMetadata({ params }: PageProps) {
//     return generatePageMetadata(params.locale, 'home')
//   }

import type { Metadata } from 'next'
import type { Locale } from '@/lib/utils'

// ─────────────────────────────────────────────
// Page names — must match content JSON filenames
// ─────────────────────────────────────────────
export type PageName = 'home' | 'about' | 'services' | 'faq' | 'contact'

// ─────────────────────────────────────────────
// Base site URL — update before launch
// ─────────────────────────────────────────────
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sonya-zilman.com'

// ─────────────────────────────────────────────
// OG image paths — one per page, stored in /public/og/
// ─────────────────────────────────────────────
const OG_IMAGES: Record<PageName, string> = {
  home:     '/og/home.jpg',
  about:    '/og/about.jpg',
  services: '/og/services.jpg',
  faq:      '/og/faq.jpg',
  contact:  '/og/contact.jpg',
}

// ─────────────────────────────────────────────
// generatePageMetadata
// Call from generateMetadata() in each page.tsx
// ─────────────────────────────────────────────
export async function generatePageMetadata(
  locale: Locale,
  page: PageName,
): Promise<Metadata> {
  // Load content for this locale + page
  const content = await import(`@/content/${locale}/${page}.json`)
  const { title, description } = content.default.meta

  const canonicalUrl = `${SITE_URL}/${locale}/${page === 'home' ? '' : page}`

  return {
    title,
    description,

    // Canonical URL — prevents duplicate content between locales
    alternates: {
      canonical: canonicalUrl,
      languages: {
        he: `${SITE_URL}/he/${page === 'home' ? '' : page}`,
        ru: `${SITE_URL}/ru/${page === 'home' ? '' : page}`,
      },
    },

    // Open Graph
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      locale: locale === 'he' ? 'he_IL' : 'ru_RU',
      images: [
        {
          url: OG_IMAGES[page],
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    // Twitter card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGES[page]],
    },
  }
}

// ─────────────────────────────────────────────
// Structured data helpers
// Call these inside page components to inject JSON-LD
// ─────────────────────────────────────────────

// LocalBusiness schema — use on homepage and contact page
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sonya Zilman Psychotherapy',
    // Fill in after Sonya confirms contact details:
    // address: { '@type': 'PostalAddress', addressLocality: 'Tel Aviv', addressCountry: 'IL' },
    // telephone: '',
    url: SITE_URL,
    image: `${SITE_URL}/images/sonya-zilman.jpg`,
    priceRange: '$$',
    areaServed: 'Tel Aviv',
    availableLanguage: ['Hebrew', 'Russian'],
    '@id': SITE_URL,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Person schema — use on About page
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sonya Zilman',
    jobTitle: 'Psychotherapist',
    url: `${SITE_URL}/he/about`,
    image: `${SITE_URL}/images/sonya-zilman.jpg`,
    knowsLanguage: ['he', 'ru'],
    worksFor: {
      '@type': 'LocalBusiness',
      name: 'Sonya Zilman Psychotherapy',
      '@id': SITE_URL,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
