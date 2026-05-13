// lib/rtl.ts — Safe Harbor RTL utilities
// Drop this file into /lib/rtl.ts in the Next.js project.
//
// Hebrew is RTL. Russian is LTR. Layout must mirror between locales.
// Strategy: set dir="rtl" on <html> for Hebrew. Use Tailwind's rtl: prefix for
// anything that needs to physically flip (margins, padding, text alignment, icons).
//
// Reference: https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support

// ─────────────────────────────────────────────────────────────────
// RTL-aware class helpers
// Use these instead of hardcoding left/right in component classes.
// ─────────────────────────────────────────────────────────────────

// Text alignment: start = left in LTR, right in RTL
export const textStart = 'text-start'      // prefer over text-left
export const textEnd   = 'text-end'        // prefer over text-right

// Margin/padding: use logical properties
// In Tailwind: ms-* = margin-inline-start (left in LTR, right in RTL)
//              me-* = margin-inline-end
//              ps-* = padding-inline-start
//              pe-* = padding-inline-end

// ─────────────────────────────────────────────────────────────────
// Flip utility — for icons or elements that need to mirror in RTL
// ─────────────────────────────────────────────────────────────────
// Usage: className={cn('...', flipInRTL)}
export const flipInRTL = 'rtl:scale-x-[-1]'

// ─────────────────────────────────────────────────────────────────
// Navigation direction arrow — points left in LTR, right in RTL
// ─────────────────────────────────────────────────────────────────
export const navArrow = 'rtl:rotate-180'

// ─────────────────────────────────────────────────────────────────
// Layout direction class for explicit flex row mirroring
// ─────────────────────────────────────────────────────────────────
// Usage: className={cn('flex', rtlRow)} → row-reverse in RTL
export const rtlRow = 'rtl:flex-row-reverse'

// ─────────────────────────────────────────────────────────────────
// Usage example in a component:
//
// import { cn } from '@/lib/utils'
// import { flipInRTL, rtlRow } from '@/lib/rtl'
//
// <div className={cn('flex gap-sm', rtlRow)}>
//   <ArrowIcon className={cn('w-4 h-4', flipInRTL)} />
//   <span>{label}</span>
// </div>
// ─────────────────────────────────────────────────────────────────
