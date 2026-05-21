// Google Business Profile review access layer.
//
// Per docs/site-os/inputs/do-not-invent-rules.md §1, §2 and
// docs/seo/schema-plan.md §8: reviews ONLY render when they're real,
// verified, and the reviewer has agreed to be published.
//
// This module is the single gate between the data file and any component.
// Every accessor returns "no data" (empty array / null) until BOTH of
// these are true at the data layer:
//
//   1. The top-level `verified` flag is `true`.
//   2. Every review object carries `verified: true` AND `permissionToPublish: true`.
//
// If either check fails, components fall back to a neutral trust section.
// We never approximate, never "represent", never fill with placeholders.
// See data/google-reviews.json for the file this reads.

import raw from '@/data/google-reviews.json'

export type ReviewSource = 'google-business-profile'

export type Review = {
  /** Stable Google review identifier, used for React keys + dedup. */
  id: string
  /** Reviewer's display name as they wrote it (first name + last initial is typical). */
  authorName: string
  /** Optional override for the avatar initial; defaults to authorName[0]. */
  authorInitial?: string
  /** 1 to 5 integer rating. */
  rating: 1 | 2 | 3 | 4 | 5
  /** Exact review body text. Do not paraphrase. */
  text: string
  /** ISO date the review was posted on Google. */
  reviewedAt: string
  /** BCP-47 language tag. Defaults to en. */
  language?: string
  /** Must be `true` to render. Set by the verification pipeline. */
  verified: true
  /** Must be `true` to render. Reviewer-level publishing consent. */
  permissionToPublish: true
  /** Deep-link back to the review on Google, when available. */
  sourceUrl?: string
}

export type ReviewsSummary = {
  averageRating: number
  totalReviewCount: number
  lastFetchedAt: string
}

export type ReviewsData = {
  verified: boolean
  lastVerifiedAt: string | null
  source: ReviewSource
  placeId: string | null
  placeUrl: string | null
  summary: {
    averageRating: number | null
    totalReviewCount: number | null
    lastFetchedAt: string | null
  } | null
  reviews: Review[]
}

const data: ReviewsData = raw as ReviewsData

/**
 * True only when the file is marked verified AND there is at least one
 * fully-permissioned review. Components MUST check this before rendering
 * any review content. The neutral fallback is the correct answer otherwise.
 */
export function hasVerifiedReviews(): boolean {
  if (!data.verified) return false
  if (!Array.isArray(data.reviews) || data.reviews.length === 0) return false
  return data.reviews.every(
    (r) => r.verified === true && r.permissionToPublish === true,
  )
}

/** Returns verified reviews only, or an empty array. */
export function getVerifiedReviews(): Review[] {
  if (!hasVerifiedReviews()) return []
  return data.reviews
}

/** Returns the summary block only when it is complete and reviews are verified. */
export function getSummary(): ReviewsSummary | null {
  if (!hasVerifiedReviews()) return null
  const s = data.summary
  if (
    !s ||
    s.averageRating == null ||
    s.totalReviewCount == null ||
    s.lastFetchedAt == null
  ) {
    return null
  }
  return {
    averageRating: s.averageRating,
    totalReviewCount: s.totalReviewCount,
    lastFetchedAt: s.lastFetchedAt,
  }
}

/** Public URL of the Google Business Profile (used as a "view on Google" link). */
export function getPlaceUrl(): string | null {
  return data.placeUrl
}
