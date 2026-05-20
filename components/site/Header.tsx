'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/site'

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
] as const

export function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <SiriusMark />
          <span className="font-display text-base tracking-tight">
            {SITE.name}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm md:flex"
        >
          {nav.map((item) => {
            const active = pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative transition-colors duration-fast ease-out-soft ${
                  active
                    ? 'text-foreground'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute -bottom-[21px] left-0 right-0 h-px bg-accent"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/contact"
          className="btn-primary hidden text-xs md:inline-flex"
        >
          Book a call
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>

        <Link
          href="/contact"
          className="btn-primary text-xs md:hidden"
          aria-label="Book a call"
        >
          Book a call
        </Link>
      </div>
    </header>
  )
}

// Brand mark — Sirius four-point star burst.
// Yellow body + blue core matches the brand palette in docs/brand/brand-guide.md §3.
// This is the working placeholder until the real logo SVG lands
// (content-needed-from-client.md item 1.5).
function SiriusMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden
    >
      {/* 4-point star (Sirius reference), filled with PRIMARY YELLOW */}
      <path
        d="M12 1.5 L13.6 10.4 L22.5 12 L13.6 13.6 L12 22.5 L10.4 13.6 L1.5 12 L10.4 10.4 Z"
        className="fill-primary"
      />
      {/* Inner accent — SECONDARY BLUE */}
      <circle cx="12" cy="12" r="1.75" className="fill-secondary" />
    </svg>
  )
}
