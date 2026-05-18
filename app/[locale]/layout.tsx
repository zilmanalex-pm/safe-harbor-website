// app/[locale]/layout.tsx — Safe Harbor
// Root layout for all locale routes (/he/* and /ru/*).
// Handles: font loading, dir attribute, locale metadata, next-intl provider,
// and rendering the sticky Header and Footer on every page.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'

import { heebo, inter } from '@/lib/fonts'
import { getDir, getFontClass } from '@/lib/utils'
import type { Locale } from '@/lib/utils'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'

import '@/app/globals.css'

// ─────────────────────────────────────────────
// Supported locales — must match next-intl config and middleware
// ─────────────────────────────────────────────
const locales: Locale[] = ['he', 'ru']

// ─────────────────────────────────────────────
// Static params — tells Next.js which locales to pre-render at build time
// ─────────────────────────────────────────────
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// ─────────────────────────────────────────────
// Default metadata — overridden per page via generateMetadata
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    template: '%s | Sofia Tarasov',
    default: 'Sofia Tarasov — Psychotherapist',
  },
  openGraph: {
    type: 'website',
    siteName: 'Sofia Tarasov Psychotherapy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// ─────────────────────────────────────────────
// Locale layout
// ─────────────────────────────────────────────
interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()
  const tShared = await getTranslations({ locale, namespace: 'shared' })
  const t = await getTranslations({ locale, namespace: 'shared.nav' })

  const dir = getDir(locale as Locale)
  const fontClass = getFontClass(locale as Locale)

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/faq`, label: t('faq') },
  ]

  const footerLinks = [
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/faq`, label: t('faq') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  const tFooter = await getTranslations({ locale, namespace: 'shared.footer' })

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${heebo.variable} ${inter.variable}`}
    >
      <body className={fontClass}>
        <NextIntlClientProvider messages={messages}>
          <Header
            siteName={tShared('siteName')}
            links={navLinks}
            ctaLabel={t('cta')}
            ctaHref={`/${locale}/contact`}
            locale={locale}
          />
          <main>
            {children}
          </main>
          <Footer
            tagline={tFooter('tagline')}
            copyright={tFooter('copyright')}
            links={footerLinks}
          />
          <WhatsAppButton
            number={tShared('whatsapp')}
            ariaLabel="צרו קשר בוואטסאפ / Написать в WhatsApp"
          />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
