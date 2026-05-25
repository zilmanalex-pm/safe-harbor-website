// components/layout/Nav.tsx — Safe Harbor
// Navigation bar. Receives all content as props — no hardcoded copy.
// RTL-aware: flex direction mirrors between Hebrew (rtl) and Russian (ltr).

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { NavProps } from '@/types/components'
import { LocaleSwitcher } from './LocaleSwitcher'
import { buttonVariants } from '@/components/ui/button'

export function Nav({ siteName, links, ctaLabel, ctaHref, locale }: NavProps) {
  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'flex items-center justify-between',
        'px-lg py-md',
        // Header background matches the photo placeholder (warm neutral)
        'bg-neutral border-b border-neutral/60',
      )}
    >
      {/* Logo — nested arc mark. No text; name provided via aria-label for screen readers. */}
      <Link
        href={`/${locale}`}
        className="hover:opacity-70 transition-opacity shrink-0"
        aria-label={siteName}
      >
        <svg
          viewBox="0 0 52 36"
          width="52"
          height="36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Three nested arcs — even radii spacing (8px each), centered at (26, 30) */}
          <path d="M 18 30 A 8 8 0 0 1 34 30"   stroke="#5E8C85" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M 10 30 A 16 16 0 0 1 42 30"  stroke="#5E8C85" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M 2  30 A 24 24 0 0 1 50 30"  stroke="#5E8C85" strokeWidth="2.5" strokeLinecap="round"/>
          {/* Baseline */}
          <line x1="1" y1="30" x2="51" y2="30" stroke="#5E8C85" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </Link>

      {/* Navigation links — hidden on mobile, shown on md+ */}
      <ul
        className="hidden md:flex items-center gap-xl"
        role="list"
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-text/70 hover:text-primary text-[16px] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side: language switcher + CTA — grouped together */}
      <div className="hidden md:flex items-center gap-sm">
        <LocaleSwitcher currentLocale={locale} />
        <Link href={ctaHref} className={cn(buttonVariants({ size: 'sm' }))}>
          {ctaLabel}
        </Link>
      </div>

      {/* Mobile menu trigger */}
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
