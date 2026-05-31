// scripts/seed-sanity.mjs
// Migrates all current JSON content into Sanity.
// Run once: npm run seed
//
// Requires SANITY_API_TOKEN in your .env.local
// (create a token at sanity.io → project → API → Tokens → Add token → Editor role)

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// Load env manually (dotenv not available as ESM without install)
import { config } from 'dotenv'
config({ path: join(root, '.env.local') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,  // needs write access
  useCdn: false,
})

function readJson(locale, page) {
  const path = join(root, 'content', locale, `${page}.json`)
  return JSON.parse(readFileSync(path, 'utf-8'))
}

// Sanity requires _key on every array item. Walk the object tree and add them.
let keyCounter = 0
function withKeys(value) {
  if (Array.isArray(value)) {
    return value.map((item) => {
      const keyed = { _key: `k${keyCounter++}`, ...withKeys(item) }
      return keyed
    })
  }
  if (value && typeof value === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(value)) {
      out[k] = withKeys(v)
    }
    return out
  }
  return value
}

async function seed() {
  const locales = ['he', 'ru']

  const documents = []

  for (const locale of locales) {
    const shared   = readJson(locale, 'shared')
    const home     = readJson(locale, 'home')
    const about    = readJson(locale, 'about')
    const services = readJson(locale, 'services')
    const faq      = readJson(locale, 'faq')
    const contact  = readJson(locale, 'contact')

    documents.push(
      {
        _id:  `sharedContent-${locale}`,
        _type: 'sharedContent',
        locale,
        siteName: shared.siteName,
        whatsapp: shared.whatsapp,
        nav:      shared.nav,
        footer:   shared.footer,
      },
      {
        _id:  `homePage-${locale}`,
        _type: 'homePage',
        locale,
        meta:  home.meta,
        hero:  home.hero,
        intro: home.intro,
        trust: { items: withKeys(home.trust.items) },
        cta:   home.cta,
      },
      {
        _id:  `aboutPage-${locale}`,
        _type: 'aboutPage',
        locale,
        meta:       about.meta,
        h1:         about.h1,
        opening:    about.opening,
        approach:   about.approach,
        background: about.background,
        closing:    about.closing,
        photoAlt:   about.photoAlt,
      },
      {
        _id:  `servicesPage-${locale}`,
        _type: 'servicesPage',
        locale,
        meta:        services.meta,
        headline:    services.headline,
        subheadline: services.subheadline,
        services:    withKeys(services.services),
      },
      {
        _id:  `faqPage-${locale}`,
        _type: 'faqPage',
        locale,
        meta:       faq.meta,
        headline:   faq.headline,
        categories: withKeys(faq.categories.map(cat => ({
          ...cat,
          questions: withKeys(cat.questions),
        }))),
      },
      {
        _id:  `contactPage-${locale}`,
        _type: 'contactPage',
        locale,
        meta:         contact.meta,
        h1:           contact.h1,
        intro:        contact.intro,
        responseTime: contact.responseTime,
        form:         contact.form,
      },
    )
  }

  console.log(`Seeding ${documents.length} documents into Sanity...`)

  for (const doc of documents) {
    await client.createOrReplace(doc)
    console.log(`  ✓ ${doc._id}`)
  }

  console.log('\nDone! Open /studio to verify the content.')
}

seed().catch((err) => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
