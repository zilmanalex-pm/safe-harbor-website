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
        approachQuote={(() => { try { return t('approach.quote') } catch { return undefined } })()}
        approach={t('approach.body')}
        therapies={(() => { try { return t.raw('approach.therapies') as Array<{name: string; body: string}> } catch { return undefined } })()}
        backgroundHeadline={t('background.headline')}
        background={t('background.body')}
        education={(() => { try { return t('background.education') } catch { return undefined } })()}
        closing={t('closing.body')}
        photoAlt={t('photoAlt')}
      />
    </>
  )
}
