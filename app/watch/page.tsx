import type { Metadata } from 'next'
import { Suspense } from 'react'
import { WatchClient } from './WatchClient'

// /watch — VSSL delivery page (doc 21 §7.2). Sent via the GHL appointment
// confirmation workflow after a prospect books. Vertical-aware via `?v=`.
// noindex, nofollow; not in nav or sitemap (§11).
//
// useSearchParams() requires a Suspense boundary under `output: 'export'`
// (Next 15) — the boundary is the reason the client half is split out.

export const metadata: Metadata = {
  title: 'Watch: How the Growth System Works | Sirius Systems',
  description: 'A short video walkthrough of your Sirius Systems Growth System.',
  alternates: { canonical: '/watch' },
  robots: { index: false, follow: false },
}

export default function WatchPage() {
  return (
    <Suspense fallback={null}>
      <WatchClient />
    </Suspense>
  )
}
