// app/[locale]/services/page.tsx — Services page
// Sprint 4: replace placeholder with ServicesSection

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'services.meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function ServicesPage() {
  return (
    <main>
      {/* Sprint 4: drop ServicesSection here */}
      <section className="flex min-h-screen items-center justify-center bg-background px-md">
        <p className="text-text/50">Services page — coming Sprint 4</p>
      </section>
    </main>
  )
}
