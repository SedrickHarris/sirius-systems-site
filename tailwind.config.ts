import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

// Sirius Systems — Premium AI infrastructure design system (Stage 1).
// Replaces the previous dark + yellow + blue brand. Tokens here back both
// Tailwind utility classes (bg-primary / text-foreground / etc.) and the
// CSS-variable-based design system defined in app/globals.css. Keeping
// them numerically aligned is what lets a single page render coherently
// when it mixes Tailwind utilities and globals.css classes.
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
        // ─── Surfaces ─────────────────────────
        // Default page is light premium (60% of the design ratio).
        background: '#FFFFFF',
        'background-alt': '#F7F9FC',
        foreground: '#111827',

        // ─── Primary action — bright system blue ──
        primary: {
          DEFAULT: '#0066FF',
          foreground: '#FFFFFF',
          hover: '#1D7CFF',
        },

        // ─── Secondary — deep navy (dark sections + secondary CTAs) ──
        secondary: {
          DEFAULT: '#061426',
          foreground: '#FFFFFF',
          hover: '#102B4F',
        },

        // ─── Accent alias (resolves to primary blue) ──
        // Keeping this token so existing `text-accent` / `bg-accent`
        // usages across components continue to work, now in the new
        // brand color rather than the previous cyan/yellow.
        accent: {
          DEFAULT: '#0066FF',
          foreground: '#FFFFFF',
        },

        // ─── Navy depth tokens (for dark sections / system visuals) ──
        navy: {
          midnight: '#061426',
          DEFAULT: '#0B1F3A',
          slate: '#102B4F',
        },

        // ─── Lighter blue (gradients, decorative accents) ──
        'blue-light': '#1D7CFF',

        // ─── Earned accents (use sparingly) ──
        teal: '#00B8A9',
        gold: '#D6A84F',

        // ─── Muted text ──
        muted: {
          DEFAULT: '#9CA3AF',
          foreground: '#4B5563',
        },

        // ─── Card/panel surface (light) ──
        surface: {
          DEFAULT: '#FFFFFF',
          foreground: '#111827',
        },
        'surface-2': '#F7F9FC',

        // ─── Hairlines ──
        border: '#E5E7EB',
        'border-strong': '#9CA3AF',

        // ─── Status ──
        destructive: { DEFAULT: '#EF4444', foreground: '#FFFFFF' },
        success: { DEFAULT: '#22C55E', foreground: '#FFFFFF' },
        warning: { DEFAULT: '#F59E0B', foreground: '#111827' },
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
