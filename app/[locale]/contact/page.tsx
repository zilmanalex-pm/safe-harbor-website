// app/[locale]/contact/page.tsx — Contact page
// Sprint 4: replace placeholder with ContactSection (form + direct contact info)

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact.meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function ContactPage() {
  return (
    <main>
      {/* Sprint 4: drop ContactSection here */}
      <section className="flex min-h-screen items-center justify-center bg-background px-md">
        <p className="text-text/50">Contact page — coming Sprint 4</p>
      </section>
    </main>
  )
}
