import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ShieldCheck, ListChecks, HelpCircle, Gauge } from 'lucide-react'
import { Breadcrumbs } from '@/components/site/Breadcrumbs'
import { ResourceCard, type ResourceCardData } from '@/components/site/ResourceCard'
import { RelatedServicesGrid } from '@/components/site/RelatedServicesGrid'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList } from '@/lib/schema'
import {
  CHECKLIST,
  CHECKLIST_SECTIONS,
  SCORE_RANGES,
  SCORE_HELPER,
} from '@/lib/checklist-revenue-leak'

export const metadata: Metadata = {
  title: CHECKLIST.title,
  description: CHECKLIST.description,
  alternates: { canonical: `/${CHECKLIST.slug}` },
  openGraph: {
    title: CHECKLIST.title,
    description: CHECKLIST.description,
    url: `/${CHECKLIST.slug}`,
    images: ['/og/default.webp'],
  },
}

const TRAIL = [
  { name: 'Home', url: '/' },
  { name: 'Resources', url: '/resources' },
  { name: 'Checklists', url: '/resources/checklists' },
  { name: 'Local Business Revenue Leak Checklist', url: `/${CHECKLIST.slug}` },
]

// Suggested reading + related resources (all routes exist and are live).
const RELATED_RESOURCES: ResourceCardData[] = [
  {
    title: 'All checklists',
    blurb: 'Browse the full library of local business growth checklists as they ship.',
    href: '/resources/checklists',
    Icon: ListChecks,
  },
  {
    title: 'AI Automation FAQ',
    blurb: 'Plain-language answers on missed-call text-back, follow-up, booking, CRM, and more.',
    href: '/resources/faq/ai-automation',
    Icon: HelpCircle,
  },
  {
    title: 'Revenue Leak Audit',
    blurb: 'Have us map the leaks with you in a free 20-minute audit built for local service businesses.',
    href: '/revenue-leak-audit',
    Icon: Gauge,
  },
]

const RELATED_SERVICES = [
  'ai-automation',
  'crm-automation',
  'smart-websites',
  'review-automation',
  'local-seo-aeo',
]

export default function RevenueLeakChecklistPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${CHECKLIST.slug}`,
            name: CHECKLIST.title,
            description: CHECKLIST.description,
          }),
          breadcrumbList(TRAIL),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <Breadcrumbs className="mb-6" trail={TRAIL} />
          <span className="section-eyebrow">{CHECKLIST.eyebrow}</span>
          <h1 className="mt-6 hero-heading max-w-4xl">{CHECKLIST.h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
            {CHECKLIST.subtitle}
          </p>
          <p className="mt-7 hero-copy">
            Most local businesses do not lose revenue in one obvious place. Leads
            can leak through missed calls, slow follow-up, unclear website CTAs,
            disconnected forms, weak review systems, messy CRM tracking, or poor
            local visibility. Use this checklist to spot the gaps before more
            opportunities slip away.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#checklist" className="btn-primary">
              Use the Checklist
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/revenue-leak-audit" className="btn-ghost">
              Book a Revenue Leak Audit
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/55">
            Built for local service businesses that rely on calls, forms,
            bookings, reviews, and follow-up.
          </p>
        </div>
      </section>

      {/* ───────── What this checklist reviews (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What this checklist reviews</span>
            <h2 className="mt-5 section-heading">Ten places revenue tends to leak</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {CHECKLIST_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="card-solid hover-lift group flex h-full flex-col p-5"
              >
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--blue-system)]/10 font-mono text-sm text-[color:var(--blue-system)]"
                >
                  {String(s.n).padStart(2, '0')}
                </span>
                <span className="card-title mt-4 text-base">{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Checklist sections (soft) ───────── */}
      <section id="checklist" className="section-soft section-padding scroll-mt-20">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The self-audit</span>
            <h2 className="mt-5 section-heading">Work through each section</h2>
            <p className="mt-5 section-copy">
              Give yourself one point for every box you can check. When you are
              done, add up your points and find your range in the scorecard
              below. Be honest. The gaps are where the opportunity is.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {CHECKLIST_SECTIONS.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="card-solid scroll-mt-24 p-7 md:p-9"
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--blue-system)]/10 font-mono text-sm text-[color:var(--blue-system)]"
                  >
                    {String(section.n).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[color:var(--text-charcoal)] md:text-2xl">
                    {section.title}
                  </h3>
                </div>

                <p className="card-copy mt-5 text-[color:var(--text-charcoal)]">
                  {section.intro}
                </p>

                {section.kind === 'fields' ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-[color:var(--blue-system)]"
                        />
                        <span className="text-sm leading-relaxed text-[color:var(--text-charcoal)] md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="mt-6 grid gap-3">
                    {section.items.map((item) => (
                      <li key={item}>
                        <label className="flex cursor-pointer items-start gap-3">
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 shrink-0 rounded border-[color:var(--border-soft)] accent-[color:var(--blue-system)]"
                          />
                          <span className="text-sm leading-relaxed text-[color:var(--text-charcoal)] md:text-base">
                            {item}
                          </span>
                        </label>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Revenue leak signal */}
                <div className="mt-7 rounded-xl border-l-2 border-[color:var(--blue-system)] bg-[color:var(--blue-system)]/5 p-4">
                  <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[color:var(--text-muted)]">
                    Revenue leak signal
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-charcoal)] md:text-base">
                    {section.leakSignal}
                  </p>
                </div>

                {section.services.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                    <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[color:var(--text-faint)]">
                      Related
                    </span>
                    {section.services.map((s) => (
                      <Link key={s.href} href={s.href} className="btn-link">
                        {s.label}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Scorecard (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Scorecard</span>
            <h2 className="mt-5 section-heading">Add up your points, then find your range</h2>
            <p className="mt-5 section-copy">
              Count one point for each box you checked, then match your total to
              a range below for the recommended next step.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SCORE_RANGES.map((r) => (
              <div key={r.range} className="card-solid flex h-full flex-col p-6">
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[color:var(--blue-system)]">
                  {r.range} points
                </span>
                <h3 className="card-title mt-3">{r.label}</h3>
                <p className="card-copy mt-3 flex-1">
                  <span className="font-semibold text-[color:var(--text-charcoal)]">
                    Recommended next step:
                  </span>{' '}
                  {r.next}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 content-medium">
            <p className="section-copy">{SCORE_HELPER}</p>
          </div>
        </div>
      </section>

      {/* ───────── Related resources + services (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Related resources</span>
            <h2 className="mt-5 section-heading">Keep going</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {RELATED_RESOURCES.map((r) => (
              <ResourceCard key={r.title} {...r} />
            ))}
          </div>

          <div className="mt-12 content-medium">
            <span className="section-eyebrow">Related services</span>
            <h2 className="mt-5 section-heading">The systems that close these gaps</h2>
          </div>
          <div className="mt-10">
            <RelatedServicesGrid slugs={RELATED_SERVICES} />
          </div>
        </div>
      </section>

      {/* ───────── Final CTA (light wrapping cta-deep) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="cta-deep">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              Ready when you are
            </span>
            <h2 className="mt-5 section-heading max-w-3xl text-balance">
              Want help finding the leaks faster?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Sirius Systems can review your website, lead capture, missed-call
              process, follow-up, booking flow, reviews, CRM, and local
              visibility system.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/revenue-leak-audit" className="btn-primary">
                Book a Revenue Leak Audit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/ai-automation" className="btn-ghost">
                Explore AI Automation
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
