'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { GoogleReviewCard } from './GoogleReviewCard'
import type { Review } from '@/lib/google-reviews'

// Accessible scroll-snap carousel.
//
// Built on native overflow-x scroll-snap so:
//   - Mobile gets touch swipe for free.
//   - Keyboard users get arrow-key scrolling for free (focus the region, use ← →).
//   - Screen readers get a labeled region with slide roles.
//   - prefers-reduced-motion users get instant scroll (the browser honors
//     scroll-behavior:smooth against the OS setting automatically, and our
//     globals.css blanket reduced-motion rule clamps transitions).
//
// Buttons appear only when there's more than one slide. No auto-advance.
export function GoogleReviewsCarousel({
  reviews,
  label = 'Customer reviews',
}: {
  reviews: Review[]
  label?: string
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByOne = (dir: 'prev' | 'next') => {
    const container = scrollRef.current
    if (!container) return
    const slide = container.querySelector<HTMLElement>('[data-slide]')
    const slideWidth = slide?.offsetWidth ?? 320
    const gap = 16
    const delta = (slideWidth + gap) * (dir === 'next' ? 1 : -1)
    container.scrollBy({ left: delta, behavior: 'smooth' })
  }

  if (reviews.length === 0) return null

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="relative"
    >
      <div
        ref={scrollRef}
        tabIndex={0}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-3 md:-mx-8 md:px-8 lg:-mx-10 lg:px-10"
      >
        {reviews.map((review, i) => (
          <div
            key={review.id}
            data-slide
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${reviews.length}`}
            className="w-[85vw] max-w-md shrink-0 snap-start md:w-[420px]"
          >
            <GoogleReviewCard review={review} />
          </div>
        ))}
      </div>

      {reviews.length > 1 && (
        <div className="mt-6 flex items-center justify-between gap-4">
          <p
            className="font-mono text-[11px] uppercase tracking-eyebrow text-muted"
            aria-hidden
          >
            {reviews.length} reviews · swipe or use arrow keys
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => scrollByOne('prev')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground/85 transition-colors duration-fast ease-out-soft hover:border-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => scrollByOne('next')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground/85 transition-colors duration-fast ease-out-soft hover:border-foreground hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
