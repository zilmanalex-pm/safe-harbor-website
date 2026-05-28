// components/sections/ContactSection.tsx — Safe Harbor
// Contact form with client-side validation.
// Required fields (name, email, message) turn red-bordered if empty on submit.
// Formspree endpoint wired via NEXT_PUBLIC_FORMSPREE_ID env var (Sprint 6).

'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : '#'

interface ContactSectionProps {
  h1: string
  intro: string
  responseTime: string
  nameLabel: string
  emailLabel: string
  phoneLabel: string
  messageLabel: string
  submitLabel: string
  validationMessage: string
  successMessage: string
  errorMessage: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'invalid'

export function ContactSection({
  h1,
  intro,
  responseTime,
  nameLabel,
  emailLabel,
  phoneLabel,
  messageLabel,
  submitLabel,
  validationMessage,
  successMessage,
  errorMessage,
}: ContactSectionProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function validate(form: HTMLFormElement) {
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim()
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value.trim()
    const newErrors: Record<string, boolean> = {}
    if (!name) newErrors.name = true
    if (!email) newErrors.email = true
    if (!message) newErrors.message = true
    return newErrors
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const newErrors = validate(form)

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatus('invalid')
      return
    }

    setErrors({})
    setStatus('submitting')

    if (FORMSPREE_ENDPOINT === '#') {
      if (process.env.NODE_ENV === 'development') {
        console.warn('ContactSection: NEXT_PUBLIC_FORMSPREE_ID is not set.')
      }
      setStatus('idle')
      return
    }

    const data = new FormData(form)
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

        <h1 className="text-h2 font-semibold text-text mb-xl">
          {h1}
        </h1>

        <div className="mb-2xl">
          <p className="text-body text-text/80 leading-relaxed mb-sm">{intro}</p>
          <p className="text-small text-text/50">{responseTime}</p>
        </div>

        {status === 'success' ? (
          <div className="bg-primary/10 rounded-card p-lg text-center">
            <p className="text-body text-text/80 mt-xs">{successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-md" noValidate>

            <div>
              <Input
                name="name"
                label={nameLabel}
                autoComplete="name"
                disabled={status === 'submitting'}
                className={cn(errors.name && 'border-red-400 focus-visible:ring-red-300')}
              />
              {errors.name && (
                <p className="text-small text-red-500 mt-xs">{nameLabel} *</p>
              )}
            </div>

            <div>
              <Input
                name="email"
                type="email"
                label={emailLabel}
                autoComplete="email"
                disabled={status === 'submitting'}
                className={cn(errors.email && 'border-red-400 focus-visible:ring-red-300')}
              />
              {errors.email && (
                <p className="text-small text-red-500 mt-xs">{emailLabel} *</p>
              )}
            </div>

            <Input
              name="phone"
              type="tel"
              label={phoneLabel}
              autoComplete="tel"
              disabled={status === 'submitting'}
            />

            <div>
              <Textarea
                name="message"
                label={messageLabel}
                rows={5}
                disabled={status === 'submitting'}
                className={cn(errors.message && 'border-red-400 focus-visible:ring-red-300')}
              />
              {errors.message && (
                <p className="text-small text-red-500 mt-xs">{messageLabel} *</p>
              )}
            </div>

            {status === 'invalid' && (
              <p className="text-small text-red-500" role="alert">{validationMessage}</p>
            )}

            {status === 'error' && (
              <p className="text-small text-red-500" role="alert">{errorMessage}</p>
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
