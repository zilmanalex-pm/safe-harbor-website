// middleware.ts — Safe Harbor
// Drop this into the project root (same level as /app).
//
// Handles locale routing for next-intl.
// Redirects bare paths to the appropriate locale:
//   /        → /he  (Hebrew is default)
//   /about   → /he/about
//   /ru      → /ru  (Russian)
//
// Dependencies:
//   npm install next-intl

import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // Supported locales
  locales: ['he', 'ru'],

  // Default locale — Hebrew
  // Visitors with no locale preference get Hebrew
  defaultLocale: 'he',

  // Always show locale prefix in URL
  // /he/about, /ru/about — never /about
  localePrefix: 'always',
})

export const config = {
  // Apply middleware to all routes except:
  // - Next.js internals (_next)
  // - Static files (images, fonts, etc.)
  // - API routes
  matcher: [
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
}
