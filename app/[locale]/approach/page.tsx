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
  return {
    title: locale === 'he' ? 'גישות טיפוליות | סופיה טרסוב' : 'Мои подходы | София Тарасов',
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
  const t = await getTranslations({ locale, namespace: 'approach' })

  return (
    <AboutSection
      h1={t('h1')}
      showPageHeadline={true}
      approachHeadline={(() => { try { return t('headline') } catch { return '' } })()}
      approachQuote={(() => { try { return t('quote') } catch { return undefined } })()}
      approach={t('body')}
      therapies={(() => { try { return t.raw('therapies') as Array<{name: string; body: string}> } catch { return undefined } })()}
      backgroundHeadline=""
      background=""
      closing={(() => { try { return t('closing') } catch { return '' } })()}
      photoAlt=""
      variant="approach"
    />
  )
}
