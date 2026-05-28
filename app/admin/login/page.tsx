'use client'

// app/admin/login/page.tsx — Admin login form

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get('next') ?? '/admin'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push(next)
      } else {
        setError('Incorrect password')
      }
    } catch {
      setError('Connection error — please try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-md">
      <div>
        <label
          htmlFor="password"
          className="block text-small font-medium text-text mb-xs"
        >
          Password
        </label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          autoFocus
          required
        />
      </div>

      {error && (
        <p className="text-small text-red-600">{error}</p>
      )}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Signing in…' : 'Sign in'}
      </Button>
    </form>
  )
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-md">
      <div className="w-full max-w-sm">
        <div className="text-center mb-xl">
          <span className="text-h3 font-semibold text-primary">Safe Harbor</span>
          <p className="text-small text-text/60 mt-xs">Admin access</p>
        </div>

        <Suspense fallback={<div className="text-small text-text/60">Loading…</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  )
}
