// components/ui/input.tsx — Safe Harbor
// Single-line text input. Used in the contact form and any inline fields.
// Pill shape, surface background, primary focus ring — from design-rules.md.

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // Optional label rendered above the input (accessible, tied via htmlFor)
  label?: string
  // Optional error message rendered below the input
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, type = 'text', ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-xs w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-small font-medium text-text/70"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            // Layout
            'w-full h-[44px] px-md',
            // Shape — pill, from design-rules.md
            'rounded-pill',
            // Colour
            'bg-surface text-text',
            'border border-neutral',
            'placeholder:text-text/40',
            // Focus — primary ring, no default outline
            'outline-none',
            'focus:border-primary focus:ring-2 focus:ring-primary/20',
            // Error state
            error && 'border-red-400 focus:border-red-500 focus:ring-red-200',
            // Disabled
            'disabled:opacity-40 disabled:cursor-not-allowed',
            // Transitions
            'transition-colors duration-150',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-small text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
