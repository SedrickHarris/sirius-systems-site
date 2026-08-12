'use client'

import { useSearchParams } from 'next/navigation'
import { CalendarPlus, PlayCircle } from 'lucide-react'
import { resolveVertical } from '@/lib/verticals'

// Client half of /watch. Reads the `?v=` vertical parameter (doc §9.3) and
// renders the matching VSSL copy. Falls back to a generic state when the
// parameter is absent or unrecognized — never errors.
//
// AGY-001 (Accepted): the VSSL is hosted on GHL native video. Each vertical's
// embed URL lives on `vertical.vsslSrc` (lib/verticals.ts). When it's set we
// render the GHL iframe; until then a placeholder shows. The iframe `allow`
// list deliberately omits `autoplay` — playback is user-initiated (doc §13).

export function WatchClient() {
  const params = useSearchParams()
  const vertical = resolveVertical(params.get('v'))

  const headline = vertical
    ? vertical.watchHeadline
    : "Here's exactly what we build for local service companies"

  const summary = vertical
    ? `The ${vertical.trade} Growth System is a professionally managed website with immediate lead follow-up for $297/month — no setup fee, month-to-month. The short video above walks through exactly how it works.`
    : 'The Growth System is a professionally managed website with immediate lead follow-up for $297/month — no setup fee, month-to-month. The short video above walks through exactly how it works.'

  return (
    <main className="section-deep section-padding min-h-screen">
      <section className="site-container">
        <div className="content-medium text-center">
          <span className="section-eyebrow">Watch this first</span>
          <h1 className="mt-6 hero-heading">{headline}</h1>
        </div>

        {/* VSSL player — user-initiated only, no autoplay (doc §13). */}
        <div className="mx-auto mt-12 aspect-video max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-black">
          {vertical?.vsslSrc ? (
            <iframe
              src={vertical.vsslSrc}
              title={`${vertical.product} overview video`}
              className="h-full w-full border-none"
              // No `autoplay` in the allow list — playback is user-initiated (doc §13).
              allow="fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 border border-dashed border-white/15 text-center text-white/60">
              <PlayCircle className="h-14 w-14 text-white/40" aria-hidden />
              <p className="px-8 text-sm">
                VSSL video goes here (AGY-001 — GHL native). Set the vertical&rsquo;s
                <code className="mx-1">vsslSrc</code>; autoplay stays disabled.
              </p>
            </div>
          )}
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-base leading-relaxed text-white/75">{summary}</p>
          <div className="mt-8">
            <a href="#add-to-calendar" className="btn-ghost">
              <CalendarPlus className="h-4 w-4" aria-hidden />
              Add your call to your calendar
            </a>
          </div>
          <p className="mt-6 text-xs text-white/45">
            You already have a call booked — no need to book again. We do not
            guarantee leads, rankings, revenue, or jobs.
          </p>
        </div>
      </section>
    </main>
  )
}
