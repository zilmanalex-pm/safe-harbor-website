'use client'
// components/layout/Nav.tsx — Safe Harbor
// Navigation bar. Client component for mobile menu state.
// RTL-aware: flex direction mirrors between Hebrew (rtl) and Russian (ltr).

import { useState } from 'react'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { NavProps } from '@/types/components'
import { LocaleSwitcher } from './LocaleSwitcher'

export function Nav({ siteName, links, ctaLabel, ctaHref, locale }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          'flex items-center justify-between',
          'px-md py-sm',
          'bg-neutral border-b border-neutral/60',
        )}
      >
        {/* Logo */}
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
            <path d="M 18 30 A 8 8 0 0 1 34 30"  stroke="#5E8C85" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M 10 30 A 16 16 0 0 1 42 30" stroke="#5E8C85" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M 2  30 A 24 24 0 0 1 50 30" stroke="#5E8C85" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="1" y1="30" x2="51" y2="30" stroke="#5E8C85" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-xl" role="list">
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

        {/* Desktop right side: locale switcher + CTA */}
        <div className="hidden md:flex items-center gap-sm">
          <LocaleSwitcher currentLocale={locale} />
          <Link
            href={ctaHref}
            className="text-sm text-text/70 hover:text-primary transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile: locale switcher always visible + hamburger */}
        <div className="flex md:hidden items-center gap-sm">
          <LocaleSwitcher currentLocale={locale} />
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="text-text p-xs rounded-sm hover:bg-neutral/60 transition-colors"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden',
            'bg-neutral border-b border-neutral/60',
            'px-md py-lg',
            'flex flex-col gap-md',
          )}
        >
          <ul role="list" className="flex flex-col gap-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-text/80 hover:text-primary text-body transition-colors py-xs"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA link */}
          <Link
            href={ctaHref}
            onClick={() => setMobileOpen(false)}
            className="block text-text/80 hover:text-primary text-body transition-colors py-xs"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </>
  )
}
