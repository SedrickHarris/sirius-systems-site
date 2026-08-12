import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ThankYouClient } from './ThankYouClient'

// /thank-you — post-booking confirmation (doc 21 §7.4). Delivered after a
// /book submission. noindex, nofollow; not in nav or sitemap (§11).
// Distinct from /revenue-leak-audit/thank-you, which serves the audit funnel.

export const metadata: Metadata = {
  title: "You're Booked | Sirius Systems",
  description: 'Your Growth System call is confirmed. Here is what to do next.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYouClient />
    </Suspense>
  )
}
