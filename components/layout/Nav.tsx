// components/layout/Nav.tsx — Safe Harbor
// Navigation bar. Receives all content as props — no hardcoded copy.
// RTL-aware: flex direction mirrors between Hebrew (rtl) and Russian (ltr).
// Sprint 2: apply final design tokens (colours, font size, border radius on CTA).

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { NavProps } from '@/types/components'

export function Nav({ links, ctaLabel, ctaHref, locale }: NavProps) {
  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'flex items-center justify-between',
        'px-md py-sm',
        'bg-surface border-b border-neutral',
      )}
    >
      {/* Logo / wordmark — placeholder until branding is finalised */}
      <Link
        href={`/${locale}`}
        className="text-text font-semibold text-lg tracking-tight hover:text-primary transition-colors"
        aria-label="Safe Harbor — home"
      >
        Sonya Zilman
      </Link>

      {/* Navigation links — hidden on mobile, shown on md+ */}
      <ul
        className={cn(
          'hidden md:flex items-center gap-xl',
          // RTL: flex direction is handled automatically by dir="rtl" on <html>
        )}
        role="list"
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-text/70 hover:text-primary text-sm transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA button — Sprint 2: apply final button styles from design-rules.md */}
      <Link
        href={ctaHref}
        className={cn(
          'hidden md:inline-flex items-center justify-center',
          'bg-primary text-surface',
          'px-md py-xs rounded-md text-sm font-medium',
          'hover:opacity-90 transition-opacity',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary',
        )}
      >
        {ctaLabel}
      </Link>

      {/* Mobile menu trigger — Sprint 3: wire up MobileMenu component */}
      <button
        type="button"
        aria-label="Open menu"
        className="md:hidden text-text p-xs"
      >
        <span className="block w-5 h-0.5 bg-current mb-1" />
        <span className="block w-5 h-0.5 bg-current mb-1" />
        <span className="block w-5 h-0.5 bg-current" />
      </button>
    </nav>
  )
}
