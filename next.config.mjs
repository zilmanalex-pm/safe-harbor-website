// @ts-check
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimisation — WebP conversion handled automatically
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      // Sanity image CDN
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  // Skip type-checking and lint during Vercel builds — we run these locally
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default withNextIntl(nextConfig)
