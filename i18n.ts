// i18n.ts — Safe Harbor
// Configures next-intl message loading.
// Lives in project root alongside /app.
//
// Loads all content JSON files for the active locale and merges them
// into a single messages object. Each file becomes a namespace:
//   home.hero.headline, about.opening.body, shared.nav.cta, etc.

import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const locales = ['he', 'ru']

export default getRequestConfig(async ({ requestLocale }) => {
  // Read the locale Next.js resolved from the URL
  let locale = await requestLocale

  // Fall back to default if missing or unsupported
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
      shared:   shared.default,
      home:     home.default,
      about:    about.default,
      services: services.default,
      faq:      faq.default,
      contact:  contact.default,
    },
  }
})
