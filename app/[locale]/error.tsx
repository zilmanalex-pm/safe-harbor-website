'use client'

// app/[locale]/error.tsx — required by Next.js App Router
// Catches runtime errors within the locale layout subtree.

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-md px-lg text-center bg-background">
      <p className="text-h3 text-text">משהו השתבש — Something went wrong</p>
      <button
        onClick={reset}
        className="text-primary underline underline-offset-4 text-body"
      >
        נסו שוב / Try again
      </button>
    </div>
  )
}
