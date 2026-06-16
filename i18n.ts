// i18n.ts — Safe Harbor
// Loads content from Sanity CMS.
// Falls back to local JSON files if Sanity is unreachable or documents are missing.
// To edit content: go to sanity.io → project xmlbv2oe → Studio → publish → site rebuilds.

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

    // If any core document is missing, fall back to JSON
    if (!shared || !home || !about || !services) return null

    const [faq, contact] = await Promise.all([
      sanityClient.fetch(
        `*[_type == "faqPage" && locale == $locale][0]{ meta, headline, faqs }`,
        { locale }
      ).catch(() => null),
      sanityClient.fetch(
        `*[_type == "contactPage" && locale == $locale][0]{ meta, headline, intro, form, info }`,
        { locale }
      ).catch(() => null),
    ])

    return { shared, home, about, services, faq: faq ?? {}, contact: contact ?? {} }
  } catch {
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
  const [shared, home, about, services, faq, contact] = await Promise.all([
    import(`./content/${locale}/shared.json`),
    import(`./content/${locale}/home.json`),
    import(`./content/${locale}/about.json`),
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
      services: (services as any).default ?? services,
      faq:      (faq      as any).default ?? faq,
      contact:  (contact  as any).default ?? contact,
    },
  }
})
