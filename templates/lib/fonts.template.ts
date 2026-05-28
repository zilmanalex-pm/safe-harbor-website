// lib/fonts.ts — Safe Harbor
// Drop this file into /lib/fonts.ts in the Next.js project.
// Import fonts in app/layout.tsx and apply via className.

import { Heebo, Inter } from 'next/font/google'

// Hebrew locale font — supports Hebrew + Latin
export const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// Russian locale font — supports Cyrillic + Latin
export const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// Usage in app/layout.tsx:
//
// import { heebo, inter } from '@/lib/fonts'
//
// <html
//   lang={locale}
//   dir={locale === 'he' ? 'rtl' : 'ltr'}
//   className={`${heebo.variable} ${inter.variable}`}
// >
