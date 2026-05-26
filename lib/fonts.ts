// lib/fonts.ts — Safe Harbor
// Font definitions loaded via next/font/google.
// next/font downloads and self-hosts fonts at build time — no external font requests at runtime.
// Import in app/[locale]/layout.tsx and apply via CSS variables.

import { Heebo, Inter } from 'next/font/google'

// Hebrew locale font — supports Hebrew + Latin scripts
export const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// Russian locale font — supports Cyrillic + Latin scripts
export const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})
