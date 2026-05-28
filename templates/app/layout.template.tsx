// app/[locale]/layout.tsx — Safe Harbor
// Drop this into /app/[locale]/layout.tsx in the Next.js project.
//
// This is the root layout for all locale routes (/he/* and /ru/*).
// It handles: font loading, dir attribute, locale metadata, and next-intl provider.
//
// Dependencies:
//   npm install next-intl
//   npm install next

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { heebo, inter } from '@/lib/fonts'
import { getDir, getFontClass } from '@/lib/utils'
import type { Locale } from '@/lib/utils'

// ─────────────────────────────────────────────
// Supported locales — must match next-intl config
// ─────────────────────────────────────────────
const locales: Locale[] = ['he', 'ru']

// ─────────────────────────────────────────────
// Static params — tells Next.js which locales to pre-render
// ─────────────────────────────────────────────
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// ─────────────────────────────────────────────
// Default metadata — overridden per page via generateMetadata
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  // Default title template — page titles appear as "Page Name | Sonya Zilman"
  title: {
    template: '%s | Sonya Zilman',
    default: 'Sonya Zilman — Psychotherapist',
  },
  // Default OG image — replace with actual image before launch
  openGraph: {
    type: 'website',
    siteName: 'Sonya Zilman Psychotherapy',
  },
  // Robots
  robots: {
    index: true,
    follow: true,
  },
}

// ─────────────────────────────────────────────
// Root layout
// ─────────────────────────────────────────────
interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {

  // Validate locale — redirect to 404 if unsupported
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Load messages for the current locale
  // Messages live in /content/[locale]/ — see next-intl config
  const messages = await getMessages()

  const dir = getDir(locale as Locale)
  const fontClass = getFontClass(locale as Locale)

  return (
    <html
      lang={locale}
      dir={dir}
      // Load both font variables — active font selected via fontClass
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
