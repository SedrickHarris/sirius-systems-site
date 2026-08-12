// lib/verticals.ts
// Single source of truth for the Growth System verticals (doc 21 §3).
//
// The funnel pages (/watch, /thank-you, /get-started) are vertical-aware via a
// `?v=` query parameter (doc §9.3). This map resolves that parameter to the
// copy each page renders. Only the plumbing vertical is PUBLISHED at launch
// (doc §3, WEB-018); the rest are defined here so the funnel renders correctly
// once their product pages ship, but they are not linked or indexed yet.
//
// Per §9.3: if no valid `v` parameter is present, the page renders a generic
// default state rather than erroring — see `resolveVertical()`.

export type VerticalKey =
  | 'plumbing'
  | 'hvac'
  | 'electrical'
  | 'landscaping'
  | 'pest-control'
  | 'junk-removal'
  | 'contractor'

export type Vertical = {
  key: VerticalKey
  /** Trade noun used inline, e.g. "plumbing". */
  trade: string
  /** Product name, e.g. "Plumber Growth System". */
  product: string
  /** Product page route (no trailing slash — matches repo convention). */
  productPath: string
  /** utm_campaign value for booking CTAs (doc §9.2). */
  campaign: string
  /** Whether the product page is published and for sale (doc §3). */
  published: boolean
  /** VSSL headline fragment for /watch (doc §7.2). */
  watchHeadline: string
  /**
   * GHL-hosted VSSL embed URL for /watch (decision AGY-001 — GHL native video).
   * Empty/undefined → /watch renders the placeholder, never a broken embed.
   * Autoplay MUST stay disabled in the GHL embed settings (doc 21 §13).
   */
  vsslSrc?: string
  /**
   * GHL SaaS V1 direct payment (sale) link for /get-started (decision GHL-007).
   * Empty/undefined → /get-started renders the placeholder. Card details are
   * collected on GHL's hosted checkout, never on our page (doc 21 §16-5).
   */
  checkoutUrl?: string
}

export const VERTICALS: Record<VerticalKey, Vertical> = {
  plumbing: {
    key: 'plumbing',
    trade: 'plumbing',
    product: 'Plumber Growth System',
    productPath: '/plumber-growth-system',
    campaign: 'plumber-growth-system',
    published: true,
    watchHeadline: "Here's exactly what we build for plumbing companies",
    // TODO(AGY-001): paste the GHL native video embed URL for the plumbing VSSL.
    vsslSrc: '',
    // TODO(GHL-007): paste the GHL SaaS V1 sale/payment link for the $297 plan.
    checkoutUrl: '',
  },
  hvac: {
    key: 'hvac',
    trade: 'HVAC',
    product: 'HVAC Growth System',
    productPath: '/hvac-growth-system',
    campaign: 'hvac-growth-system',
    published: false,
    watchHeadline: "Here's exactly what we build for HVAC companies",
  },
  electrical: {
    key: 'electrical',
    trade: 'electrical',
    product: 'Electrician Growth System',
    productPath: '/electrician-growth-system',
    campaign: 'electrician-growth-system',
    published: false,
    watchHeadline: "Here's exactly what we build for electrical companies",
  },
  landscaping: {
    key: 'landscaping',
    trade: 'landscaping',
    product: 'Landscaper Growth System',
    productPath: '/landscaper-growth-system',
    campaign: 'landscaper-growth-system',
    published: false,
    watchHeadline: "Here's exactly what we build for landscaping companies",
  },
  'pest-control': {
    key: 'pest-control',
    trade: 'pest control',
    product: 'Pest Control Growth System',
    productPath: '/pest-control-growth-system',
    campaign: 'pest-control-growth-system',
    published: false,
    watchHeadline: "Here's exactly what we build for pest control companies",
  },
  'junk-removal': {
    key: 'junk-removal',
    trade: 'junk removal',
    product: 'Junk Removal Growth System',
    productPath: '/junk-removal-growth-system',
    campaign: 'junk-removal-growth-system',
    published: false,
    watchHeadline: "Here's exactly what we build for junk removal companies",
  },
  contractor: {
    key: 'contractor',
    trade: 'contracting',
    product: 'Contractor Growth System',
    productPath: '/contractor-growth-system',
    campaign: 'contractor-growth-system',
    published: false,
    watchHeadline: "Here's exactly what we build for contracting companies",
  },
}

/** Published verticals, in the dropdown order defined in doc §5.3. */
export const PUBLISHED_VERTICALS: Vertical[] = [
  'plumbing',
  'hvac',
  'electrical',
  'landscaping',
  'pest-control',
  'junk-removal',
  'contractor',
]
  .map((k) => VERTICALS[k as VerticalKey])
  .filter((v) => v.published)

/**
 * Resolve a raw `?v=` value to a Vertical, or `null` when absent/invalid so the
 * caller can render the generic default state (doc §9.3). Never throws.
 */
export function resolveVertical(raw: string | null | undefined): Vertical | null {
  if (!raw) return null
  return VERTICALS[raw as VerticalKey] ?? null
}
