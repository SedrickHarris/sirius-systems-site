import { ArrowUpRight } from 'lucide-react'
import { GoogleReviewsGrid } from './GoogleReviewsGrid'
import { GoogleReviewsCarousel } from './GoogleReviewsCarousel'
import { GoogleReviewSummary } from './GoogleReviewSummary'
import {
  getVerifiedReviews,
  getSummary,
  getPlaceUrl,
  hasVerifiedReviews,
} from '@/lib/google-reviews'
import { SITE } from '@/lib/site'

// Section-level orchestrator. Drop this into any page; it decides what
// to render based on whether verified review data is present.
//
//   - `variant="carousel"` for narrow / above-the-fold trust real estate
//      where visual movement helps conversion (default)
//   - `variant="grid"` for roomier, trust-heavy pages (/about, deep pages)
//
// If no verified reviews exist, this renders the neutral trust block —
// which is a positive, on-brand statement about WHY there are no reviews
// to show (we don't fake them), with a direct link to the live GBP.
//
// No Review / AggregateRating JSON-LD is emitted by this component. Schema
// only ships once docs/site-os/inputs/content-needed-from-client.md item 2.8
// (Place ID) + the do-not-invent verification process are both complete.
// See docs/seo/schema-plan.md §8.
export function GoogleReviewsSection({
  variant = 'carousel',
  label = 'Customer reviews',
  count,
}: {
  variant?: 'grid' | 'carousel'
  label?: string
  count?: number
}) {
  if (!hasVerifiedReviews()) {
    return <NeutralTrustFallback />
  }

  const all = getVerifiedReviews()
  const reviews = count ? all.slice(0, count) : all
  const summary = getSummary()
  const placeUrl = getPlaceUrl()

  return (
    <div>
      {summary && (
        <div className="mb-8">
          <GoogleReviewSummary summary={summary} placeUrl={placeUrl} />
        </div>
      )}
      {variant === 'carousel' ? (
        <GoogleReviewsCarousel reviews={reviews} label={label} />
      ) : (
        <GoogleReviewsGrid reviews={reviews} label={label} />
      )}
    </div>
  )
}

// Renders when no verified reviews are available. Per do-not-invent rules:
// no fake testimonials, no "rated 5/5" placeholder, no "loading...". Instead
// a positive statement that explains why this space is empty and points to
// the real GBP for visitors who want to read existing Google reviews directly.
function NeutralTrustFallback() {
  return (
    <div className="card relative overflow-hidden p-7 md:p-9">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative">
        <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
          About reviews on this site
        </div>
        <h3 className="mt-4 max-w-2xl font-display text-2xl leading-tight tracking-tight md:text-3xl">
          We don&rsquo;t show reviews until they&rsquo;re real, verified, and the
          reviewer has agreed to be quoted.
        </h3>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          When our Google Business Profile is connected, this section fills in
          with actual reviews &mdash; pulled live, dated, and linked to the
          source. Until then it stays empty on purpose: no invented testimonials,
          no stock-photo &ldquo;clients,&rdquo; no &ldquo;representative&rdquo; quotes.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          You can see the {SITE.name} Google Business Profile directly &mdash;
          that&rsquo;s the same data this section will surface once we&rsquo;re
          cleared to publish.
        </p>
        <a
          href={SITE.social.gbp}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm text-foreground link-underline"
        >
          {SITE.name} on Google
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </div>
  )
}
