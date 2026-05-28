// types/content.ts — Safe Harbor
// Drop this file into /types/content.ts in the Next.js project.
//
// These types mirror the JSON content files under /content/he/ and /content/ru/.
// The Developer uses these to type-check content loading.
// The Content Writer's JSON must match these shapes exactly.

// ─────────────────────────────────────────────
// Shared — appears on every page
// ─────────────────────────────────────────────
export interface SharedContent {
  nav: {
    home: string
    about: string
    services: string
    faq: string
    contact: string
    cta: string
  }
  footer: {
    tagline: string
    copyright: string
  }
}

// ─────────────────────────────────────────────
// Meta — every page has this
// ─────────────────────────────────────────────
export interface PageMeta {
  title: string
  description: string
}

// ─────────────────────────────────────────────
// Home page
// ─────────────────────────────────────────────
export interface HomeContent {
  meta: PageMeta
  hero: {
    headline: string
    subheadline: string
    ctaLabel: string
  }
  intro: {
    body: string
  }
  services: Array<{
    name: string
    description: string
  }>
  cta: {
    body: string
    buttonLabel: string
  }
}

// ─────────────────────────────────────────────
// About page
// ─────────────────────────────────────────────
export interface AboutContent {
  meta: PageMeta
  opening: { body: string }
  approach: { body: string }
  background: { body: string }
  closing: { body: string }
}

// ─────────────────────────────────────────────
// Services page
// ─────────────────────────────────────────────
export interface ServiceItem {
  slug: string
  name: string
  description: string
}

export interface ServicesContent {
  meta: PageMeta
  headline: string
  subheadline: string
  services: ServiceItem[]
}

// ─────────────────────────────────────────────
// FAQ page
// ─────────────────────────────────────────────
export interface FAQItem {
  question: string
  answer: string
}

export interface FAQContent {
  meta: PageMeta
  headline: string
  questions: FAQItem[]
}

// ─────────────────────────────────────────────
// Contact page
// ─────────────────────────────────────────────
export interface ContactContent {
  meta: PageMeta
  intro: { body: string }
  responseTime: string
  form: {
    nameLabel: string
    emailLabel: string
    phoneLabel: string
    messageLabel: string
    submitLabel: string
  }
  alternativeContact: string | null
}
