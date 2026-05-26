// lib/utils.ts — Safe Harbor
// Drop this file into /lib/utils.ts in the Next.js project.

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// cn() — merges Tailwind classes safely, resolving conflicts
// Standard shadcn/ui utility. Use everywhere className is composed.
// Usage: className={cn('base-class', conditional && 'extra-class', props.className)}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// locale helpers
export type Locale = 'he' | 'ru'

export function isRTL(locale: Locale): boolean {
  return locale === 'he'
}

export function getDir(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'he' ? 'rtl' : 'ltr'
}

export function getFontClass(locale: Locale): string {
  return locale === 'he' ? 'font-hebrew' : 'font-russian'
}
