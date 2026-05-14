import type { Config } from 'tailwindcss'

// ─────────────────────────────────────────────
// Tailwind Config — Safe Harbor
// Values sourced from design-rules.md
// Status: DRAFT — Sprint 2 complete (font scale + component styles locked)
// ─────────────────────────────────────────────

const config: Config = {
    darkMode: ['class'],
    content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],

  future: {
    hoverOnlyWhenSupported: true,
  },

  theme: {
  	extend: {
  		colors: {
  			background: '#F7F4F0',
  			text: '#2D2926',
  			primary: '#5E8C85',
  			neutral: '#E8E0D5',
  			surface: '#FDFBF9'
  		},
  		fontFamily: {
  			hebrew: [
  				'var(--font-heebo)',
  				'sans-serif'
  			],
  			russian: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			sans: [
  				'var(--font-inter)',
  				'var(--font-heebo)',
  				'sans-serif'
  			]
  		},
  		spacing: {
  			xs: '8px',
  			sm: '16px',
  			md: '24px',
  			lg: '32px',
  			xl: '48px',
  			'2xl': '64px',
  			'3xl': '96px'
  		},
  		maxWidth: {
  			content: '1200px'
  		},

  		// ── Font scale (DRAFT — Option A: Warm Editorial) ──────
  		fontSize: {
  			'h1':    ['52px', { lineHeight: '1.15', fontWeight: '600' }],
  			'h2':    ['34px', { lineHeight: '1.2',  fontWeight: '500' }],
  			'h3':    ['22px', { lineHeight: '1.3',  fontWeight: '500' }],
  			'body':  ['17px', { lineHeight: '1.7',  fontWeight: '400' }],
  			'small': ['13px', { lineHeight: '1.5',  fontWeight: '400' }],
  		},

  		// ── Border radius (DRAFT — Option A: Soft & rounded) ───
  		borderRadius: {
  			'pill': '9999px',  // primary + secondary buttons, inputs
  			'card': '16px',    // cards and section containers
  			'sm':   '8px',     // small UI elements (badges, tags)
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },

  plugins: [],
}

export default config
