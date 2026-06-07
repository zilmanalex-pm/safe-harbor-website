// app/[locale]/services/page.tsx — Services page

import type { Metadata } from 'next'
import type { Locale } from '@/lib/utils'
import { generatePageMetadata } from '@/components/SEO'
import { getTranslations } from 'next-intl/server'
import { ServicesSection } from '@/components/sections/ServicesSection'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return generatePageMetadata(locale as Locale, 'services')
}

export default async function ServicesPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'services' })

  const services = [0, 1, 2].map((i) => ({
    slug: t(`services.${i}.slug`),
    name: t(`services.${i}.name`),
    description: t(`services.${i}.description`),
    image: t(`services.${i}.image`),
  }))

  return (
    <ServicesSection
      headline={t('headline')}
      subheadline={t('subheadline')}
      services={services}
    />
  )
}
