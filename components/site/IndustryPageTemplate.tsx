import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { FAQ } from './FAQ'
import { RelatedServicesGrid } from './RelatedServicesGrid'
import { IndustrySubCard } from './IndustrySubCard'
import { Breadcrumbs } from './Breadcrumbs'
import { INDUSTRIES } from '@/lib/industries'

// Shared template behind every industry hub page (/industries/<slug>).
// Section rhythm per the brief's industry-page guidance:
//   1 dark hero      →  2 light pain points (problem)
//   3 soft recommended systems  →  4 light sub-verticals (use cases)
//   5 soft FAQ                  →  6 light section wrapping a cta-deep panel
//
// No workflow visual: that lives on the home page where it belongs.
// Hub pages stay focused on industry-specific problem + solution + trade
// coverage so they don't duplicate site-wide framing.

export interface IndustryPageData {
  slug: string                       // e.g. 'home-services'
  metaTitle: string
  metaDescription: string
  eyebrow: string                    // hero eyebrow label
  headline: string                   // single H1
  subheadline: string
  heroHighlights: string[]           // 3-4 bullets for the hero glass card
  problems: string[]                 // 4 pain bullets
  problemHeadline?: string
  serviceSlugs: string[]             // 6 services shown in "what we build"
  systemsHeadline?: string
  systemsCopy?: string
  featured: { name: string; blurb: string }[]   // tier-1 sub-vertical cards
  compact:  { name: string; blurb: string }[]   // tier-2 sub-vertical cards
  subVerticalsHeadline?: string
  subVerticalsCopy?: string
  faqs: { q: string; a: string }[]
  ctaHeadline?: string
  ctaBody?: string
  ctaPrimaryLabel?: string
}

export function IndustryPageTemplate(data: IndustryPageData) {
  // Breadcrumb leaf name: prefer the canonical catalog name, fall back to eyebrow.
  const crumbName = INDUSTRIES.find((i) => i.slug === data.slug)?.name ?? data.eyebrow

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
                { name: 'Industries', url: '/industries' },
                { name: crumbName, url: `/industries/${data.slug}` },
              ]}
            />
            <span className="section-eyebrow">{data.eyebrow}</span>
            <h1 className="mt-6 hero-heading">{data.headline}</h1>
            <p className="mt-7 hero-copy">{data.subheadline}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Build My System
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/services" className="btn-ghost">
                See All Services
              </Link>
            </div>
          </div>

          <aside aria-label="What the system covers for this industry" className="card-glass">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              What the system covers
            </span>
            <ul className="mt-5 space-y-3">
              {data.heroHighlights.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent-teal)]" aria-hidden />
                  <span className="text-sm leading-relaxed text-white/90">{line}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ───────── S01: Pain points (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The problem</span>
            <h2 className="mt-5 section-heading">
              {data.problemHeadline ?? 'Where revenue leaks in this industry'}
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

      {/* ───────── S02: Recommended systems (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What we build</span>
            <h2 className="mt-5 section-heading">
              {data.systemsHeadline ?? 'The system this industry actually needs'}
            </h2>
            {data.systemsCopy && (
              <p className="mt-5 section-copy">{data.systemsCopy}</p>
            )}
          </div>
          <div className="mt-12">
            <RelatedServicesGrid slugs={data.serviceSlugs} />
          </div>
          <div className="mt-10">
            <Link href="/services" className="btn-link">
              See the full service catalog
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── S03: Sub-verticals (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Trades we work with</span>
            <h2 className="mt-5 section-heading">
              {data.subVerticalsHeadline ?? 'Built around how your trade operates'}
            </h2>
            {data.subVerticalsCopy && (
              <p className="mt-5 section-copy">{data.subVerticalsCopy}</p>
            )}
          </div>

          {/* Tier 1: Featured */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.featured.map((trade) => (
              <IndustrySubCard
                key={trade.name}
                name={trade.name}
                blurb={trade.blurb}
                comingSoon
                size="featured"
              />
            ))}
          </div>

          {/* Tier 2: Compact */}
          {data.compact.length > 0 && (
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data.compact.map((trade) => (
                <IndustrySubCard
                  key={trade.name}
                  name={trade.name}
                  blurb={trade.blurb}
                  comingSoon
                  size="compact"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ───────── S04: FAQ (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="mt-5 section-heading">Common questions</h2>
          </div>
          <FAQ items={data.faqs} />
        </div>
      </section>

      {/* ───────── S05: CTA panel (light wrapping cta-deep) ───────── */}
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
                "We'll map where leads, reviews, or follow-up are leaking and show you the order of operations. Walk away with the plan, whether or not we work together."}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                {data.ctaPrimaryLabel ?? 'Book the audit'}
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
