// components/sections/TrustBar.tsx — Safe Harbor
// Horizontal credibility strip. Renders whatever is in the items array — 3 or 4 or more.
// Mobile: stacks vertically. Desktop: single horizontal row with dividers.

import { Clock, GraduationCap, Languages, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

// One icon per position — falls back to Users for any extra items
const trustIcons = [Clock, GraduationCap, Languages, Users]

interface TrustItem {
  value: string
  label: string
}

interface TrustBarProps {
  items: TrustItem[]
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="bg-primary/8 border-y border-primary/15 py-xl">
      <div className="w-full max-w-[1200px] mx-auto px-lg">
        <ul
          className={cn(
            'flex flex-col md:flex-row',
            'items-center',
            'justify-center',
            'gap-lg md:gap-0',
          )}
          role="list"
        >
          {items.map((item, i) => {
            const Icon = trustIcons[i] ?? Users
            return (
              <li
                key={i}
                className={cn(
                  'flex flex-col items-center text-center gap-xs',
                  'md:px-2xl',
                  i > 0 && 'md:border-s md:border-primary/20',
                )}
              >
                <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-h2 font-semibold text-primary leading-none">
                  {item.value}
                </span>
                <span className="text-small text-text/80">
                  {item.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
