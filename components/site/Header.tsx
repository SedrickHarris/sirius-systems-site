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

// Tiny brand mark — a small constellation glyph until the real logo lands.
function SiriusMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      aria-hidden
      className="text-accent"
    >
      <circle cx="11" cy="11" r="2.5" fill="currentColor" />
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.45" fill="none" />
      <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.65" fill="none" />
    </svg>
  )
}
