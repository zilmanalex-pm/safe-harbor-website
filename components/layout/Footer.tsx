// components/layout/Footer.tsx — Safe Harbor
// Site footer. Receives all content as props — no hardcoded copy.
// Sprint 2: apply final design tokens and any additional link groups.

import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { FooterProps } from '@/types/components'

export function Footer({ tagline, copyright, links }: FooterProps) {
  return (
    <footer
      className={cn(
        'bg-neutral',
        'px-md py-2xl',
        'border-t border-neutral',
      )}
    >
      <div className="max-w-content mx-auto">

        {/* Top row: tagline + nav links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-lg">
          <p className="text-text/70 text-sm max-w-xs">
            {tagline}
          </p>

          <ul className="flex flex-wrap gap-lg" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text/80 hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="mt-lg border-t border-text/10 pt-lg">
          <p className="text-text/70 text-xs">
            {copyright}
          </p>
        </div>

      </div>
    </footer>
  )
}
