// i18n.ts — Safe Harbor
// Loads content from Sanity CMS.
// Falls back to local JSON files if Sanity is unreachable or documents are missing.
// To edit content: go to your Sanity Studio → publish → site rebuilds automatically.

import { getRequestConfig } from 'next-intl/server'
import { sanityClient } from '@/lib/sanity'

const locales = ['he', 'ru']

async function fetchFromSanity(locale: string) {
  try {
    const [shared, home, about, services] = await Promise.all([
      sanityClient.fetch(
        `*[_type == "sharedContent" && locale == $locale][0]{ siteName, whatsapp, nav, footer }`,
        { locale }
      ),
      sanityClient.fetch(
        `*[_type == "homePage" && locale == $locale][0]{ meta, hero, intro, trust, cta }`,
        { locale }
      ),
      sanityClient.fetch(
        `*[_type == "aboutPage" && locale == $locale][0]{ meta, h1, opening, approach, background, closing, photoAlt }`,
        { locale }
      ),
      sanityClient.fetch(
        `*[_type == "servicesPage" && locale == $locale][0]{ meta, headline, subheadline, services[]{ slug, name, description, image } }`,
        { locale }
      ),
    ])

    // Log what we got so we can see it in Vercel logs
    console.log('[i18n] Sanity fetch for', locale, {
      shared: !!shared,
      home: !!home,
      about: !!about,
      services: !!services,
    })

    // If any core document is missing, fall back to JSON
    if (!shared || !home || !about || !services) {
      console.log('[i18n] Missing core doc — falling back to JSON')
      return null
    }

    // Optional pages — fall back to {} if missing
    const [approach, faq, contact] = await Promise.all([
      sanityClient.fetch(
        `*[_type == "approachPage" && locale == $locale][0]{ meta, h1, headline, quote, body, therapies, closing }`,
        { locale }
      ).catch(() => null),
      sanityClient.fetch(
        `*[_type == "faqPage" && locale == $locale][0]{ meta, headline, faqs }`,
        { locale }
      ).catch(() => null),
      sanityClient.fetch(
        `*[_type == "contactPage" && locale == $locale][0]{ meta, headline, intro, form, info }`,
        { locale }
      ).catch(() => null),
    ])

    console.log('[i18n] Using Sanity data for', locale)
    return {
      shared,
      home,
      about,
      approach: approach ?? {},
      services,
      faq:     faq     ?? {},
      contact: contact ?? {},
    }
  } catch (err) {
    console.error('[i18n] Sanity error:', err)
    return null
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !locales.includes(locale)) locale = 'he'

  // Try Sanity first
  const sanityData = await fetchFromSanity(locale)
  if (sanityData) {
    return { locale, messages: sanityData }
  }

  // Fall back to JSON files
  console.log('[i18n] Using JSON fallback for', locale)
  const [shared, home, about, approach, services, faq, contact] = await Promise.all([
    import(`./content/${locale}/shared.json`),
    import(`./content/${locale}/home.json`),
    import(`./content/${locale}/about.json`),
    import(`./content/${locale}/approach.json`),
    import(`./content/${locale}/services.json`),
    import(`./content/${locale}/faq.json`),
    import(`./content/${locale}/contact.json`),
  ])

  return {
    locale,
    messages: {
      shared:   (shared   as any).default ?? shared,
      home:     (home     as any).default ?? home,
      about:    (about    as any).default ?? about,
      approach: (approach as any).default ?? approach,
      services: (services as any).default ?? services,
      faq:      (faq      as any).default ?? faq,
      contact:  (contact  as any).default ?? contact,
    },
  }
})
