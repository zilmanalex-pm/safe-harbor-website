// components/layout/Nav.tsx — Safe Harbor
// Navigation bar. Receives all content as props — no hardcoded copy.
// RTL-aware: flex direction mirrors between Hebrew (rtl) and Russian (ltr).

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { NavProps } from '@/types/components'
import { LocaleSwitcher } from './LocaleSwitcher'
import { Button } from '@/components/ui/button'

export function Nav({ siteName, links, ctaLabel, ctaHref, locale }: NavProps) {
  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        'flex items-center justify-between',
        'px-md py-sm',
        // Header background matches the photo placeholder (warm neutral)
        'bg-neutral border-b border-neutral/60',
      )}
    >
      {/* Logo / wordmark */}
      <Link
        href={`/${locale}`}
        className="text-text font-semibold text-lg tracking-tight hover:text-primary transition-colors shrink-0"
        aria-label="Safe Harbor — home"
      >
        {siteName}
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
              className="text-text/70 hover:text-primary text-sm transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side: language switcher + CTA — grouped together */}
      <div className="hidden md:flex items-center gap-sm">
        <LocaleSwitcher currentLocale={locale} />
        <Button asChild size="sm">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
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
