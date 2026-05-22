'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'
import { SITE } from '@/lib/site'

const NAV = [
  { href: '/services',   label: 'Services'   },
  { href: '/industries', label: 'Industries' },
  { href: '/about',      label: 'About'      },
] as const

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className="sticky top-0 z-30 border-b"
      style={{
        backgroundColor: 'var(--bg)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="site-container flex h-16 items-center justify-between gap-4 md:gap-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5"
          style={{ color: 'var(--text)' }}
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
                className="relative font-medium transition-colors duration-fast"
                style={{
                  color: active ? 'var(--yellow)' : 'var(--text-muted)',
                }}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute -bottom-[21px] left-0 right-0"
                    style={{
                      height: '2px',
                      backgroundColor: 'var(--yellow)',
                    }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/contact" className="btn-primary text-xs">
            Book a call
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden"
            style={{
              borderColor: 'var(--border-strong)',
              color: 'var(--text)',
              backgroundColor: open ? 'var(--surface)' : 'transparent',
            }}
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 z-20 md:hidden"
            style={{ backgroundColor: 'rgb(0 0 0 / 0.45)' }}
          />
          <nav
            id="mobile-nav"
            aria-label="Primary mobile"
            className="absolute left-0 right-0 top-full z-30 border-b md:hidden"
            style={{
              backgroundColor: 'var(--bg)',
              borderColor: 'var(--border)',
            }}
          >
            <ul className="site-container flex flex-col gap-1 py-3">
              {NAV.map((item) => {
                const active = pathname?.startsWith(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors"
                      style={{
                        color: active ? 'var(--yellow)' : 'var(--text)',
                        backgroundColor: active ? 'var(--surface)' : 'transparent',
                      }}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className="h-4 w-4"
                        aria-hidden
                        style={{ color: active ? 'var(--yellow)' : 'var(--text-muted)' }}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </>
      )}
    </header>
  )
}

// Brand mark: Sirius four-point star. Yellow star (`fill-primary`) with
// a blue core (`fill-secondary`). Placeholder until the real logo lands
// (content-needed-from-client.md item 1.5).
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
