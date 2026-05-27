// app/layout.tsx — root shell
// Provides the required <html> and <body> tags for Next.js.
// Locale-specific attributes (lang, dir, fonts) are applied by LocaleSetter
// inside [locale]/layout.tsx after hydration.

import { heebo, inter } from '@/lib/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${heebo.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
