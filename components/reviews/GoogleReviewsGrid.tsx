import { GoogleReviewCard } from './GoogleReviewCard'
import type { Review } from '@/lib/google-reviews'

// Responsive grid of review cards. Use on roomy, trust-heavy pages
// (e.g. /about, full landing pages) where vertical space is OK.
export function GoogleReviewsGrid({
  reviews,
  label = 'Customer reviews',
}: {
  reviews: Review[]
  label?: string
}) {
  if (reviews.length === 0) return null
  return (
    <div
      role="region"
      aria-label={label}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {reviews.map((review) => (
        <GoogleReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}
