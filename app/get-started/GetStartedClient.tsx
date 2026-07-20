'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, CreditCard, ClipboardList, Rocket, ShieldCheck } from 'lucide-react'
import { resolveVertical } from '@/lib/verticals'

// Client half of /get-started (doc §7.3). Bridges the post-sales-call moment to
// GHL SaaS checkout. Sent by the salesperson at close; vertical via `?v=`.
//
// OPEN DECISIONS: AGY-002 (GHL SaaS V1/V2 checkout architecture) and AGY-005
// (cancellation/refund/minimum-term policy copy). The checkout button target
// and the terms line below are placeholders until those are resolved.
//
// This page must NOT collect card details directly — checkout happens on GHL's
// secure hosted checkout (doc §16 criterion 5).

export function GetStartedClient() {
  const params = useSearchParams()
  const vertical = resolveVertical(params.get('v'))
  const productName = vertical ? vertical.product : 'Growth System'

  // TODO(AGY-002): vertical-specific GHL SaaS hosted-checkout link.
  const checkoutHref = ''

  const steps = [
    { icon: CreditCard, label: 'Secure payment', body: 'You complete checkout on our secure payment page — $297/month, no setup fee.' },
    { icon: ClipboardList, label: 'Onboarding', body: 'You fill out a short intake so we can gather what we need to build.' },
    { icon: Rocket, label: 'Launch', body: 'We build and launch your managed site and lead-response system.' },
  ]

  return (
    <main className="section-deep section-padding min-h-screen">
      <section className="site-container">
        <div className="content-medium text-center">
          <span className="section-eyebrow">Get started</span>
          <h1 className="mt-6 hero-heading">Start your {productName}</h1>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-5">
            <span className="text-base font-semibold text-white">{productName}</span>
            <span className="text-lg font-bold text-white">
              $297<span className="text-sm font-medium text-white/60"> /month</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/60">
            $0 setup fee · billed monthly · cancel anytime.
          </p>

          <ol className="mt-8 space-y-5">
            {steps.map(({ icon: Icon, label, body }, i) => (
              <li key={label} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[color:var(--blue-system)]/15 text-[color:var(--blue-light)]"
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {i + 1}. {label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-white/65">{body}</span>
                </span>
              </li>
            ))}
          </ol>

          {checkoutHref ? (
            <Link href={checkoutHref} className="btn-primary mt-8 w-full justify-center">
              Continue to secure checkout
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-white/20 bg-black/30 px-5 py-4 text-center text-xs text-white/55">
              Secure GHL SaaS checkout link goes here (AGY-002). Card details are
              collected on GHL&rsquo;s hosted checkout — never on this page.
            </div>
          )}

          <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/50">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            We do not guarantee results. See our{' '}
            <Link href="/terms" className="underline hover:no-underline">terms</Link> and{' '}
            <Link href="/privacy" className="underline hover:no-underline">privacy policy</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}
