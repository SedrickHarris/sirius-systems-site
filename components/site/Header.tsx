'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { SITE } from '@/lib/site'
import { PUBLISHED_VERTICALS } from '@/lib/verticals'

// Products dropdown targets. Driven by the published-vertical list, so a
// vertical only appears here once its product page ships (doc 21 §5.3 /
// acceptance criterion 16). Plumbing only, at launch.
const PRODUCTS = PUBLISHED_VERTICALS.map((v) => ({
  href: v.productPath,
  label: v.product,
}))

const NAV = [
  { href: '/services',   label: 'Services'   },
  { href: '/industries', label: 'Industries' },
  { href: '/products',   label: 'Products', dropdown: true },
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
          className="group inline-flex items-center"
          aria-label={SITE.name}
          style={{ color: 'var(--text)' }}
        >
          <Image
            src="/images/logos/sirius-systems-star-business-name-cropped-transparent-logo.webp"
            alt="Sirius Systems"
            width={1080}
            height={635}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm md:flex">
          {NAV.map((item) => {
            if ('dropdown' in item && item.dropdown) {
              return <ProductsMenu key="products" pathname={pathname} />
            }
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
                if ('dropdown' in item && item.dropdown) {
                  return (
                    <li key="products">
                      <span
                        className="block px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-eyebrow"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {item.label}
                      </span>
                      <ul>
                        {PRODUCTS.map((product) => {
                          const active = pathname?.startsWith(product.href)
                          return (
                            <li key={product.href}>
                              <Link
                                href={product.href}
                                aria-current={active ? 'page' : undefined}
                                className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors"
                                style={{
                                  color: active ? 'var(--yellow)' : 'var(--text)',
                                  backgroundColor: active ? 'var(--surface)' : 'transparent',
                                }}
                              >
                                <span>{product.label}</span>
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
                    </li>
                  )
                }
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

// Desktop Products dropdown. Opens on hover or click, closes on mouse-leave,
// Escape, blur-out, or navigation. Renders only published product pages (via
// PRODUCTS), so planned-but-unpublished verticals never appear (doc §5.3).
function ProductsMenu({ pathname }: { pathname: string | null }) {
  const [open, setOpen] = useState(false)
  const active = PRODUCTS.some((p) => pathname?.startsWith(p.href))

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false)
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false)
        }}
        className="relative inline-flex items-center gap-1 font-medium transition-colors duration-fast"
        style={{ color: active ? 'var(--yellow)' : 'var(--text-muted)' }}
      >
        Products
        <ChevronDown
          className="h-3.5 w-3.5"
          aria-hidden
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms' }}
        />
        {active && (
          <span
            aria-hidden
            className="absolute -bottom-[21px] left-0 right-0"
            style={{ height: '2px', backgroundColor: 'var(--yellow)' }}
          />
        )}
      </button>

      {open && (
        <div role="menu" className="absolute left-0 top-full z-40 pt-3">
          <div
            className="min-w-[240px] rounded-xl border p-2 shadow-lg"
            style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
          >
            {PRODUCTS.map((product) => {
              const itemActive = pathname?.startsWith(product.href)
              return (
                <Link
                  key={product.href}
                  href={product.href}
                  role="menuitem"
                  aria-current={itemActive ? 'page' : undefined}
                  className="block rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-[color:var(--surface)]"
                  style={{ color: itemActive ? 'var(--yellow)' : 'var(--text)' }}
                >
                  {product.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

