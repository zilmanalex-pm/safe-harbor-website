// app/[locale]/faq/page.tsx — FAQ page
// Sprint 4: replace placeholder with FAQSection (accordion)

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'faq.meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function FAQPage() {
  return (
    <main>
      {/* Sprint 4: drop FAQSection here */}
      <section className="flex min-h-screen items-center justify-center bg-background px-md">
        <p className="text-text/50">FAQ page — coming Sprint 4</p>
      </section>
    </main>
  )
}
