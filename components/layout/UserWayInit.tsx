'use client'
// components/layout/UserWayInit.tsx
// Loads UserWay with the correct language for the current locale.

import Script from 'next/script'

export function UserWayInit({ locale }: { locale: string }) {
  // UserWay uses 'iw' for Hebrew (old ISO 639-1 code)
  const lang = locale === 'he' ? 'iw' : 'ru'

  return (
    <Script id={`userway-widget-${locale}`} strategy="afterInteractive">{`
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
