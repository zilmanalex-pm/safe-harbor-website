// app/[locale]/about/page.tsx — About page

import type { Metadata } from 'next'
import type { Locale } from '@/lib/utils'
import { generatePageMetadata, PersonSchema } from '@/components/SEO'
import { getTranslations } from 'next-intl/server'
import { AboutSection } from '@/components/sections/AboutSection'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return generatePageMetadata(locale as Locale, 'about')
}

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'about' })

  return (
    <>
      <PersonSchema />
      <AboutSection
        h1={t('h1')}
        openingHeadline={t('opening.headline')} 
        opening={t('opening.body')}
        approachHeadline={t('approach.headline')}
        approach={t('approach.body')}
        backgroundHeadline={t('background.headline')}
        background={t('background.body')}
        closing={t('closing.body')}
        photoAlt={t('photoAlt')}
      />
    </>
  )
}
