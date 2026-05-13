// app/layout.tsx — root shell
// Minimal wrapper. Locale-specific layout (dir, lang, fonts) lives in app/[locale]/layout.tsx.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
