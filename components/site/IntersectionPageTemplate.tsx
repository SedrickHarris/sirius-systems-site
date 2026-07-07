'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { FAQ } from './FAQ'
import { RelatedServicesGrid } from './RelatedServicesGrid'
import { Breadcrumbs } from './Breadcrumbs'

// Shared template behind every industry × service intersection page.
// URL pattern: /industries/[hub-slug]/[service-slug]
// AI Depth: Level 5 — all intersection pages, no exceptions.
//
// Section rhythm:
//   S00 dark hero (section-deep + glow-accent + card-glass highlights)
//   S01 light definition (AEO-quotable 2-sentence block)
//   S02 soft problems (4 pain bullets, card-solid)
//   S03 slate how-it-works (3-4 steps, system-node numbering)
//   S04 light features checklist (6-8 items, card-solid)
//   S05 soft related services (RelatedServicesGrid + hub + service links)
//   S06 light FAQ (5 AEO-optimized Q&A, native details)
//   S07 light section wrapping cta-deep panel
//
// Schema emitted by the page file (not this template):
//   WebPage + BreadcrumbList (4-item) + Service + FAQPage
//
// Do-not-invent rules apply in full. This template renders only what
// the page data file provides. It invents nothing.

export interface IntersectionPageData {
  // Routing — used by page file for schema + canonical
  hubSlug:     string   // e.g. 'home-services'
  serviceSlug: string   // e.g. 'reputation-management'
  hubName:     string   // e.g. 'Home Services'
  serviceName: string   // e.g. 'Reputation Management'

  // Metadata — owned by page file, exposed here for openGraph consistency
  metaTitle:       string
  metaDescription: string

  // S00 Hero
  eyebrow:        string    // e.g. 'Home Services · Reputation Management'
  headline:       string    // industry-specific H1, sentence case, no trailing punctuation
  subheadline:    string
  heroHighlights: string[]  // 3-4 bullets

  // S01 Definition
  definitionHeadline: string
  definition:         string   // 2 sentences, AEO-quotable

  // S02 Problems
  problemHeadline: string
  problems:        string[]  // exactly 4

  // S03 How it works
  howItWorksHeadline?: string
  steps: { label: string; body: string }[]  // 3-4 steps

  // S04 Features
  featuresHeadline?: string
  features: string[]  // 6-8 items

  // S05 Related services
  relatedServiceSlugs: string[]  // 3-4 slugs fed to RelatedServicesGrid

  // S06 FAQ — same array drives visible render and FAQPage JSON-LD
  faqs: { q: string; a: string }[]  // exactly 5

  // S07 CTA
  ctaHeadline?:   string
  ctaBody?:       string
  ctaPrimaryLabel?: string
}

export function IntersectionPageTemplate(data: IntersectionPageData) {
  return (
    <>
      {/* ── S00: Hero (dark deep + selective glass card) ── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <Breadcrumbs
              className="mb-6"
              trail={[
                { name: 'Home', url: '/' },
                { name: 'Industries', url: '/industries' },
                { name: data.hubName, url: `/industries/${data.hubSlug}` },
                {
                  name: data.serviceName,
                  url: `/industries/${data.hubSlug}/${data.serviceSlug}`,
                },
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
              <Link
                href={`/industries/${data.hubSlug}`}
                className="btn-ghost"
              >
                {data.hubName} Overview
              </Link>
            </div>
          </div>

          <aside
            aria-label={`What ${data.serviceName} covers for ${data.hubName} businesses`}
            className="card-glass"
          >
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              What this covers
            </span>
            <ul className="mt-5 space-y-3">
              {data.heroHighlights.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent-teal)]"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-white/90">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ── S01: Definition (light — AEO-quotable) ── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What this means for your business</span>
            <h2 className="mt-5 section-heading">{data.definitionHeadline}</h2>
            <div className="mt-8 border-l-2 border-[color:var(--blue-system)] pl-6">
              <p className="section-copy">{data.definition}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S02: Problems (soft — card-solid bullets) ── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The problem</span>
            <h2 className="mt-5 section-heading">{data.problemHeadline}</h2>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {data.problems.map((problem) => (
              <li
                key={problem}
                className="card-solid flex items-start gap-3 p-6"
              >
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

      {/* ── S03: How it works (slate dark — system-node steps) ── */}
      <section className="section-slate section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">How it works</span>
            <h2 className="mt-5 section-heading">
              {data.howItWorksHeadline ??
                `How ${data.serviceName} works for ${data.hubName} businesses`}
            </h2>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.steps.map((step, i) => (
              <li key={step.label} className="flex gap-5">
                <span
                  aria-hidden
                  className="system-node shrink-0"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold leading-snug text-white md:text-lg">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70 md:text-base">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── S04: Features checklist (light — card-solid) ── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What you get</span>
            <h2 className="mt-5 section-heading">
              {data.featuresHeadline ??
                `What ${data.serviceName} includes for ${data.hubName} businesses`}
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature) => (
              <li
                key={feature}
                className="card-solid flex items-start gap-3 p-5"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--blue-system)]"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-[color:var(--text-charcoal)] md:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── S05: Related services (soft) ── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Related systems</span>
            <h2 className="mt-5 section-heading">
              Pair this with the rest of the growth stack
            </h2>
          </div>
          <div className="mt-12">
            <RelatedServicesGrid slugs={data.relatedServiceSlugs} />
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href={`/industries/${data.hubSlug}`}
              className="btn-link"
            >
              Back to {data.hubName}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link
              href={`/${data.serviceSlug}`}
              className="btn-link"
            >
              {data.serviceName} overview
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── S06: FAQ (light)
          CRITICAL: data.faqs drives both this visible render and the
          FAQPage JSON-LD emitted by the page file. They must be the
          same array. Do not duplicate or hardcode separately. ── */}
      <section className="section-light section-padding">
        <div className="site-container grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="mt-5 section-heading">Common questions</h2>
          </div>
          <FAQ items={data.faqs} />
        </div>
      </section>

      {/* ── S07: Final CTA (light section wrapping cta-deep) ── */}
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
              <Link
                href={`/industries/${data.hubSlug}`}
                className="btn-ghost"
              >
                {data.hubName} Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
