// app/admin/layout.tsx — Standalone layout for admin pages (no public nav/footer)

import '@/app/globals.css'
import { inter } from '@/lib/fonts'

export const metadata = {
  title: 'Admin — Safe Harbor',
  robots: { index: false, follow: false },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <body className="font-sans bg-background text-text min-h-screen">
        {children}
      </body>
    </html>
  )
}
