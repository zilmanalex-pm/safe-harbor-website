// app/[locale]/layout.tsx — Safe Harbor
// Layout for all locale routes (/he/* and /ru/*).
// <html> and <body> are owned by the root layout; locale-specific attributes
// (lang, dir, font class) are applied client-side by <LocaleSetter>.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'

import { heebo, inter } from '@/lib/fonts'
import { getDir, getFontClass } from '@/lib/utils'
import type { Locale } from '@/lib/utils'

import { LocaleSetter } from '@/components/LocaleSetter'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'

import '@/app/globals.css'

// ─────────────────────────────────────────────
// Supported locales — must match next-intl config and middleware
// ─────────────────────────────────────────────
const locales: Locale[] = ['he', 'ru']

// ─────────────────────────────────────────────
// Static params — tells Next.js which locales to pre-render at build time
// ─────────────────────────────────────────────
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// ─────────────────────────────────────────────
// Default metadata — overridden per page via generateMetadata
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    template: '%s | Sofia Tarasov',
    default: 'Sofia Tarasov — Psychotherapist',
  },
  icons: {
    icon: '/images/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Sofia Tarasov Psychotherapy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// ─────────────────────────────────────────────
// Locale layout
// ─────────────────────────────────────────────
interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()
  const tShared = await getTranslations({ locale, namespace: 'shared' })
  const t = await getTranslations({ locale, namespace: 'shared.nav' })

  const dir = getDir(locale as Locale)
  const fontClass = getFontClass(locale as Locale)
  const htmlClass = `${heebo.variable} ${inter.variable}`

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/faq`, label: t('faq') },
  ]

  const footerLinks = [
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/faq`, label: t('faq') },
    { href: `/${locale}/contact`, label: t('contact') },
  ]

  const tFooter = await getTranslations({ locale, namespace: 'shared.footer' })

  return (
    <>
      {/* Sets lang, dir, and font classes on <html> and <body> client-side */}
      <LocaleSetter
        locale={locale}
        dir={dir}
        bodyClass={fontClass}
        htmlClass={htmlClass}
      />

      {/* Google Analytics 4 — only fires in production */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Plausible analytics — only fires in production when NEXT_PUBLIC_SITE_URL is set */}
      {process.env.NEXT_PUBLIC_SITE_URL && (
        <Script
          defer
          data-domain="sofia-tarasov.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}

      {/* UserWay accessibility widget — bottom-left forced via MutationObserver */}
      <Script id="userway-widget" strategy="afterInteractive">{`
        (function(d) {
          // Load the widget
          var s = d.createElement('script');
          s.src = 'https://cdn.userway.org/widget.js';
          s.setAttribute('data-account', '2yHirPCDdP');
          s.setAttribute('data-position', 'bottom_left');
          s.async = true;
          d.head.appendChild(s);

          // Watch for the widget element and force bottom-left position
          function forcePosition() {
            var el = d.getElementById('userwayAccessibilityIcon')
              || d.querySelector('[id*="userway" i]')
              || d.querySelector('[class*="userway" i]');
            if (el) {
              el.style.setProperty('bottom', '24px', 'important');
              el.style.setProperty('left',   '24px', 'important');
              el.style.setProperty('top',    'auto', 'important');
              el.style.setProperty('right',  'auto', 'important');
            }
          }

          var observer = new MutationObserver(forcePosition);
          observer.observe(d.body, { childList: true, subtree: true });
        })(document);
      `}</Script>

      <NextIntlClientProvider messages={messages}>
        <Header
          siteName={tShared('siteName')}
          links={navLinks}
          ctaLabel={t('cta')}
          ctaHref="https://wa.me/972523777865"
          locale={locale as Locale}
        />
        <main>
          {children}
        </main>
        <Footer
          tagline={tFooter('tagline')}
          drawings={tFooter('drawings')}
          copyright={tFooter('copyright')}
          links={footerLinks}
        />
        <WhatsAppButton
          number={tShared('whatsapp')}
          ariaLabel="צרו קשר בוואטסאפ / Написать в WhatsApp"
        />
      </NextIntlClientProvider>
    </>
  )
}
