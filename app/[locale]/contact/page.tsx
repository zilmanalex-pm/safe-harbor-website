// app/[locale]/contact/page.tsx — Contact page

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ContactSection } from '@/components/sections/ContactSection'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contact.meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <ContactSection
      intro={t('intro.body')}
      responseTime={t('responseTime')}
      nameLabel={t('form.nameLabel')}
      emailLabel={t('form.emailLabel')}
      phoneLabel={t('form.phoneLabel')}
      messageLabel={t('form.messageLabel')}
      submitLabel={t('form.submitLabel')}
    />
  )
}
