'use client'

// app/admin/page.tsx — Admin analytics dashboard
// Protected by middleware — only accessible with valid admin_auth cookie.
// Embeds the Plausible shared dashboard via iframe.

import { useRouter } from 'next/navigation'

const PLAUSIBLE_EMBED =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SHARE_URL ??
  'https://plausible.io/sofia-tarasov.com'

export default function AdminPage() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral">
      {/* Header bar */}
      <header className="bg-surface border-b border-primary/15 px-lg py-sm flex items-center justify-between">
        <span className="font-semibold text-primary">Safe Harbor — Analytics</span>
        <button
          onClick={handleLogout}
          className="text-small text-text/60 hover:text-text transition-colors"
        >
          Sign out
        </button>
      </header>

      {/* Plausible iframe — fills remaining viewport */}
      <main className="flex-1 flex flex-col">
        <iframe
          src={PLAUSIBLE_EMBED}
          title="Site analytics"
          className="flex-1 w-full border-0"
          style={{ minHeight: 'calc(100vh - 56px)' }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups"
        />

        {/* Fallback message shown if iframe is blocked (Plausible blocks embedding by default) */}
        <noscript>
          <div className="p-xl text-center text-text/60">
            <p className="text-body">
              Analytics dashboard requires JavaScript.
            </p>
          </div>
        </noscript>
      </main>
    </div>
  )
}
