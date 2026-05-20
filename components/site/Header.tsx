import Link from 'next/link'
import { SITE } from '@/lib/site'

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const

// Stub. Real header (mobile nav, condensed lockup, CTA button) ships in Phase 2.
export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between gap-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          {SITE.name}
        </Link>
        <nav
          aria-label="Primary"
          className="hidden gap-6 text-sm text-muted md:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-fast ease-out-soft hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
