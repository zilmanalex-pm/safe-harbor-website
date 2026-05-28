// components/ui/card.tsx — Safe Harbor
// Surface container for service cards, testimonials, FAQ items, etc.
// Uses rounded-card (16px) and surface background — sourced from design-rules.md.

import * as React from 'react'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────
// Card — outer container
// ─────────────────────────────────────────────
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'bg-surface',
      'border border-neutral',
      'rounded-card',
      className
    )}
    {...props}
  />
))
Card.displayName = 'Card'

// ─────────────────────────────────────────────
// CardHeader — top section, typically holds title and optional subtitle
// ─────────────────────────────────────────────
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-xs p-md pb-0', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

// ─────────────────────────────────────────────
// CardTitle — use inside CardHeader
// ─────────────────────────────────────────────
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-h3 font-medium text-text leading-snug', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

// ─────────────────────────────────────────────
// CardDescription — muted subtitle, use inside CardHeader below CardTitle
// ─────────────────────────────────────────────
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-small text-text/60', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

// ─────────────────────────────────────────────
// CardContent — main body padding
// ─────────────────────────────────────────────
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-md', className)}
    {...props}
  />
))
CardContent.displayName = 'CardContent'

// ─────────────────────────────────────────────
// CardFooter — bottom row, typically holds a CTA or metadata
// ─────────────────────────────────────────────
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-md pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
