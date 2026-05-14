// app/[locale]/faq/page.tsx — FAQ page

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { FAQSection } from '@/components/sections/FAQSection'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'faq.meta' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function FAQPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'faq' })

  const questions = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
    question: t(`questions.${i}.question`),
    answer: t(`questions.${i}.answer`),
  }))

  return (
    <FAQSection
      headline={t('headline')}
      questions={questions}
    />
  )
}
