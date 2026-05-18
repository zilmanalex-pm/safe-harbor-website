// middleware.ts — Safe Harbor
// Handles two concerns:
//   1. Admin route protection (password cookie check)
//   2. Locale routing via next-intl for all public pages

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

// ─────────────────────────────────────────────
// next-intl locale middleware
// ─────────────────────────────────────────────
const intlMiddleware = createIntlMiddleware({
  locales: ['he', 'ru'],
  defaultLocale: 'he',
  localePrefix: 'always',
})

// ─────────────────────────────────────────────
// Combined middleware
// ─────────────────────────────────────────────
export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // ── Admin route protection ──────────────────
  if (pathname.startsWith('/admin')) {
    // Always allow access to the login page itself
    if (pathname === '/admin/login') {
      return NextResponse.next()
    }

    const cookieValue = req.cookies.get('admin_auth')?.value
    const expectedPassword = process.env.ADMIN_PASSWORD

    const isAuthorised =
      expectedPassword !== undefined && cookieValue === expectedPassword

    if (!isAuthorised) {
      const loginUrl = new URL('/admin/login', req.url)
      // Preserve the original destination so we can redirect back after login
      loginUrl.searchParams.set('next', pathname)
      return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
  }

  // ── Locale routing for all other pages ─────
  return intlMiddleware(req)
}

export const config = {
  // Run on all paths except Next.js internals, static files, and API routes.
  // /admin is included because we need to intercept it above.
  matcher: [
    '/((?!_next|_vercel|api|.*\\..*).*)',
  ],
}
