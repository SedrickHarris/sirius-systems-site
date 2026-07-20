import type { Metadata } from 'next'
import Script from 'next/script'
import { ShieldCheck } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// /book — Growth System sales calendar (doc 21 §7.1).
//
// Dedicated to Growth System prospects and kept SEPARATE from /contact and
// /booking so productized-sales leads and general agency leads never enter the
// same GHL pipeline (doc WEB-015). noindex, not in nav, not in sitemap (§11).
//
// UTM parameters arrive on the query string from the product-page CTA
// (…?utm_source=product-page&utm_medium=cta&utm_campaign=plumber-growth-system)
// and are captured by GHL's own tracking on the embedded calendar. No client
// JS is needed on our side to read them.
//
// OPEN DECISION AGY-004: the Growth System sales calendar embed URL is not yet
// finalized. The placeholder below is where that GHL calendar iframe goes —
// it MUST be a distinct calendar from the /booking discovery calendar.
// ─────────────────────────────────────────────────────────────────────────────

const GROWTH_SYSTEM_CALENDAR_SRC = '' // TODO(AGY-004): GHL sales calendar embed URL

export const metadata: Metadata = {
  title: 'Book Your Growth System Call | Sirius Systems',
  description:
    'Pick a time for your 15-minute Growth System call with Sirius Systems.',
  alternates: { canonical: '/book' },
  robots: { index: false, follow: false },
}

export default function BookPage() {
  return (
    <main className="section-deep section-padding min-h-screen">
      <section className="site-container">
        <div className="content-medium text-center">
          <span className="section-eyebrow">Book your call</span>
          <h1 className="mt-6 hero-heading">Pick a time for your 15-minute call.</h1>
          <p className="mt-6 hero-copy mx-auto">
            This is a short, no-pressure conversation about how your Growth System
            would work for your business. Choose a time below and you&rsquo;re set.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-4 md:p-6">
          {GROWTH_SYSTEM_CALENDAR_SRC ? (
            <>
              <iframe
                src={GROWTH_SYSTEM_CALENDAR_SRC}
                title="Growth System booking calendar"
                className="block w-full rounded-2xl border-none"
                style={{ height: 900, background: '#050505' }}
                scrolling="no"
              />
              <Script
                src="https://link.siriussys.io/js/form_embed.js"
                strategy="afterInteractive"
              />
            </>
          ) : (
            <div className="flex min-h-[560px] items-center justify-center rounded-2xl border border-dashed border-white/20 bg-black/40 p-8 text-center text-sm text-white/60">
              Growth System sales calendar embed goes here (GHL — AGY-004).
              <br />
              Must be a separate calendar from the /booking discovery calendar so
              the sales pipeline stays clean.
            </div>
          )}
        </div>

        <p className="mt-6 inline-flex w-full items-center justify-center gap-2 text-xs text-white/55">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
          15 minutes · no obligation · we do not guarantee leads, rankings, or jobs.
        </p>
      </section>
    </main>
  )
}
