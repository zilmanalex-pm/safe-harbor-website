'use client'

// components/sections/ContactForm.tsx — Safe Harbor
// Drop this into /components/sections/ContactForm.tsx in the Next.js project.
//
// Contact form with:
// - Validation (required fields, email format)
// - Submission via Resend (API route) or Formspree (no backend needed)
// - Loading and success/error states
// - RTL-aware layout (works in both Hebrew and Russian)
// - All labels driven by content JSON (no hardcoded strings)
//
// Dependencies (choose one submission method):
//   Option A — Resend: npm install resend (requires /app/api/contact/route.ts)
//   Option B — Formspree: no install needed, set NEXT_PUBLIC_FORMSPREE_ID in .env
//
// Set SUBMISSION_METHOD below to 'resend' or 'formspree'.

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { ContactContent } from '@/types/content'

// ─────────────────────────────────────────────
// Config — set before use
// ─────────────────────────────────────────────
const SUBMISSION_METHOD: 'resend' | 'formspree' = 'resend'
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ''

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface ContactFormProps {
  content: ContactContent
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
export function ContactForm({ content }: ContactFormProps) {
  const { form, responseTime, alternativeContact } = content

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  // ── Validation ────────────────────────────
  function validate(): boolean {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = '✕'
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '✕'
    }
    if (!formData.message.trim()) {
      newErrors.message = '✕'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ── Submission ────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')

    try {
      if (SUBMISSION_METHOD === 'formspree') {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!res.ok) throw new Error('Submission failed')
      } else {
        // Resend — requires /app/api/contact/route.ts
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!res.ok) throw new Error('Submission failed')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  // ── Field change ──────────────────────────
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // ── Success state ─────────────────────────
  if (status === 'success') {
    return (
      <div className="text-center py-xl">
        <p className="text-text text-body">{responseTime}</p>
      </div>
    )
  }

  // ── Form ──────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-md">

      {/* Name */}
      <Field
        label={form.nameLabel}
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
      />

      {/* Email */}
      <Field
        label={form.emailLabel}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      {/* Phone — optional */}
      {form.phoneLabel && (
        <Field
          label={form.phoneLabel}
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
      )}

      {/* Message */}
      <div className="flex flex-col gap-xs">
        <label htmlFor="message" className="text-small text-text">
          {form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={cn(
            'w-full px-md py-sm rounded-card border text-body text-text bg-surface',
            'focus:outline-none focus:ring-2 focus:ring-primary',
            'resize-none',
            errors.message && 'border-red-400'
          )}
        />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p className="text-small text-red-500">
          Something went wrong. Please try again or reach out directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          'self-start px-xl py-sm rounded-btn',
          'bg-primary text-surface text-body font-medium',
          'hover:opacity-90 transition-opacity',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        {status === 'loading' ? '...' : form.submitLabel}
      </button>

      {/* Alternative contact */}
      {alternativeContact && (
        <p className="text-small text-text/70 mt-sm">
          {alternativeContact}
        </p>
      )}

    </form>
  )
}

// ─────────────────────────────────────────────
// Field sub-component
// ─────────────────────────────────────────────
interface FieldProps {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
}

function Field({ label, name, type, value, onChange, error, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-xs">
      <label htmlFor={name} className="text-small text-text">
        {label}{required && <span className="text-primary ms-xs">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={cn(
          'w-full px-md py-sm rounded-card border text-body text-text bg-surface',
          'focus:outline-none focus:ring-2 focus:ring-primary',
          error && 'border-red-400'
        )}
      />
    </div>
  )
}
