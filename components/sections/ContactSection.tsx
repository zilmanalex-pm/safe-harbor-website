// components/sections/ContactSection.tsx — Safe Harbor
// Contact form using Formspree for submission.
// Sprint 6: replace FORMSPREE_ENDPOINT placeholder with real form ID from environment.
// Form UI is complete — only the action endpoint needs wiring.
// "use client" required for form state management.

'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

// Sprint 6: set NEXT_PUBLIC_FORMSPREE_ID in .env.local and on Vercel
// Formspree destination email: sonyatar7@gmail.com — configure in Formspree dashboard
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : '#'

interface ContactSectionProps {
  intro: string
  responseTime: string
  nameLabel: string
  emailLabel: string
  phoneLabel: string
  messageLabel: string
  submitLabel: string
  successMessage: string
  errorMessage: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactSection({
  intro,
  responseTime,
  nameLabel,
  emailLabel,
  phoneLabel,
  messageLabel,
  submitLabel,
  successMessage,
  errorMessage,
}: ContactSectionProps) {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (FORMSPREE_ENDPOINT === '#') {
      // Formspree not yet wired up — silent in production, logged in dev
      if (process.env.NODE_ENV === 'development') {
        console.warn('ContactSection: NEXT_PUBLIC_FORMSPREE_ID is not set.')
      }
      return
    }

    setStatus('submitting')
    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-background py-3xl">
      <div className="w-full max-w-[640px] mx-auto px-lg">

        {/* Intro */}
        <div className="mb-2xl">
          <p className="text-body text-text/80 leading-relaxed mb-sm">
            {intro}
          </p>
          <p className="text-small text-text/50">
            {responseTime}
          </p>
        </div>

        {/* Success state */}
        {status === 'success' ? (
          <div className="bg-primary/10 rounded-card p-lg text-center">
            <p className="text-body font-medium text-text">✓</p>
            <p className="text-body text-text/80 mt-xs">
              {successMessage}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-md" noValidate>

            <Input
              name="name"
              label={nameLabel}
              required
              autoComplete="name"
              disabled={status === 'submitting'}
            />

            <Input
              name="email"
              type="email"
              label={emailLabel}
              required
              autoComplete="email"
              disabled={status === 'submitting'}
            />

            <Input
              name="phone"
              type="tel"
              label={phoneLabel}
              autoComplete="tel"
              disabled={status === 'submitting'}
            />

            <Textarea
              name="message"
              label={messageLabel}
              required
              rows={5}
              disabled={status === 'submitting'}
            />

            {status === 'error' && (
              <p className="text-small text-red-500" role="alert">
                {errorMessage}
              </p>
            )}

            <div className="mt-sm">
              <Button
                type="submit"
                size="lg"
                loading={status === 'submitting'}
                disabled={status === 'submitting'}
              >
                {submitLabel}
              </Button>
            </div>

          </form>
        )}

      </div>
    </section>
  )
}
