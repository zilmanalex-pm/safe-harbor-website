'use client'

// UnderConstruction.tsx
// Shows a full-screen construction page to external visitors.
// To preview the real site: add ?preview=true to any URL once.
// That sets a localStorage flag — all future visits show the real site.
// To reset: open browser console and type: localStorage.removeItem('preview')

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

interface Props {
  locale: string
}

export function UnderConstruction({ locale }: Props) {
  const searchParams = useSearchParams()
  const [hidden, setHidden] = useState(true) // start hidden to avoid flash

  useEffect(() => {
    // If ?preview=true is in URL, save it and show real site
    if (searchParams.get('preview') === 'true') {
      localStorage.setItem('preview', 'true')
    }

    // If preview flag is set, hide the construction page
    if (localStorage.getItem('preview') === 'true') {
      setHidden(true)
    } else {
      setHidden(false)
    }
  }, [searchParams])

  if (hidden) return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: '#2d4a3e',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '64px', marginBottom: '24px' }}>🚧</div>
      <h1 style={{
        color: '#f5f0e8',
        fontSize: 'clamp(24px, 5vw, 42px)',
        fontWeight: '700',
        lineHeight: '1.4',
        marginBottom: '16px',
        maxWidth: '600px',
      }}>
        {locale === 'he' ? 'האתר עובר עדכונים' : 'Сайт обновляется'}
      </h1>
      <p style={{
        color: '#c8d8c4',
        fontSize: 'clamp(16px, 3vw, 22px)',
        lineHeight: '1.6',
        maxWidth: '500px',
      }}>
        {locale === 'he'
          ? 'נחזור בקרוב במלואו. תודה על הסבלנות.'
          : 'Скоро вернёмся в полном объёме. Спасибо за терпение.'}
      </p>
      <a
        href="https://wa.me/972523777865"
        style={{
          marginTop: '40px',
          display: 'inline-block',
          background: '#25d366',
          color: '#fff',
          padding: '14px 32px',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: '600',
          textDecoration: 'none',
        }}
      >
        {locale === 'he' ? 'צרו קשר בוואטסאפ' : 'Написать в WhatsApp'}
      </a>
    </div>
  )
}
