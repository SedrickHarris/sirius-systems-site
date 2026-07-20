import type { Metadata } from 'next'
import { Suspense } from 'react'
import { GetStartedClient } from './GetStartedClient'

// /get-started — checkout handoff (doc 21 §7.3). Sent by the salesperson at
// close; not publicly linked. noindex, nofollow; not in nav or sitemap (§11).

export const metadata: Metadata = {
  title: 'Get Started | Sirius Systems',
  description: 'Start your Growth System — order summary and secure checkout.',
  alternates: { canonical: '/get-started' },
  robots: { index: false, follow: false },
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={null}>
      <GetStartedClient />
    </Suspense>
  )
}
