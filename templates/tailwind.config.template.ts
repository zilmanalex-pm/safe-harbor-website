import type { Config } from 'tailwindcss'

// ─────────────────────────────────────────────
// Tailwind Config Template — Safe Harbor
// Fill in values from design-rules.md before use.
// Copy this file to tailwind.config.ts in the project root.
// ─────────────────────────────────────────────

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],

  // RTL support: reads dir="rtl" on <html> for Hebrew locale
  // Use rtl: prefix utilities for layout mirroring
  future: {
    hoverOnlyWhenSupported: true,
  },

  theme: {
    extend: {

      // ── Colors (from design-rules.md) ──────────────
      colors: {
        background: '#F7F4F0',   // DRAFT — warm off-white
        text:       '#2D2926',   // DRAFT — warm dark
        primary:    '#5E8C85',   // DRAFT — sage/teal
        neutral:    '#E8E0D5',   // DRAFT — warm neutral
        surface:    '#FDFBF9',   // DRAFT — cards, inputs
      },

      // ── Typography (from design-rules.md) ──────────
      fontFamily: {
        // Hebrew locale font (loaded via next/font in lib/fonts.ts)
        hebrew: ['var(--font-heebo)', 'sans-serif'],
        // Russian locale font (loaded via next/font in lib/fonts.ts)
        russian: ['var(--font-inter)', 'sans-serif'],
        // Fallback for both
        sans: ['var(--font-inter)', 'var(--font-heebo)', 'sans-serif'],
      },

      fontSize: {
        // Scale — fill in from design-rules.md when locked
        // 'h1': ['TBD', { lineHeight: 'TBD', fontWeight: 'TBD' }],
        // 'h2': ['TBD', { lineHeight: 'TBD', fontWeight: 'TBD' }],
        // 'h3': ['TBD', { lineHeight: 'TBD', fontWeight: 'TBD' }],
        // 'body': ['TBD', { lineHeight: 'TBD' }],
        // 'small': ['TBD', { lineHeight: 'TBD' }],
      },

      // ── Spacing (from design-rules.md — base 8px) ──
      spacing: {
        'xs':  '8px',
        'sm':  '16px',
        'md':  '24px',
        'lg':  '32px',
        'xl':  '48px',
        '2xl': '64px',
        '3xl': '96px',
      },

      // ── Layout ─────────────────────────────────────
      maxWidth: {
        content: '1200px',
      },

      // ── Border radius ──────────────────────────────
      // borderRadius: {
      //   btn: 'TBD',   // fill in from design-rules.md
      //   card: 'TBD',
      // },

    },
  },

  plugins: [],
}

export default config
