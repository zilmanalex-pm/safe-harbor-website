// app/[locale]/approach/page.tsx — Professional perspective page

import type { Metadata } from 'next'
import type { Locale } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import { AboutSection } from '@/components/sections/AboutSection'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about' })
  return {
    title: locale === 'he' ? 'גישתי המקצועית | סופיה טרסוב' : 'Мой профессиональный подход | София Тарасов',
    description: locale === 'he'
      ? 'הגישה הטיפולית של סופיה טרסוב, פסיכותרפיסטית בראשון לציון'
      : 'Профессиональный подход Софии Тарасов, психотерапевта в Ришон-ле-Ционе',
  }
}

export default async function ApproachPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'about' })

  return (
    <AboutSection
      h1={locale === 'he' ? 'גישתי המקצועית' : 'Мой профессиональный подход'}
      approachHeadline={t('approach.headline')}
      approachQuote={(() => { try { return t('approach.quote') } catch { return undefined } })()}
      approach={t('approach.body')}
      therapies={(() => { try { return t.raw('approach.therapies') as Array<{name: string; body: string}> } catch { return undefined } })()}
      backgroundHeadline=""
      background=""
      closing={t('closing.body')}
      photoAlt={t('photoAlt')}
      variant="approach"
    />
  )
}
