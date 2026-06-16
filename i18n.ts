// i18n.ts — Safe Harbor
// Loads content from Sanity CMS via plain fetch (no client package).
// Falls back to local JSON files if Sanity is unreachable or documents are missing.

import { getRequestConfig } from 'next-intl/server'

const locales = ['he', 'ru']

const PROJECT_ID = 'xmlbv2oe'
const DATASET    = 'production'
const API_VER    = '2024-01-01'
const BASE       = `https://${PROJECT_ID}.api.sanity.io/v${API_VER}/data/query/${DATASET}`

async function groq(query: string, params: Record<string, string> = {}) {
  const url = new URL(BASE)
  url.searchParams.set('query', query)
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(`$${k}`, JSON.stringify(v))
  }
  const res = await fetch(url.toString(), { next: { revalidate: 60 } })
  if (!res.ok) throw new Error(`Sanity ${res.status}: ${res.statusText}`)
  const json = await res.json()
  return json.result ?? null
}

async function fetchFromSanity(locale: string) {
  try {
    const loc = `"${locale}"`

    const [shared, home, about, services] = await Promise.all([
      groq(`*[_type == "sharedContent" && locale == $locale][0]{ siteName, whatsapp, nav, footer }`, { locale }),
      groq(`*[_type == "homePage"      && locale == $locale][0]{ meta, hero, intro, trust, cta }`,   { locale }),
      groq(`*[_type == "aboutPage"     && locale == $locale][0]{ meta, h1, opening, approach, background, closing, photoAlt }`, { locale }),
      groq(`*[_type == "servicesPage"  && locale == $locale][0]{ meta, headline, subheadline, services[]{ slug, name, description, image } }`, { locale }),
    ])

    console.log('[i18n] Sanity fetch for', locale, { shared: !!shared, home: !!home, about: !!about, services: !!services })

    if (!shared || !home || !about || !services) {
      console.log('[i18n] Missing core doc — falling back to JSON')
      return null
    }

    const [approach, faq, contact] = await Promise.all([
      groq(`*[_type == "approachPage" && locale == $locale][0]{ meta, h1, headline, quote, body, therapies, closing }`, { locale }).catch(() => null),
      groq(`*[_type == "faqPage"      && locale == $locale][0]{ meta, headline, faqs }`,                                { locale }).catch(() => null),
      groq(`*[_type == "contactPage"  && locale == $locale][0]{ meta, headline, intro, form, info }`,                   { locale }).catch(() => null),
    ])

    console.log('[i18n] Using Sanity data for', locale)
    return { shared, home, about, approach: approach ?? {}, services, faq: faq ?? {}, contact: contact ?? {} }
  } catch (err) {
    console.error('[i18n] Sanity error:', err)
    return null
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !locales.includes(locale)) locale = 'he'

  const sanityData = await fetchFromSanity(locale)
  if (sanityData) {
    return { locale, messages: sanityData }
  }

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
