// app/not-found.tsx — required by Next.js App Router
// Handles unmatched routes at the root level.

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-md px-lg text-center bg-background">
      <p className="text-h3 text-text">הדף לא נמצא — Page not found</p>
      <Link href="/he" className="text-primary underline underline-offset-4 text-body">
        חזרה לדף הבית / Back to home
      </Link>
    </div>
  )
}
