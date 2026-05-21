'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/site'

const NAV = [
  { href: '/services',   label: 'Services'   },
  { href: '/industries', label: 'Industries' },
  { href: '/about',      label: 'About'      },
] as const

export function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--border-soft)] bg-white/90 backdrop-blur-md">
      <div className="site-container flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-[color:var(--text-charcoal)]"
        >
          <SiriusMark />
          <span className="font-display text-base font-semibold tracking-tight">
            {SITE.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm md:flex">
          {NAV.map((item) => {
            const active = pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative font-medium transition-colors duration-fast ease-out-soft ${
                  active
                    ? 'text-[color:var(--text-charcoal)]'
                    : 'text-[color:var(--text-body)] hover:text-[color:var(--text-charcoal)]'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute -bottom-[21px] left-0 right-0 h-px bg-[color:var(--blue-system)]"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <Link href="/contact" className="btn-primary text-xs">
          Book a call
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </header>
  )
}

// Brand mark — Sirius four-point star.
// Yellow → blue palette shift was applied in Stage 1; star is now blue
// (`fill-primary`) with a navy-midnight core (`fill-secondary`). Placeholder
// until the real logo SVG lands (content-needed-from-client.md item 1.5).
function SiriusMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 1.5 L13.6 10.4 L22.5 12 L13.6 13.6 L12 22.5 L10.4 13.6 L1.5 12 L10.4 10.4 Z"
        className="fill-primary"
      />
      <circle cx="12" cy="12" r="1.75" className="fill-secondary" />
    </svg>
  )
}
