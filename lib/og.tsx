// lib/og.tsx — Shared OG image template for all pages
// Used by every app/[locale]/*/opengraph-image.tsx route

export interface OGImageProps {
  title: string
  description: string
  locale: string
}

/**
 * Returns the JSX element passed to ImageResponse.
 * Kept as a plain function (not async) — fonts are loaded in each page file.
 */
export function OGImageTemplate({ title, description, locale }: OGImageProps) {
  const isHebrew = locale === 'he'
  const siteName = isHebrew ? 'סופיה טרסוב' : 'София Тарасов'
  const tagline = isHebrew ? 'פסיכותרפיסטית קלינית' : 'Клинический психотерапевт'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#F7F4F0',
        direction: isHebrew ? 'rtl' : 'ltr',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: 8,
          backgroundColor: '#5E8C85',
        }}
      />

      {/* Content area */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '64px 80px',
          justifyContent: 'space-between',
        }}
      >
        {/* Top: site name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: '#5E8C85',
              letterSpacing: '-0.5px',
            }}
          >
            {siteName}
          </span>
          <span
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: '#2D2926',
              opacity: 0.6,
            }}
          >
            {tagline}
          </span>
        </div>

        {/* Middle: page title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: '#2D2926',
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: '#2D2926',
              opacity: 0.65,
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            {description}
          </span>
        </div>

        {/* Bottom: domain */}
        <span
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: '#5E8C85',
            opacity: 0.8,
          }}
        >
          sofia-tarasov.com
        </span>
      </div>

      {/* Right accent stripe */}
      <div
        style={{
          position: 'absolute',
          top: 8,
          right: isHebrew ? 'auto' : 0,
          left: isHebrew ? 0 : 'auto',
          bottom: 0,
          width: 6,
          backgroundColor: '#5E8C85',
          opacity: 0.3,
        }}
      />
    </div>
  )
}
