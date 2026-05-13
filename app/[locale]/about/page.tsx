// app/[locale]/about/page.tsx — About page
// Sprint 4: replace placeholder with BioSection

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about.meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function AboutPage() {
  return (
    <main>
      {/* Sprint 4: drop BioSection here */}
      <section className="flex min-h-screen items-center justify-center bg-background px-md">
        <p className="text-text/50">About page — coming Sprint 4</p>
      </section>
    </main>
  )
}
