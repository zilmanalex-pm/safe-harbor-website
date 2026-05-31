// components/layout/Footer.tsx — Safe Harbor
// Site footer. Tagline removed per post-launch brief.

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FooterLink {
  href: string
  label: string
}

interface FooterProps {
  copyright: string
  drawings?: string
  links: FooterLink[]
  // tagline intentionally removed
  tagline?: string // kept in interface for backward compat — not rendered
}

export function Footer({ copyright, drawings, links }: FooterProps) {
  return (
    <footer
      className={cn(
        'bg-neutral',
        'px-md py-2xl',
        'border-t border-neutral',
      )}
    >
      <div className="max-w-content mx-auto">

        {/* Nav links */}
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

        {/* Divider + copyright */}
        <div className="mt-lg border-t border-text/10 pt-lg flex flex-col md:flex-row md:items-center md:justify-between gap-xs">
          <p className="text-text/70 text-xs">
            {copyright}
          </p>
          {drawings && (
            <p className="text-text/50 text-xs italic">
              {drawings}
            </p>
          )}
        </div>

      </div>
    </footer>
  )
}
