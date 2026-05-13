// app/[locale]/layout.tsx — Safe Harbor
// Root layout for all locale routes (/he/* and /ru/*).
// Handles: font loading, dir attribute, locale metadata, and next-intl provider.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { heebo, inter } from '@/lib/fonts'
import { getDir, getFontClass } from '@/lib/utils'
import type { Locale } from '@/lib/utils'

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
    template: '%s | Sonya Zilman',
    default: 'Sonya Zilman — Psychotherapist',
  },
  openGraph: {
    type: 'website',
    siteName: 'Sonya Zilman Psychotherapy',
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

  // Redirect to 404 if locale is not supported
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Load all content messages for this locale (from /content/[locale]/*.json)
  const messages = await getMessages()

  const dir = getDir(locale as Locale)
  const fontClass = getFontClass(locale as Locale)

  return (
    <html
      lang={locale}
      dir={dir}
      // Both font CSS variables are loaded — active font applied via fontClass on body
      className={`${heebo.variable} ${inter.variable}`}
    >
      <body className={fontClass}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
