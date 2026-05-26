// components/ui/textarea.tsx — Safe Harbor
// Multi-line text field. Used in the contact form message field.
// Rounded-card shape (not pill — pills don't suit multiline), primary focus ring.

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-xs w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-small font-medium text-text/70"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            // Layout
            'w-full min-h-[140px] px-md py-sm',
            // Shape — card radius suits multiline fields
            'rounded-card',
            // Colour
            'bg-surface text-text',
            'border border-neutral',
            'placeholder:text-text/40',
            // Focus
            'outline-none',
            'focus:border-primary focus:ring-2 focus:ring-primary/20',
            // Error state
            error && 'border-red-400 focus:border-red-500 focus:ring-red-200',
            // Resize — vertical only; horizontal resize breaks layouts
            'resize-y',
            // Disabled
            'disabled:opacity-40 disabled:cursor-not-allowed',
            // Transitions
            'transition-colors duration-150',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${textareaId}-error`}
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

Textarea.displayName = 'Textarea'

export { Textarea }
