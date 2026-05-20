import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

// Brand tokens per docs/brand/brand-guide.md.
// Color + font values are PLACEHOLDERS until client confirms (items 1.6–1.8
// in docs/site-os/inputs/content-needed-from-client.md). Search for "PLACEHOLDER"
// here when those values arrive.
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
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // PLACEHOLDER
        background: '#0B0F19',
        foreground: '#F8FAFC',
        primary: {
          DEFAULT: '#0EA5E9',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#1E293B',
          foreground: '#F8FAFC',
        },
        muted: {
          DEFAULT: '#94A3B8',
          foreground: '#CBD5E1',
        },
        accent: {
          DEFAULT: '#22D3EE',
          foreground: '#0B0F19',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        border: '#1F2937',
      },
      fontFamily: {
        // PLACEHOLDER — see docs/brand/brand-guide.md §4
        sans: [
          'var(--font-display)',
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
        'display': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        // Motion tokens per docs/brand/motion-guidelines.md §2
        'ease-out-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-firm': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
      transitionDuration: {
        instant: '80ms',
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        hero: '500ms',
      },
    },
  },
  plugins: [typography],
}

export default config
