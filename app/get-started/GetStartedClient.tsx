'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, CreditCard, ClipboardList, Rocket, ShieldCheck } from 'lucide-react'
import { resolveVertical } from '@/lib/verticals'

// Client half of /get-started (doc §7.3). Bridges the post-sales-call moment to
// GHL SaaS checkout. Sent by the salesperson at close; vertical via `?v=`.
//
// GHL-007 (Accepted): checkout is GHL SaaS V1 with Stripe. Each vertical's
// hosted-checkout (sale) link lives on `vertical.checkoutUrl` (lib/verticals.ts);
// paste it there and the button goes live. Until then this renders a placeholder.
// Card details are collected on GHL's hosted checkout, never on our page
// (doc §16 criterion 5). Cancellation/refund copy still tracks COPY-001/AGY-005.

export function GetStartedClient() {
  const params = useSearchParams()
  const vertical = resolveVertical(params.get('v'))
  const productName = vertical ? vertical.product : 'Growth System'

  const checkoutHref = vertical?.checkoutUrl ?? ''

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

          {/*
            Required checkout disclosures per doc 28 §7.1 / §12: shown ABOVE the
            payment CTA, visible (not collapsed), linking Terms + Privacy.
            NOTE: doc 28 marks this wording a working draft pending legal review
            (§13-3) — finalize the copy with counsel before checkout goes live.
          */}
          <div className="mt-8 space-y-3 rounded-xl border border-white/10 bg-black/20 px-5 py-5 text-xs leading-relaxed text-white/70">
            <p>
              Implementation begins upon receipt of your completed onboarding
              information. The first month&rsquo;s subscription fee ($297) is
              non-refundable once onboarding begins.
            </p>
            <p>
              Usage-based charges for text messages, calls, and emails are billed
              separately based on actual volume at cost plus 20%. You will receive
              a usage estimate during onboarding before anything goes live.
            </p>
            <p>
              This is a month-to-month subscription. Cancel anytime. Cancellation
              takes effect at the end of the current billing period.
            </p>
            <p>
              When your subscription ends, website hosting ends. You may purchase a
              static website export for $597 or continue on a hosting-only plan at
              $79/month. Your domain and customer data remain yours.
            </p>
            <p>
              The website template, automation system, and managed infrastructure
              are Sirius Systems intellectual property and are not transferred at
              cancellation.
            </p>
            <p>
              Results depend on your market, availability, reputation, and how
              actively your business engages with incoming opportunities. We do not
              guarantee leads, booked jobs, rankings, revenue, or response times.
            </p>
            <p className="text-white/85">
              By completing checkout you agree to our{' '}
              <Link href="/terms" className="underline hover:no-underline">Terms of Service</Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline hover:no-underline">Privacy Policy</Link>.
            </p>
          </div>

          {checkoutHref ? (
            <Link href={checkoutHref} className="btn-primary mt-6 w-full justify-center">
              Continue to secure checkout
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          ) : (
            <div className="mt-6 rounded-xl border border-dashed border-white/20 bg-black/30 px-5 py-4 text-center text-xs text-white/55">
              Secure GHL SaaS checkout link goes here (GHL-007). Card details are
              collected on GHL&rsquo;s hosted checkout — never on this page.
            </div>
          )}

          <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/50">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            Secure checkout via Stripe. We never collect card details on this page.
          </p>
        </div>
      </section>
    </main>
  )
}
