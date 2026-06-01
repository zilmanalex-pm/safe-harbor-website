// components/sections/TrustBar.tsx — Safe Harbor
// Horizontal credibility strip. Renders whatever is in the items array — 3 or 4 or more.
// Mobile: stacks vertically. Desktop: CSS subgrid so icon / value / label rows align across all columns.

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

        {/* Mobile: plain flex column */}
        <ul className="flex flex-col gap-lg md:hidden" role="list">
          {items.map((item, i) => {
            const Icon = trustIcons[i] ?? Users
            return (
              <li key={i} className="flex flex-col items-center text-center gap-xs">
                <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-h3 font-semibold text-primary leading-tight text-center" dir="auto">
                  {item.value}
                </span>
                <span className="text-small text-text/80 whitespace-pre-line text-center">
                  {item.label}
                </span>
              </li>
            )
          })}
        </ul>

        {/* Desktop: subgrid — 4 columns × 3 shared rows so icon/value/label align across items */}
        <ul
          className="hidden md:grid md:grid-cols-4"
          style={{ gridTemplateRows: 'auto auto auto' }}
          role="list"
        >
          {items.map((item, i) => {
            const Icon = trustIcons[i] ?? Users
            return (
              <li
                key={i}
                className={cn(
                  'row-span-3',
                  'flex flex-col items-center text-center',
                  'md:px-2xl',
                  i > 0 && 'md:border-s md:border-primary/20',
                )}
                style={{ display: 'grid', gridTemplateRows: 'subgrid' }}
              >
                {/* Row 1: icon */}
                <div className="flex justify-center items-center">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>

                {/* Row 2: bold value */}
                <div className="flex justify-center items-center py-xs">
                  <span className="text-h3 font-semibold text-primary leading-tight text-center" dir="auto">
                    {item.value}
                  </span>
                </div>

                {/* Row 3: small label */}
                <div className="flex justify-center items-start">
                  <span className="text-small text-text/80 whitespace-pre-line text-center">
                    {item.label}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>

      </div>
    </section>
  )
}
