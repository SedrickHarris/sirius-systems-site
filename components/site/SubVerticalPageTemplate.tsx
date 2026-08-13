import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { FAQ } from './FAQ'
import { Breadcrumbs } from './Breadcrumbs'
import { SERVICES } from '@/lib/services'
import type { QA } from '@/lib/faq'

// Shared template behind every sub-vertical page.
// URL pattern: /industries/[hub-slug]/for/[sub-vertical-slug]
// (`for` is a reserved routing segment with no page of its own — see
// site-build-plan.md §4 Phase 8. It gets no breadcrumb.)
//
// Section rhythm — deliberately NOT the hub or intersection spine:
//   S00 deep hero (single column, no glass aside)
//   S01 slate operating reality (3 panels — how this trade actually runs)
//   S02 light leak timeline (3 moment → consequence pairs)
//   S03 soft priority stack (3 services in adoption order FOR THIS TRADE)
//   S04 light competitor band (one statement: who wins when you lose)
//   S05 soft FAQ (exactly 5, trade-phrased)
//   S06 light siblings + hub links
//   S07 light section wrapping cta-deep panel
//
// WHY THIS SPINE, AND NOT A SMALLER INTERSECTION PAGE:
// A hub page answers "what do you do for my industry." An intersection page
// answers "what does one service do for my industry." A sub-vertical page has
// a different job: it has to convince one specific trade that we understand
// how their business actually runs before we sell them anything. So the first
// content block after the hero is not a definition and not a pitch — it is
// this trade's operating reality. Everything downstream is derived from it:
// the leaks are timing failures inside that rhythm, and the service priority
// is ranked by which leak costs this trade the most.
//
// DOORWAY-PAGE RESISTANCE IS A TYPE-LEVEL CONCERN HERE.
// 183 sub-vertical pages under 12 hubs, all selling the same 14 services,
// is the exact shape that produces doorway pages — which
// topical-authority-plan.md §8 forbids outright. The interface below is
// built so that a page CANNOT be produced by copying a sibling and swapping
// the trade name: every required field asks for something that is factually
// different per trade (demand trigger, urgency window, job rhythm, who you
// lose to), not a rephrasing of the same claim. Counts are tuples, not
// arrays, so `tsc` rejects a short or padded section instead of letting it
// through to review. See the Phase 8 content-brief checklist in
// site-build-plan.md for the per-field review gates.
//
// Schema emitted by the page file (not this template):
//   WebPage + BreadcrumbList (4-item) + Service + FAQPage
//
// Do-not-invent rules apply in full. This template renders only what the
// page data file provides. It invents nothing.

/** A timing failure inside this trade's job cycle. */
export interface SubVerticalLeak {
  /** A named point in THIS trade's job cycle — not a generic stage. */
  moment: string
  /** What it costs when the moment passes unhandled. */
  consequence: string
}

/** One service, ranked by adoption order for this specific trade. */
export interface SubVerticalPriority {
  /** Must exist in lib/services.ts. Unknown slugs are skipped, not crashed. */
  slug: string
  /** Why THIS trade fixes this one at this rank. Trade-specific, not generic. */
  why: string
}

/** How this trade's business actually runs. The anti-doorway core. */
export interface SubVerticalOperatingReality {
  /** The event that makes a customer need this trade today. */
  demandTrigger: string
  /** How long the buyer shops before choosing, and why that window is that long. */
  urgencyWindow: string
  /** One-off, recurring, seasonal, or project — described in this trade's terms. */
  jobRhythm: string
}

export interface SubVerticalPageData {
  // Routing — drives breadcrumbs, canonical, and schema in the page file
  hubSlug:         string   // e.g. 'home-services'
  hubName:         string   // e.g. 'Home Services'
  subVerticalSlug: string   // e.g. 'plumbing'
  subVerticalName: string   // e.g. 'Plumbing'

  // Metadata — owned by the page file, mirrored here for consistency
  metaTitle:       string
  metaDescription: string

  // S00 Hero
  eyebrow:     string
  headline:    string   // single H1, sentence case, no trailing punctuation
  subheadline: string

  // S01 Operating reality — required, and the reason this page is not a doorway
  operatingReality: SubVerticalOperatingReality

  // S02 Leak timeline — exactly 3, enforced by tuple type
  leakHeadline: string
  leaks: [SubVerticalLeak, SubVerticalLeak, SubVerticalLeak]

  // S03 Priority stack — exactly 3, in adoption order, enforced by tuple type
  priorityHeadline?: string
  servicePriority: [SubVerticalPriority, SubVerticalPriority, SubVerticalPriority]

  // S04 Competitor band — who actually takes the job when this trade loses it
  losingTo: string

  // S05 FAQ — exactly 5. Same array drives this render AND the FAQPage JSON-LD.
  faqs: [QA, QA, QA, QA, QA]

  // S06 Sibling sub-verticals in the same hub. Omit until siblings ship.
  siblings?: { name: string; slug: string }[]

  // S06 Capstone pointer to the umbrella offer. Deliberately NOT a fourth
  // servicePriority entry: servicePriority is a reasoned, leak-tied ranking of
  // what to fix first, and adding a general link to it would dilute that into a
  // link list. This renders separately and subordinately, near the CTA.
  // `slug` must exist in lib/services.ts. `label` overrides the display name;
  // omit it to use the catalog name, and never hardcode copy that duplicates
  // the catalog.
  capstoneLink?: {
    slug:   string
    label?: string
  }

  // S07 CTA
  ctaHeadline?:     string
  ctaBody?:         string
  ctaPrimaryLabel?: string
}

export function SubVerticalPageTemplate(data: SubVerticalPageData) {
  const basePath = `/industries/${data.hubSlug}/for/${data.subVerticalSlug}`

  // Resolve ranked slugs against the canonical catalog. Unknown slugs drop out
  // rather than crash, matching RelatedServicesGrid's behavior.
  const ranked = data.servicePriority
    .map((p) => {
      const service = SERVICES.find((s) => s.slug === p.slug)
      return service ? { ...p, service } : null
    })
    .filter((p): p is NonNullable<typeof p> => p !== null)

  // Capstone link resolves against the same canonical catalog, but its failure
  // mode is deliberately the opposite of servicePriority's. servicePriority
  // skips unknown slugs so that editing the catalog cannot break a shipped page.
  // capstoneLink is optional, so the only reason it is present at all is that an
  // author meant to link something: silently dropping it would hide the mistake.
  // Throwing surfaces the typo during `next build`. Every page using this
  // template is statically prerendered, so this can never reach a visitor.
  const capstoneField = data.capstoneLink
  let capstone: { href: string; label: string; oneLiner: string } | null = null
  if (capstoneField) {
    const service = SERVICES.find((s) => s.slug === capstoneField.slug)
    if (!service) {
      throw new Error(
        `SubVerticalPageTemplate: capstoneLink.slug "${capstoneField.slug}" does not exist in lib/services.ts. ` +
          `Page: ${basePath}. Fix the slug or remove capstoneLink.`
      )
    }
    capstone = {
      href:     `/${service.slug}`,
      label:    capstoneField.label ?? service.name,
      oneLiner: service.oneLiner,
    }
  }

  const reality: { label: string; body: string }[] = [
    { label: 'What starts the job', body: data.operatingReality.demandTrigger },
    { label: 'How long you have',   body: data.operatingReality.urgencyWindow },
    { label: 'How the work repeats', body: data.operatingReality.jobRhythm },
  ]

  return (
    <>
      {/* ── S00: Hero (deep, single column — no glass aside, unlike the hub
             and intersection heroes, so this page does not read as a third
             variant of the same layout) ── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <div className="content-medium">
            <Breadcrumbs
              className="mb-6"
              trail={[
                { name: 'Home', url: '/' },
                { name: 'Industries', url: '/industries' },
                { name: data.hubName, url: `/industries/${data.hubSlug}` },
                { name: data.subVerticalName, url: basePath },
              ]}
            />
            <span className="section-eyebrow">{data.eyebrow}</span>
            <h1 className="mt-6 hero-heading">{data.headline}</h1>
            <p className="mt-7 hero-copy">{data.subheadline}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                {data.ctaPrimaryLabel ?? 'Get a Free Audit'}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={`/industries/${data.hubSlug}`} className="btn-ghost">
                {data.hubName} Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── S01: Operating reality (slate — continues the dark band rather
             than cutting to light, which is what both other templates do).
             This block runs BEFORE any pitch on purpose: the page has to
             show it understands the trade before it sells to the trade. ── */}
      <section className="section-slate section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">How {data.subVerticalName.toLowerCase()} actually runs</span>
            <h2 className="mt-5 section-heading">
              The system has to fit the way the work already happens
            </h2>
          </div>
          <dl className="mt-12 grid gap-8 md:grid-cols-3">
            {reality.map((item, i) => (
              <div key={item.label} className="flex gap-5">
                <span aria-hidden className="system-node shrink-0">
                  {i + 1}
                </span>
                <div>
                  <dt className="font-display text-base font-semibold leading-snug text-white md:text-lg">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">
                    {item.body}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── S02: Leak timeline (light). Moment → consequence, not a flat
             bullet grid: a trade's revenue leak is a timing failure, so it
             renders on a spine that reads as a sequence. ── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Where the money goes</span>
            <h2 className="mt-5 section-heading">{data.leakHeadline}</h2>
          </div>
          <ol className="mt-12 border-l-2 border-[color:var(--blue-system)] pl-6 md:pl-8">
            {data.leaks.map((leak) => (
              <li key={leak.moment} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[calc(1.5rem+5px)] top-2 inline-block h-2 w-2 rounded-full bg-[color:var(--blue-system)] md:-left-[calc(2rem+5px)]"
                />
                <h3 className="card-title">{leak.moment}</h3>
                <p className="mt-2 card-copy text-[color:var(--text-charcoal)]">
                  {leak.consequence}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── S03: Priority stack (soft). Ranked adoption order for THIS trade,
             not a flat related-services grid: which leak to close first is
             the actual advice, and it differs per trade. ── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Fix this first</span>
            <h2 className="mt-5 section-heading">
              {data.priorityHeadline ??
                `The order to build it for a ${data.subVerticalName.toLowerCase()} business`}
            </h2>
          </div>
          <ol className="mt-12 grid gap-4">
            {ranked.map((item, i) => (
              <li key={item.slug} className="card-solid flex items-start gap-5 p-6">
                <span aria-hidden className="system-node shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="card-title">
                    <Link href={`/${item.slug}`} className="hover:underline">
                      {item.service.name}
                    </Link>
                  </h3>
                  <p className="mt-2 card-copy text-[color:var(--text-charcoal)]">
                    {item.why}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── S04: Competitor band (light, narrow). One statement, high
             contrast. Names who takes the job when this trade loses it. ── */}
      <section className="section-light section-padding-sm">
        <div className="site-container">
          <div className="content-medium border-l-2 border-[color:var(--accent-teal)] pl-6">
            <span className="section-eyebrow">Who gets the job instead</span>
            <p className="mt-5 section-copy">{data.losingTo}</p>
          </div>
        </div>
      </section>

      {/* ── S05: FAQ (soft)
             CRITICAL: data.faqs drives both this visible render and the
             FAQPage JSON-LD emitted by the page file. Same array. ── */}
      <section className="section-soft section-padding">
        <div className="site-container grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="mt-5 section-heading">Common questions</h2>
          </div>
          <FAQ items={data.faqs} />
        </div>
      </section>

      {/* ── S06: Siblings + hub (light). Renders only what ships. ── */}
      <section className="section-light section-padding">
        <div className="site-container">
          {data.siblings && data.siblings.length > 0 && (
            <>
              <div className="content-medium">
                <span className="section-eyebrow">Related trades</span>
                <h2 className="mt-5 section-heading">
                  Other {data.hubName.toLowerCase()} businesses we build for
                </h2>
              </div>
              <ul className="mt-10 flex flex-wrap gap-3">
                {data.siblings.map((sib) => (
                  <li key={sib.slug}>
                    <Link
                      href={`/industries/${data.hubSlug}/for/${sib.slug}`}
                      className="card-subtle inline-flex items-center gap-2 px-4 py-2 text-sm"
                    >
                      {sib.name}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          {/* Capstone pointer. Intentionally plain: no system-node numbering,
              no card-solid, no ranking. It must not read as a fourth ranked
              fix. Name and target both come from lib/services.ts. */}
          {capstone && (
            <div className="mt-10 content-medium">
              <Link
                href={capstone.href}
                className="card-subtle group flex items-start justify-between gap-4 p-5"
              >
                <span>
                  <span className="font-display text-base leading-snug tracking-tight">
                    {capstone.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {capstone.oneLiner}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform duration-fast ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  aria-hidden
                />
              </Link>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-6">
            <Link href={`/industries/${data.hubSlug}`} className="btn-link">
              Back to {data.hubName}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link href="/services" className="btn-link">
              See the full service catalog
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── S07: Final CTA (light wrapping cta-deep — site-wide pattern,
             deliberately unchanged) ── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="cta-deep">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              Ready when you are
            </span>
            <h2 className="mt-5 section-heading max-w-3xl text-balance">
              {data.ctaHeadline ?? 'Book a 20-minute revenue leak audit.'}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {data.ctaBody ??
                'We will map where leads, reviews, or follow-up are leaking and show you the order of operations to fix it. Walk away with the plan whether or not we work together.'}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                {data.ctaPrimaryLabel ?? 'Get a Free Audit'}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={`/industries/${data.hubSlug}`} className="btn-ghost">
                {data.hubName} Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
