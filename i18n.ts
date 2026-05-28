// i18n.ts — Safe Harbor
// Configures next-intl message loading.
// Fetches all content from Sanity and merges it into a single messages object.
// Each document type becomes a namespace:
//   home.hero.headline, about.opening.body, shared.nav.cta, etc.
//
// Documents in Sanity have deterministic IDs: homePage-he, aboutPage-ru, etc.
// Run `npm run seed` once to populate Sanity with the initial content.

import { getRequestConfig } from 'next-intl/server'
import { sanityClient } from './lib/sanity'

const locales = ['he', 'ru']

// GROQ projections — strip Sanity metadata, return plain objects
const homeQuery = `*[_type == "homePage" && locale == $locale][0]{
  meta, hero, intro, trust, cta
}`
const aboutQuery = `*[_type == "aboutPage" && locale == $locale][0]{
  meta, h1, opening, approach, background, closing, photoAlt
}`
const servicesQuery = `*[_type == "servicesPage" && locale == $locale][0]{
  meta, headline, subheadline, services[]{slug, name, description, image}
}`
const faqQuery = `*[_type == "faqPage" && locale == $locale][0]{
  meta, headline, categories[]{name, questions[]{question, answer}}
}`
const contactQuery = `*[_type == "contactPage" && locale == $locale][0]{
  meta, h1, intro, responseTime, form
}`
const sharedQuery = `*[_type == "sharedContent" && locale == $locale][0]{
  siteName, whatsapp, nav, footer
}`

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !locales.includes(locale)) {
    locale = 'he'
  }

  // Try Sanity first; fall back to local JSON if Sanity is unreachable or returns nothing
  try {
    const [shared, home, about, services, faq, contact] = await Promise.all([
      sanityClient.fetch(sharedQuery,   { locale }),
      sanityClient.fetch(homeQuery,     { locale }),
      sanityClient.fetch(aboutQuery,    { locale }),
      sanityClient.fetch(servicesQuery, { locale }),
      sanityClient.fetch(faqQuery,      { locale }),
      sanityClient.fetch(contactQuery,  { locale }),
    ])

    // If Sanity returns nulls (not yet seeded), fall back to JSON
    if (!home || !shared) {
      console.warn('[i18n] Sanity returned null for locale', locale, '— falling back to JSON')
      return await fallbackToJson(locale)
    }

    return {
      locale,
      messages: { shared, home, about, services, faq, contact },
    }
  } catch (err) {
    console.error('[i18n] Sanity fetch failed for locale', locale, err)
    return await fallbackToJson(locale)
  }
})

// Fallback: local JSON files (used before Sanity is seeded, or in offline dev)
async function fallbackToJson(locale: string) {
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
      shared:   s