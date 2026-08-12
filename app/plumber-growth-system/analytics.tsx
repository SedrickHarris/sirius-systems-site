'use client'

import { useEffect } from 'react'
import Link from 'next/link'

// Analytics for the Plumber Growth System page (doc 23 §6). Events push to the
// GTM dataLayer (GTM-TJRT2ZHL, loaded in app/layout.tsx). They fire ONLY in
// production and carry no personal information — just the event name.

function track(event: string) {
  if (process.env.NODE_ENV !== 'production') return
  if (typeof window === 'undefined') return
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event })
}

/** Fires `plumber_growth_system_page_view` once on mount. */
export function PageView() {
  useEffect(() => {
    track('plumber_growth_system_page_view')
  }, [])
  return null
}

/**
 * A Next <Link> that pushes a named dataLayer event on click. Used for the VSSL
 * and booking CTAs so their clicks are attributable without any PII.
 */
export function TrackedLink({
  event,
  href,
  className,
  children,
}: {
  event: 'vssl_cta_click' | 'book_cta_click'
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className={className} onClick={() => track(event)}>
      {children}
    </Link>
  )
}
