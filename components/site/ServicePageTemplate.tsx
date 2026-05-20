import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, Zap } from 'lucide-react'
import { SectionLabel } from './SectionLabel'
import { ConstellationGlyph } from './ConstellationGlyph'
import { HowItWorksSteps } from './HowItWorksSteps'
import { RelatedServicesGrid } from './RelatedServicesGrid'
import { IndustryFitStrip } from './IndustryFitStrip'
import { FAQ } from './FAQ'
import { CTASection } from './CTASection'

// Single template that renders every service page. Each instance is just
// a `ServicePageData` object passed to this component — copy and structure
// live in the data, presentation lives here.
//
// Sections (9):
//   S00 Hero
//   S01 Definition          — AEO-quotable single paragraph
//   S02 Problem framing     — what breaks without this service
//   S03 How it works        — numbered steps
//   S04 What you get        — feature checklist
//   S05 Outcomes            — what changes for the business
//   S06 Related services    — cross-links into the catalog
//   S07 Industry fit        — chip row + inclusive fallback
//   S08 FAQ                 — visible text BYTE-IDENTICAL to FAQPage schema
//   S09 Bottom CTA          — reuses the shared CTASection

export interface ServicePageData {
  slug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  headline: string
  subheadline: string
  ctaLabel?: string
  glyphVariant: 'orbit' | 'pulse' | 'wave' | 'grid' | 'beacon' | 'arc'
  definition: string
  problemHeadline?: string
  problems: string[]
  howItWorksHeadline?: string
  steps: { label: string; body: string }[]
  featuresHeadline?: string
  features: string[]
  outcomesHeadline?: string
  outcomes: string[]
  relatedSlugs: string[]
  industryFitHeadline?: string
  industryFit: string[]
  faqs: { q: string; a: string }[]
  ctaHeadline?: string
  ctaBody?: string
  ctaSectionLabel?: string
}

export function ServicePageTemplate(data: ServicePageData) {
  return (
    <>
      {/* ───────── S00 — Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid-faint bg-grid-48 opacity-50" />
        <div className="absolute inset-0 -z-10 glow-accent" />

        <div className="container-page grid items-start gap-12 py-20 md:py-24 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <SectionLabel index="00" label={data.eyebrow} tone="accent" />

            <h1 className="mt-8 max-w-3xl text-balance font-display text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-[4.5rem]">
              {data.headline}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              {data.subheadline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                {data.ctaLabel ?? 'Book a discovery call'}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/services" className="btn-ghost">
                See all services
              </Link>
            </div>
          </div>

          {/* Visual placeholder — ConstellationGlyph in a sized surface panel,
              matching the ServiceCard image-pattern but scaled for hero presence. */}
          <aside className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface/40">
            <div className="absolute inset-0 bg-grid-faint bg-grid-32" />
            <div className="absolute inset-0 glow-accent" />
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
              <ConstellationGlyph variant={data.glyphVariant} />
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── S01 — Definition (AEO-quotable) ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="01" label="What it is" tone="muted" />
          <p className="mt-8 max-w-3xl border-l-2 border-accent/40 pl-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
            {data.definition}
          </p>
        </div>
      </section>

      {/* ───────── S02 — Problem framing ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="02" label="The problem" tone="muted" />
          <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {data.problemHeadline ?? 'What breaks without this'}
          </h2>
          <ul className="mt-10 grid max-w-3xl gap-5">
            {data.problems.map((problem) => (
              <li key={problem} className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span className="text-base leading-relaxed text-muted md:text-lg">
                  {problem}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── S03 — How it works ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="03" label="The mechanism" tone="muted" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {data.howItWorksHeadline ?? 'How it works'}
          </h2>
          <div className="mt-12">
            <HowItWorksSteps steps={data.steps} />
          </div>
        </div>
      </section>

      {/* ───────── S04 — What you get ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="04" label="Deliverables" tone="muted" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {data.featuresHeadline ?? 'What you get'}
          </h2>
          <div className="card mt-10 p-6 md:p-8">
            <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
              {data.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90 md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── S05 — Outcomes ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="05" label="Outcomes" tone="muted" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {data.outcomesHeadline ?? 'What changes'}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.outcomes.map((outcome) => (
              <article
                key={outcome}
                className="card p-6 transition-colors duration-base hover:border-border-strong"
              >
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent"
                >
                  <Zap className="h-4 w-4" />
                </span>
                <p className="mt-4 text-base leading-relaxed text-foreground/90">
                  {outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── S06 — Related services ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="06" label="Related services" tone="muted" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Part of a larger system
          </h2>
          <div className="mt-12">
            <RelatedServicesGrid slugs={data.relatedSlugs} />
          </div>
          <div className="mt-10">
            <Link
              href="/all-in-one-business-growth-system"
              className="inline-flex items-center gap-2 text-sm text-foreground link-underline"
            >
              See everything in one place
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── S07 — Industry fit ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="07" label="Who this is for" tone="muted" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {data.industryFitHeadline ?? 'Built for local service businesses'}
          </h2>
          <div className="mt-10">
            <IndustryFitStrip slugs={data.industryFit} />
          </div>
        </div>
      </section>

      {/* ───────── S08 — FAQ ─────────
          IMPORTANT: visible text below is BYTE-IDENTICAL to the FAQPage
          JSON-LD emitted by the page (both consume `data.faqs`). Do not
          paraphrase anywhere in between. */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel index="08" label="FAQ" tone="muted" />
              <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Common questions
              </h2>
            </div>
            <FAQ items={data.faqs} />
          </div>
        </div>
      </section>

      {/* ───────── S09 — Bottom CTA ───────── */}
      <CTASection
        headline={data.ctaHeadline ?? 'Ready to set this up?'}
        body={
          data.ctaBody ??
          "Book a free discovery call. We'll map your setup and show you exactly what a system like this would look like for your business."
        }
        primary={{
          label: data.ctaSectionLabel ?? 'Book a discovery call',
          href: '/contact',
        }}
      />
    </>
  )
}
