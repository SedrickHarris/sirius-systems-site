import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

// Sirius Systems brand palette — derived from the official logo.
// Documented in detail at docs/brand/brand-guide.md §3.
//
// Two accent colors by design:
//   - PRIMARY YELLOW (#F2EA00) — reserved for primary CTAs and the brand mark.
//     Never used for body text, atmospheric glows, or non-action emphasis.
//   - SECONDARY BLUE (#1468FF) — workhorse supporting accent. Section labels,
//     link emphasis, dots, focus rings, decorative SVG strokes, atmospheric
//     glows. Used much more frequently than yellow.
//
// Typography is still placeholder — see brand-guide.md §4.
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
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        // Base canvas
        background: '#050505',
        'background-alt': '#0B0B0F',
        foreground: '#F5F7FA',

        // Primary — YELLOW. CTAs only.
        primary: {
          DEFAULT: '#F2EA00',
          foreground: '#050505',
          hover: '#FFF04A',
        },

        // Secondary — BLUE. Supporting accent + secondary CTAs.
        secondary: {
          DEFAULT: '#1468FF',
          foreground: '#F5F7FA',
          hover: '#3A82FF',
        },

        // Accent — alias to secondary blue. Existing `text-accent`,
        // `bg-accent`, `border-accent`, `ring-accent`, `fill-accent`
        // usages all resolve to the secondary blue.
        accent: {
          DEFAULT: '#1468FF',
          foreground: '#F5F7FA',
        },

        muted: {
          DEFAULT: '#8B93A7',
          foreground: '#B7C0D1',
        },

        surface: {
          DEFAULT: '#121218',
          foreground: '#F5F7FA',
        },
        'surface-2': '#181824',

        border: '#2A2F3A',
        'border-strong': '#3F4654',

        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        // PLACEHOLDER pair — Bricolage Grotesque (display) + Inter (body)
        // stand in until the client confirms the real type pair (1.8).
        // See docs/brand/brand-guide.md §4.
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
        // Type scale per docs/brand/brand-guide.md §4
        display: ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        'eyebrow': '0.18em',
      },
      transitionTimingFunction: {
        // Motion tokens per docs/brand/motion-guidelines.md §2.
        // Tailwind auto-prefixes "ease-" — these keys produce
        // .ease-out-soft and .ease-in-firm utilities.
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
          'radial-gradient(circle, rgb(42 47 58 / 0.65) 1px, transparent 1px)',
        'grid-faint':
          'radial-gradient(circle, rgb(42 47 58 / 0.35) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
        'grid-48': '48px 48px',
      },
    },
  },
  plugins: [typography],
}

export default config
