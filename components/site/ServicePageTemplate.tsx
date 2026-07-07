import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Zap,
  ShieldCheck,
} from 'lucide-react'
import { FAQ } from './FAQ'
import { RelatedServicesGrid } from './RelatedServicesGrid'
import { IndustryFitStrip } from './IndustryFitStrip'
import { Breadcrumbs } from './Breadcrumbs'
import { SERVICES } from '@/lib/services'

// Shared template behind every service page. Section rhythm follows the
// brief's service-page guidance:
//   1 dark hero  →  2 light definition (AEO-quotable, value strip)
//   3 soft problem framing  →  4 light deliverables checklist
//   5 soft outcomes grid    →  6 SLATE-dark how-it-works (process)
//   7 light related services →  8 soft industry-fit chip strip
//   9 light FAQ             →  10 light section wrapping a cta-deep panel
//
// All classes come from app/globals.css (Stage 1 design system). No glass
// except the selective `.card-glass` in the hero panel (brief-approved
// accent location).

// `glyphVariant` kept on the type so existing page data files compile.
// Stage 3 stopped consuming it (the hero uses a `.card-glass` summary
// instead of the constellation visual); the field is now ignored.
export interface ServicePageData {
  slug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  headline: string
  subheadline: string
  ctaLabel?: string
  glyphVariant?: 'orbit' | 'pulse' | 'wave' | 'grid' | 'beacon' | 'arc'
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
  // First 4 features carry the most "hook" value; surface them in the hero
  // card so the visitor sees what they get without scrolling.
  const heroHighlights = data.features.slice(0, 4)

  // Breadcrumb leaf name: prefer the canonical catalog name, fall back to eyebrow.
  const crumbName = SERVICES.find((s) => s.slug === data.slug)?.name ?? data.eyebrow

  return (
    <>
      {/* ───────── S00: Hero (dark deep + selective glass card) ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <Breadcrumbs
              className="mb-6"
              trail={[
                { name: 'Home', url: '/' },
                { name: 'Services', url: '/services' },
                { name: crumbName, url: `/${data.slug}` },
              ]}
            />
            <span className="section-eyebrow">{data.eyebrow}</span>
            <h1 className="mt-6 hero-heading">{data.headline}</h1>
            <p className="mt-7 hero-copy">{data.subheadline}</p>
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

          {/* Selective glass: hero summary card */}
          <aside aria-label="What this service delivers" className="card-glass">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              What this delivers
            </span>
            <ul className="mt-5 space-y-3">
              {heroHighlights.map((feature) => {
                // Pull the lead phrase before the em-dash; if there's no
                // em-dash, fall back to the whole sentence.
                const split = feature.split(': ')
                const lead = split[0]
                const rest = split.slice(1).join(': ')
                return (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent-teal)]"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-white/90">
                      <span className="font-semibold text-white">{lead}</span>
                      {rest && (
                        <span className="text-white/70">: {rest}</span>
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>
          </aside>
        </div>
      </section>

      {/* ───────── S01: Definition (AEO-quotable, light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What it is</span>
            <p className="mt-6 text-xl leading-relaxed text-[color:var(--text-charcoal)] md:text-2xl">
              {data.definition}
            </p>
          </div>
        </div>
      </section>

      {/* ───────── S02: Problem framing (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The problem</span>
            <h2 className="mt-5 section-heading">
              {data.problemHeadline ?? 'What breaks without this'}
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {data.problems.map((problem) => (
              <li key={problem} className="card-solid flex items-start gap-3 p-6">
                <span
                  aria-hidden
                  className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[color:var(--blue-system)]"
                />
                <span className="card-copy text-[color:var(--text-charcoal)]">
                  {problem}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── S03: What you get / features (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Deliverables</span>
            <h2 className="mt-5 section-heading">
              {data.featuresHeadline ?? 'What you get'}
            </h2>
          </div>
          <div className="mt-12 card-premium p-8 md:p-10">
            <ul className="grid gap-5 md:grid-cols-2">
              {data.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--blue-system)]/12 text-[color:var(--blue-system)]"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="card-copy text-[color:var(--text-charcoal)]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── S04: Outcomes (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Outcomes</span>
            <h2 className="mt-5 section-heading">
              {data.outcomesHeadline ?? 'What changes'}
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.outcomes.map((outcome) => (
              <article key={outcome} className="card-feature hover-lift">
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--blue-system)]/10 text-[color:var(--blue-system)]"
                >
                  <Zap className="h-5 w-5" />
                </span>
                <p className="mt-5 card-copy text-[color:var(--text-charcoal)]">
                  {outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── S05: How it works (slate dark) ───────── */}
      <section className="section-slate section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The mechanism</span>
            <h2 className="mt-5 section-heading">
              {data.howItWorksHeadline ?? 'How it works'}
            </h2>
          </div>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {data.steps.map((step, i) => (
              <li key={step.label}>
                <span className="system-node">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="card-title mt-6 text-white">{step.label}</h3>
                <p className="card-copy mt-3">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── S06: Related services (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Related services</span>
            <h2 className="mt-5 section-heading">Part of a larger system</h2>
            <p className="mt-5 section-copy">
              Each service is stronger when it&rsquo;s wired to the others.
              These are the pieces most often paired with this one.
            </p>
          </div>
          <div className="mt-12">
            <RelatedServicesGrid slugs={data.relatedSlugs} />
          </div>
          <div className="mt-10">
            <Link
              href="/all-in-one-business-growth-system"
              className="btn-link"
            >
              See everything in one place
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── S07: Industry fit (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Who this is for</span>
            <h2 className="mt-5 section-heading">
              {data.industryFitHeadline ?? 'Built for local service businesses'}
            </h2>
          </div>
          <div className="mt-10">
            <IndustryFitStrip slugs={data.industryFit} />
          </div>
        </div>
      </section>

      {/* ───────── S08: FAQ (light)
          Visible Q text consumes the same `data.faqs` array as the
          FAQPage JSON-LD on the page: byte-identical. ───────── */}
      <section className="section-light section-padding">
        <div className="site-container grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="mt-5 section-heading">Common questions</h2>
          </div>
          <FAQ items={data.faqs} />
        </div>
      </section>

      {/* ───────── S09: Final CTA (light section wrapping cta-deep) ───────── */}
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
                "We'll map your setup and show you exactly where leads, reviews, or follow-up are leaking. Walk away with the plan, whether or not we work together."}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                {data.ctaSectionLabel ?? 'Book the audit'}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/services" className="btn-ghost">
                See services
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/55">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              No pressure. No fake promises. Just a practical next step.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
