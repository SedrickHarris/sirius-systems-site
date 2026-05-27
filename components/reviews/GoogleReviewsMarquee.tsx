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
  const reduced = useReducedMotion()

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

  const doubled = [...reviews, ...reviews]

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
        {doubled.map((r, i) => (
          <div
            key={`${r.id}-${i}`}
            aria-hidden={i >= reviews.length}
            className="w-[320px] shrink-0"
          >
            <GoogleReviewCard review={r} />
          </div>
        ))}
      </div>
    </div>
  )
}
