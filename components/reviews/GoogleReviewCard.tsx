import { Star, ArrowUpRight } from 'lucide-react'
import type { Review } from '@/lib/google-reviews'

// Single Google review card. Never renders unless caller passes a verified
// Review: gating lives in lib/google-reviews.ts and GoogleReviewsSection.
export function GoogleReviewCard({ review }: { review: Review }) {
  const initial =
    review.authorInitial ?? review.authorName.charAt(0).toUpperCase()
  const date = formatDate(review.reviewedAt)

  return (
    <article className="card flex flex-col p-6 md:p-7">
      <header className="flex items-start gap-3">
        <div
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface-2 font-display text-sm font-semibold text-foreground"
        >
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-base leading-tight tracking-tight">
            {review.authorName}
          </p>
          <p className="mt-1 text-xs text-muted">{date}</p>
        </div>
        <span
          className="font-mono text-[10px] uppercase tracking-eyebrow text-muted"
          aria-label="Source: Google"
          title="Source: Google"
        >
          Google
        </span>
      </header>

      <div
        className="mt-4 flex gap-0.5"
        aria-label={`Rated ${review.rating} out of 5`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            aria-hidden
            className={
              i < review.rating
                ? 'h-4 w-4 fill-accent text-accent'
                : 'h-4 w-4 text-border-strong'
            }
          />
        ))}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90 line-clamp-8">
        {review.text}
      </p>

      {review.sourceUrl && (
        <a
          href={review.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-xs text-muted transition-colors duration-fast ease-out-soft hover:text-foreground"
        >
          View on Google
          <ArrowUpRight className="h-3 w-3" aria-hidden />
        </a>
      )}
    </article>
  )
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}
