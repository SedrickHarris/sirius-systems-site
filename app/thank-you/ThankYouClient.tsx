'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, CalendarCheck } from 'lucide-react'
import { resolveVertical } from '@/lib/verticals'

// Client half of /thank-you (doc §7.4). Confirms the booking and hands the
// prospect the VSSL link, carrying the vertical through via `?v=`. Falls back
// to a generic state when the parameter is missing (doc §9.3).

export function ThankYouClient() {
  const params = useSearchParams()
  const vertical = resolveVertical(params.get('v'))
  const watchHref = vertical ? `/watch?v=${vertical.key}` : '/watch'

  return (
    <main className="section-deep section-padding min-h-screen">
      <section className="site-container">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center md:p-12">
          <span
            aria-hidden
            className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--blue-system)]/15 text-[color:var(--blue-light)]"
          >
            <CalendarCheck className="h-7 w-7" />
          </span>
          <h1 className="mt-6 hero-heading">You&rsquo;re booked — here&rsquo;s what to do before your call</h1>
          <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
            Check your text messages and email for your appointment details and a
            calendar invite. Before we talk, watch the short video below — it shows
            exactly what we build, so the call is time well spent.
          </p>

          <Link href={watchHref} className="btn-primary mt-8">
            Watch this 5-minute video before we talk
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>

          <p className="mt-8 text-sm leading-relaxed text-white/60">
            This is not a hard sell. We look at how leads reach you today, where
            they slip, and whether the system is a fit. If it isn&rsquo;t, you still
            leave knowing where your follow-up is leaking.
          </p>
        </div>
      </section>
    </main>
  )
}
