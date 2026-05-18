// components/layout/LocaleSwitcher.tsx — Safe Harbor
// Switches between /he/... and /ru/... while preserving the current path.
// Must be a client component — reads usePathname() for the current URL.

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface LocaleSwitcherProps {
  currentLocale: string
}

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname()

  // Strip the locale prefix to get the bare path (e.g. /he/about → /about)
  const pathWithoutLocale = pathname.replace(/^\/(he|ru)/, '') || '/'

  const otherLocale = currentLocale === 'he' ? 'ru' : 'he'
  const otherLabel = currentLocale === 'he' ? 'RU' : 'HE'

  return (
    <Link
      href={`/${otherLocale}${pathWithoutLocale}`}
      className={cn(
        'text-sm font-bold text-text',
        'hover:text-primary transition-colors',
        'border-2 border-text/40 hover:border-primary rounded-sm',
        'px-sm py-[3px]',
        'tracking-wide',
      )}
      aria-label={`Switch to ${otherLocale === 'he' ? 'Hebrew' : 'Russian'}`}
    >
      {otherLabel}
    </Link>
  )
}
