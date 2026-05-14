// app/[locale]/services/page.tsx — Services page

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ServicesSection } from '@/components/sections/ServicesSection'

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

export default async function ServicesPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'services' })

  const services = [0, 1, 2, 3].map((i) => ({
    slug: t(`services.${i}.slug`),
    name: t(`services.${i}.name`),
    description: t(`services.${i}.description`),
  }))

  return (
    <ServicesSection
      headline={t('headline')}
      subheadline={t('subheadline')}
      services={services}
    />
  )
}
