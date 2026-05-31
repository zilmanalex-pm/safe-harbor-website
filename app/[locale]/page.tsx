// app/[locale]/page.tsx — Homepage

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import type { Locale } from '@/lib/utils'
import { generatePageMetadata, LocalBusinessSchema } from '@/components/SEO'
import { HeroSection } from '@/components/sections/HeroSection'
import { IntroSection } from '@/components/sections/IntroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ContactCTA } from '@/components/sections/ContactCTA'

const WHATSAPP_URL = 'https://wa.me/972523777865'

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
  const tShared = await getTranslations({ locale, namespace: 'shared' })

  // Trust bar — dynamic: render however many items are in the JSON
  const trustItemCount = 4
  const trustItems = Array.from({ length: trustItemCount }, (_, i) => {
    try {
      return {
        value: t(`trust.items.${i}.value`),
        label: t(`trust.items.${i}.label`),
      }
    } catch {
      return null
    }
  }).filter(Boolean) as { value: string; label: string }[]

  // CTA label — hero uses shared nav CTA, bottom uses home.cta.buttonLabel
  const heroCta = tShared('nav.cta')

  return (
    <>
      <LocalBusinessSchema />
      <HeroSection
        headline={t('hero.headline')}
        nameplate={t('hero.nameplate')}
        ctaLabel={heroCta}
        ctaHref={WHATSAPP_URL}
        photoAlt={t('hero.photoAlt')}
      />
      <IntroSection body={t('intro.body')} />
      <TrustBar items={trustItems} />
      <ContactCTA
        body={t('cta.body')}
        buttonLabel={t('cta.buttonLabel')}
        buttonHref={WHATSAPP_URL}
      />
    </>
  )
}
