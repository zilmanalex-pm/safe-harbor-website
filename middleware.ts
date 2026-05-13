// middleware.ts — Safe Harbor
// Handles locale routing for next-intl.
// Lives in project root alongside /app.
//
// Redirects bare paths to the appropriate locale:
//   /        → /he       (Hebrew is default)
//   /about   → /he/about
//   /ru      → /ru       (Russian)

import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['he', 'ru'],

  // Default locale — visitors with no locale preference are served Hebrew
  defaultLocale: 'he',

  // Always show locale prefix in URL: /he/about, /ru/about — never bare /about
  localePrefix: 'always',
})

export const config = {
  // Apply to all routes except Next.js internals, static files, and API routes
  matcher: [
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
}
