// app/[locale]/page.tsx — Homepage

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type { Locale } from '@/lib/utils'
import { generatePageMetadata, LocalBusinessSchema } from '@/components/SEO'
import { HeroSection } from '@/components/sections/HeroSection'
import { IntroSection } from '@/components/sections/IntroSection'
import { TrustBar } from '@/components/sections/TrustBar'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return generatePageMetadata(locale as Locale, 'home')
}

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'home' })

  // Trust bar — dynamic: render however many items are in the JSON
  const trustItems = Array.from({ length: 4 }, (_, i) => {
    try {
      return {
        value: t(`trust.items.${i}.value`),
        label: t(`trust.items.${i}.label`),
      }
    } catch {
      return null
    }
  }).filter(Boolean) as { value: string; label: string }[]

  return (
    <>
      <LocalBusinessSchema />
      <HeroSection
        headline={t('hero.headline')}
        nameplate={t('hero.nameplate')}
        photoAlt={t('hero.photoAlt')}
      />
      <IntroSection body={t('intro.body')} />
      <TrustBar items={trustItems} />
    </>
  )
}
