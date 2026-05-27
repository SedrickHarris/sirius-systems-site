'use client'

import { useEffect, useRef, useState } from 'react'
import { GoogleReviewCard } from './GoogleReviewCard'
import type { Review } from '@/lib/google-reviews'

// Continuous left-scroll marquee of verified review cards.
//
// Pattern: render the reviews array twice and translate the track by -50%
// in a linear loop, so as soon as the duplicate half scrolls into the
// original's starting position the animation seamlessly restarts.
//
// Accessibility / motion:
//   - prefers-reduced-motion: render a plain horizontal scroll row, no
//     animation, no duplicated cards.
//   - pause-on-hover: toggled via ref-driven animationPlayState (avoids
//     re-rendering on every mouseenter/leave).
//   - duplicated cards are marked aria-hidden so screen readers see each
//     review exactly once.
//
// Brand: motion-guidelines.md §4 disallows marquees by default. This use
// is the approved exception — verified GBP reviews (not fake logos),
// pause-on-hover, full reduced-motion fallback.

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export function GoogleReviewsMarquee({
  reviews,
  label = 'Customer reviews',
}: {
  reviews: Review[]
  label?: string
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const firstHalfRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  // Expose the true loop period to CSS as --marquee-width. The keyframe
  // animates by exactly this distance, so the duplicate half lands where
  // the original started — no visible jump.
  //
  // Period = firstHalf.offsetWidth + outerTrackGap. The outer gap matters
  // because flex `gap` is internal to the parent: it lives between the two
  // half-divs but is not included in either child's offsetWidth.
  useEffect(() => {
    if (!trackRef.current || !firstHalfRef.current) return
    const w = firstHalfRef.current.offsetWidth
    const cs = getComputedStyle(trackRef.current)
    const gap = parseFloat(cs.columnGap || cs.gap || '0') || 0
    trackRef.current.style.setProperty('--marquee-width', `${w + gap}px`)
  }, [])

  if (reviews.length === 0) return null

  if (reduced) {
    return (
      <div
        role="region"
        aria-label={label}
        className="flex gap-4 overflow-x-auto pb-3"
        style={{ scrollbarWidth: 'none' }}
      >
        {reviews.map((r) => (
          <div key={r.id} className="w-[320px] shrink-0">
            <GoogleReviewCard review={r} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      role="region"
      aria-label={label}
      className="w-full overflow-hidden"
    >
      <div
        ref={trackRef}
        className="marquee-track flex gap-5"
        onMouseEnter={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
        }}
        onMouseLeave={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
        }}
      >
        {/* First half — measured to drive --marquee-width */}
        <div ref={firstHalfRef} className="flex gap-5">
          {reviews.map((r) => (
            <div key={`${r.id}-orig`} className="w-[320px] shrink-0">
              <GoogleReviewCard review={r} />
            </div>
          ))}
        </div>
        {/* Duplicate — aria-hidden so SRs see each review once */}
        <div aria-hidden className="flex gap-5">
          {reviews.map((r) => (
            <div key={`${r.id}-dupe`} className="w-[320px] shrink-0">
              <GoogleReviewCard review={r} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
