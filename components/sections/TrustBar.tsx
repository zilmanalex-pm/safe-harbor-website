// components/sections/TrustBar.tsx — Safe Harbor
// Horizontal credibility strip between ServicesPreview and ContactCTA.
// Communicates years of experience, credential, and languages at a glance.
// Mobile: stacks vertically. Desktop: single horizontal row with dividers.
// RTL-aware via logical CSS properties and rtl.ts helpers.

import { cn } from '@/lib/utils'

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
            // Mobile: vertical stack; desktop: horizontal row
            'flex flex-col md:flex-row',
            'items-center',
            'gap-lg md:gap-0',
          )}
          role="list"
        >
          {items.map((item, i) => (
            <li
              key={i}
              className={cn(
                'flex-1 flex flex-col items-center text-center gap-xs',
                // Divider between items on desktop — uses logical border to mirror in RTL
                i > 0 && 'md:border-s md:border-primary/20',
              )}
            >
              <span className="text-h2 font-semibold text-primary leading-none">
                {item.value}
              </span>
              <span className="text-small text-text/80 tracking-wide uppercase">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
