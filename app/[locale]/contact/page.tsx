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
  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <>
      <LocalBusinessSchema />
      <ContactSection
        h1={t('h1')}
        intro={t('intro.body')}
        responseTime={t('responseTime')}
        nameLabel={t('form.nameLabel')}
        emailLabel={t('form.emailLabel')}
        phoneLabel={t('form.phoneLabel')}
        messageLabel={t('form.messageLabel')}
        submitLabel={t('form.submitLabel')}
        validationMessage={t('form.validationMessage')}
        successMessage={t('form.successMessage')}
        errorMessage={t('form.errorMessage')}
      />
    </>
  )
}
