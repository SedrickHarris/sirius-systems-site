import type { Metadata } from 'next'
import { Suspense } from 'react'
import { OnboardingClient } from './OnboardingClient'

// /onboarding — post-purchase intake form (doc 21 §7.5). Linked only from the
// GHL post-payment workflow. noindex, nofollow; not in nav or sitemap (§11).
// Separate from the plumbing client website's own /client-onboarding form.

export const metadata: Metadata = {
  title: 'Client Onboarding | Sirius Systems',
  description: 'Set up your Growth System — tell us about your business.',
  alternates: { canonical: '/onboarding' },
  robots: { index: false, follow: false },
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={null}>
      <OnboardingClient />
    </Suspense>
  )
}
