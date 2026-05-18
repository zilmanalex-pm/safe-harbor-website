// app/[locale]/page.tsx — Homepage

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type { Locale } from '@/lib/utils'
import { generatePageMetadata, LocalBusinessSchema } from '@/components/SEO'
import { HeroSection } from '@/components/sections/HeroSection'
import { IntroSection } from '@/components/sections/IntroSection'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { TrustBar } from '@/components/sections/TrustBar'
import { ContactCTA } from '@/components/sections/ContactCTA'

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

  const services = [0, 1, 2, 3].map((i) => ({
    name: t(`services.${i}.name`),
    description: t(`services.${i}.description`),
  }))

  const trustItems = [0, 1, 2].map((i) => ({
    value: t(`trust.items.${i}.value`),
    label: t(`trust.items.${i}.label`),
  }))

  return (
    <>
      <LocalBusinessSchema />
      <HeroSection
        headline={t('hero.headline')}
        subheadline={t('hero.subheadline')}
        ctaLabel={t('hero.ctaLabel')}
        ctaHref={`/${locale}/contact`}
        photoAlt={t('hero.photoAlt')}
      />
      <IntroSection body={t('intro.body')} />
      <ServicesPreview services={services} />
      <TrustBar items={trustItems} />
      <ContactCTA
        body={t('cta.body')}
        buttonLabel={t('cta.buttonLabel')}
        buttonHref={`/${locale}/contact`}
      />
    </>
  )
}
