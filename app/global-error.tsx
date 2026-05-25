'use client'

// app/global-error.tsx — required by Next.js App Router
// Catches errors in the root layout itself.

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ background: '#F7F4F0', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '22px', color: '#2D2926' }}>Something went wrong</p>
          <button onClick={reset} style={{ color: '#5E8C85', marginTop: '16px' }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
