// i18n.ts — Safe Harbor
// Loads content directly from local JSON files.
// JSON files are the source of truth — update them and push to git.
// Vercel rebuilds automatically on every push.

import { getRequestConfig } from 'next-intl/server'

const locales = ['he', 'ru']

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !locales.includes(locale)) {
    locale = 'he'
  }

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
