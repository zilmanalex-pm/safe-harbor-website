// @ts-check
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimisation — WebP conversion handled automatically
  images: {
    formats: ['image/webp'],
  },
}

export default withNextIntl(nextConfig)
