// app/[locale]/page.tsx — Homepage
// Sprint 3: replace placeholder with HeroSection, ServicesPreview, CTABlock, etc.

import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home.meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <main>
      {/* Sprint 3: drop HeroSection here */}
      <section className="flex min-h-screen items-center justify-center bg-background px-md">
        <div className="text-center">
          <h1 className="text-text text-4xl font-semibold">
            {t('hero.headline')}
          </h1>
          <p className="mt-sm text-text/70">
            {t('hero.subheadline')}
          </p>
        </div>
      </section>
    </main>
  )
}
