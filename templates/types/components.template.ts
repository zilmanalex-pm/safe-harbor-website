// types/components.ts — Safe Harbor
// Drop this file into /types/components.ts in the Next.js project.
//
// TypeScript prop interfaces for every section component.
// The Developer implements components to match these interfaces.
// Helps ensure content slots align with component expectations.

// ─────────────────────────────────────────────
// HeroSection
// ─────────────────────────────────────────────
export interface HeroSectionProps {
  headline: string
  subheadline: string
  ctaLabel: string
  ctaHref: string
}

// ─────────────────────────────────────────────
// IntroSection — therapist speaking to visitor
// ─────────────────────────────────────────────
export interface IntroSectionProps {
  body: string
  photoSrc: string
  photoAlt: string
}

// ─────────────────────────────────────────────
// ServicesPreview — homepage services cards
// ─────────────────────────────────────────────
export interface ServiceCardProps {
  name: string
  description: string
  href?: string
}

export interface ServicesPreviewProps {
  services: ServiceCardProps[]
}

// ─────────────────────────────────────────────
// CTABlock — homepage and page-end CTA
// ─────────────────────────────────────────────
export interface CTABlockProps {
  body: string
  buttonLabel: string
  buttonHref: string
}

// ─────────────────────────────────────────────
// BioSection — About page
// ─────────────────────────────────────────────
export interface BioSectionProps {
  opening: string
  approach: string
  background: string
  closing: string
  photoSrc: string
  photoAlt: string
}

// ─────────────────────────────────────────────
// ServicesSection — Services page
// ─────────────────────────────────────────────
export interface ServiceDetailProps {
  slug: string
  name: string
  description: string
}

export interface ServicesSectionProps {
  headline: string
  subheadline?: string
  services: ServiceDetailProps[]
}

// ─────────────────────────────────────────────
// FAQSection — FAQ page
// ─────────────────────────────────────────────
export interface FAQItemProps {
  question: string
  answer: string
}

export interface FAQSectionProps {
  headline: string
  questions: FAQItemProps[]
}

// ─────────────────────────────────────────────
// ContactSection — Contact page
// ─────────────────────────────────────────────
export interface ContactSectionProps {
  introBody: string
  responseTime: string
  form: {
    nameLabel: string
    emailLabel: string
    phoneLabel?: string
    messageLabel: string
    submitLabel: string
  }
  alternativeContact?: string | null
}

// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────
export interface NavProps {
  links: Array<{
    label: string
    href: string
  }>
  ctaLabel: string
  ctaHref: string
  locale: 'he' | 'ru'
}

// ─────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────
export interface FooterProps {
  tagline: string
  copyright: string
  links: Array<{
    label: string
    href: string
  }>
}
