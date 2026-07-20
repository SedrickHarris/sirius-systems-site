// lib/funnel-config.ts
// Shared, non-per-vertical config for the Growth System sales funnel.
//
// The PLATFORMS are decided; the concrete embed IDs/links are produced by the
// GHL setup (creating the calendar, plan, and uploading the video) and get
// pasted in here. Until a value is non-empty, the consuming page renders its
// placeholder state — never a broken embed pointing real prospects nowhere.
//
// Per-vertical values (VSSL video, checkout link) live on the Vertical model in
// lib/verticals.ts. This file holds only values shared across the funnel.

/**
 * GHL sales-calendar embed URL for /book (decision AGY-004 — personal GHL
 * calendar "Plumber Growth System — Sales Call", 15-min, auto-confirm).
 *
 * Format (mirrors the existing /booking discovery embed):
 *   https://link.siriussys.io/widget/booking/<CALENDAR_ID>
 *
 * MUST be a DIFFERENT calendar than the /booking discovery calendar
 * (Qn4ugo4iZ8ZJ8eaxX1c4) — reusing it would merge the sales and general
 * pipelines and defeat decision WEB-015.
 *
 * Booking form fields to configure in GHL (AGY-004): first name, last name,
 * email, phone, business name, city/primary market, how-did-you-hear (optional).
 */
export const SALES_CALENDAR_SRC = '' // TODO(AGY-004): GHL sales calendar widget URL
