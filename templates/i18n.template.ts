// i18n.ts — Safe Harbor
// Drop this into the project root (same level as /app).
//
// Configures next-intl message loading.
// Reads JSON content files from /content/[locale]/ per page.
//
// Note: this file loads ALL content for the locale into a single messages object.
// next-intl's useTranslations() hook then accesses it by namespace (page name).

import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const locales = ['he', 'ru']

export default getRequestConfig(async ({ locale }) => {
  // Validate locale
  if (!locales.includes(locale)) notFound()

  // Load all content files for this locale and merge into one messages object.
  // Each file becomes a namespace: home.hero.headline, about.opening.body, etc.
  const [shared, home, about, services, faq, contact] = await Promise.all([
    import(`./content/${locale}/shared.json`),
    import(`./content/${locale}/home.json`),
    import(`./content/${locale}/about.json`),
    import(`./content/${locale}/services.json`),
    import(`./content/${locale}/faq.json`),
    import(`./content/${locale}/contact.json`),
  ])

  return {
    messages: {
      shared: shared.default,
      home: home.default,
      about: about.default,
      services: services.default,
      faq: faq.default,
      contact: contact.default,
    },
  }
})
