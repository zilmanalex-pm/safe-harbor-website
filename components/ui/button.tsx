// components/ui/button.tsx — Safe Harbor
// Primary UI primitive. Use this everywhere a clickable action appears.
// Never hardcode button styles inline — always use this component.

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────
// Variant definitions — sourced from design-rules.md (Option A: Soft & rounded)
// ─────────────────────────────────────────────
const buttonVariants = cva(
  // Base styles — applied to every variant
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium leading-none tracking-wide',
    'transition-all duration-150',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    'disabled:pointer-events-none disabled:opacity-40',
    'select-none',
  ],
  {
    variants: {
      variant: {
        // Primary — filled sage CTA
        // #4d7870 is primary darkened enough to pass WCAG AA (4.86:1) with near-white text
        primary: [
          'bg-[#4d7870] !text-[#FDFBF9]',
          'hover:opacity-90',
          'active:scale-[0.98]',
        ],
        // Secondary — outlined, transparent fill
        secondary: [
          'border border-primary text-primary bg-transparent',
          'hover:bg-primary/10',
          'active:scale-[0.98]',
        ],
        // Ghost — text only, underline on hover
        ghost: [
          'text-text bg-transparent border-transparent',
          'hover:underline underline-offset-4',
          'active:opacity-70',
        ],
      },
      size: {
        sm:      'text-sm px-md py-xs rounded-pill',
        default: 'text-body px-xl py-sm rounded-pill',
        lg:      'text-h3 px-2xl py-md rounded-pill',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

// ─────────────────────────────────────────────
// Loading spinner — shown when isLoading=true
// ─────────────────────────────────────────────
function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor" strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  // Use asChild if you need to render the button styles on an <a> or Link
  // (requires @radix-ui/react-slot — add in Sprint 3 if needed)
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && <Spinner />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
