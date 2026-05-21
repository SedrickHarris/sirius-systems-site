import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

// Sirius Systems — Dark brand token map (restored to canonical brand-skill.md).
// The Stage 1-4 light/navy theme has been replaced with the confirmed
// dark + yellow + blue palette. Tokens here back Tailwind utility classes
// (bg-primary / text-foreground / etc.) and the CSS-variable system in
// app/globals.css. Both layers are kept numerically aligned so pages can
// mix Tailwind utilities and globals.css classes without color drift.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,md,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './lib/**/*.{ts,tsx}',
    './mdx-components.tsx',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background:         '#050505',
        'background-alt':   '#0B0B0F',
        surface:            '#121218',
        'surface-2':        '#181824',

        primary: {
          DEFAULT:          '#F2EA00',
          foreground:       '#050505',
          hover:            '#FFF04A',
        },

        secondary: {
          DEFAULT:          '#1468FF',
          foreground:       '#F5F7FA',
          hover:            '#3A82FF',
        },

        accent: {
          DEFAULT:          '#1468FF',
          foreground:       '#F5F7FA',
        },

        foreground:         '#F5F7FA',
        'muted-foreground': '#B7C0D1',
        muted:              '#8B93A7',

        border:             '#2A2F3A',
        'border-strong':    '#3F4654',

        success:     { DEFAULT: '#22C55E', foreground: '#050505' },
        warning:     { DEFAULT: '#F59E0B', foreground: '#050505' },
        destructive: { DEFAULT: '#EF4444', foreground: '#F5F7FA' },
      },
      fontFamily: {
        display: [
          'var(--font-display)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        sans: [
          'var(--font-body)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        display: ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        eyebrow: '0.16em',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-firm': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
      transitionDuration: {
        instant: '80ms',
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        hero: '500ms',
      },
      backgroundImage: {
        'grid-dots':
          'radial-gradient(circle, rgb(229 231 235 / 0.9) 1px, transparent 1px)',
        'grid-faint':
          'radial-gradient(circle, rgb(229 231 235 / 0.55) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
        'grid-48': '48px 48px',
        'grid-56': '56px 56px',
      },
    },
  },
  plugins: [typography],
}

export default config
