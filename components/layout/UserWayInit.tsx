'use client'
// components/layout/UserWayInit.tsx
// Loads UserWay with the correct language for the current locale.

import Script from 'next/script'

export function UserWayInit({ locale }: { locale: string }) {
  const lang = locale === 'he' ? 'he' : 'ru'

  return (
    <Script id="userway-widget" strategy="afterInteractive">{`
      (function(d) {
        var s = d.createElement('script');
        s.src = 'https://cdn.userway.org/widget.js';
        s.setAttribute('data-account', '2yHirPCDdP');
        s.setAttribute('data-lang', '${lang}');
        s.async = true;
        d.head.appendChild(s);
      })(document);
    `}</Script>
  )
}
