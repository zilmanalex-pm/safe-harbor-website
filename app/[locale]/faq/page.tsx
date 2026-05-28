// app/[locale]/faq/page.tsx — FAQ page

import type { Metadata } from 'next'
import type { Locale } from '@/lib/utils'
import { generatePageMetadata } from '@/components/SEO'
import { getMessages } from 'next-intl/server'
import { FAQSection } from '@/components/sections/FAQSection'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return generatePageMetadata(locale as Locale, 'faq')
}

export default async function FAQPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const messages = await getMessages({ locale })
  const faq = messages.faq as any

  return (
    <FAQSection
      headline={faq.headline}
      categories={faq.categories}
    />
  )
}
