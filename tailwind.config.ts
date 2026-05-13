import type { Config } from 'tailwindcss'

// ─────────────────────────────────────────────
// Tailwind Config — Safe Harbor
// Values sourced from design-rules.md
// Status: DRAFT (colours and fonts confirmed; font scale and component styles TBD — Sprint 2)
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
