import { Star, ArrowUpRight } from 'lucide-react'
import type { ReviewsSummary } from '@/lib/google-reviews'

// Compact aggregate rating block. Renders ONLY when the gating layer
// (lib/google-reviews.ts) has returned a real summary. We never display
// placeholder rating numbers.
export function GoogleReviewSummary({
  summary,
  placeUrl,
}: {
  summary: ReviewsSummary
  placeUrl?: string | null
}) {
  const display = summary.averageRating.toFixed(1)
  const filled = Math.round(summary.averageRating)
  const updated = new Date(summary.lastFetchedAt)
  const updatedLabel = Number.isNaN(updated.getTime())
    ? null
    : updated.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })

  return (
    <div className="card flex flex-wrap items-center gap-x-6 gap-y-4 p-5 md:p-6">
      <div>
        <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {display}
        </p>
        <div
          className="mt-1.5 flex gap-0.5"
          aria-label={`${display} out of 5 average`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              aria-hidden
              className={
                i < filled
                  ? 'h-3.5 w-3.5 fill-accent text-accent'
                  : 'h-3.5 w-3.5 text-border-strong'
              }
            />
          ))}
        </div>
      </div>

      <div className="border-l border-border pl-6">
        <p className="text-sm text-foreground/90">
          {summary.totalReviewCount}{' '}
          {summary.totalReviewCount === 1 ? 'review' : 'reviews'} on{' '}
          <span className="font-medium">Google</span>
        </p>
        {updatedLabel && (
          <p className="mt-1 text-xs text-muted">
            Updated {updatedLabel}
          </p>
        )}
      </div>

      {placeUrl && (
        <a
          href={placeUrl}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-fast ease-out-soft hover:text-foreground"
        >
          View on Google
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      )}
    </div>
  )
}
