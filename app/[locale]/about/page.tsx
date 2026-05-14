// app/[locale]/about/page.tsx — About page

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { AboutSection } from '@/components/sections/AboutSection'

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

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'about' })

  return (
    <AboutSection
      opening={t('opening.body')}
      approachHeadline={t('approach.headline')}
      approach={t('approach.body')}
      backgroundHeadline={t('background.headline')}
      background={t('background.body')}
      closing={t('closing.body')}
      photoAlt={t('photoAlt')}
    />
  )
}
