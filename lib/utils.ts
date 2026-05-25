// lib/utils.ts — Safe Harbor

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// cn() — merges Tailwind classes safely, resolving conflicts.
// Standard shadcn/ui pattern. Use everywhere className is composed from multiple sources.
// Usage: className={cn('base-class', conditional && 'extra-class', props.className)}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ─────────────────────────────────────────────
// Locale helpers
// ─────────────────────────────────────────────

export type Locale = 'he' | 'ru'

export function isRTL(locale: Locale): boolean {
  return locale === 'he'
}

// Returns the dir attribute value for the <html> element
export function getDir(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'he' ? 'rtl' : 'ltr'
}

// Returns the Tailwind font-family class for the active locale.
// font-hebrew maps to var(--font-heebo), font-russian to var(--font-inter).
// Both font variables are always loaded on <html>; only the active one is applied.
export function getFontClass(locale: Locale): string {
  return locale === 'he' ? 'font-hebrew' : 'font-russian'
}
