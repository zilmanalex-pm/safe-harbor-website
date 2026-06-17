// app/[locale]/contact/page.tsx — Contact page

import type { Metadata } from 'next'
import type { Locale } from '@/lib/utils'
import { generatePageMetadata, LocalBusinessSchema } from '@/components/SEO'
import { getTranslations } from 'next-intl/server'
import { ContactSection } from '@/components/sections/ContactSection'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return generatePageMetadata(locale as Locale, 'contact')
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t  = await getTranslations({ locale, namespace: 'contact' })
  const ts = await getTranslations({ locale, namespace: 'shared' })

  return (
    <>
      <LocalBusinessSchema />
      <ContactSection
        h1={t('h1')}
        headline={t('headline')}
        whatsappLabel={t('whatsappLabel')}
        emailLabel={t('emailLabel')}
        phoneLabel={t('phoneLabel')}
        email={t('email')}
        phone={t('phone')}
        whatsapp={ts('whatsapp')}
      />
    </>
  )
}
