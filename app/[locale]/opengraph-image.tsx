// app/[locale]/opengraph-image.tsx — Home page OG image

import { ImageResponse } from 'next/og'
import { OGImageTemplate } from '@/lib/og'

// Node.js runtime — needed for dynamic import('@/content/...') template literals
export const alt = 'Sofia Tarasov Psychotherapy'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const content = await import(`@/content/${locale}/home.json`)
  const { title, description } = content.default.meta

  return new ImageResponse(
    <OGImageTemplate title={title} description={description} locale={locale} />,
    { width: 1200, height: 630 },
  )
}
