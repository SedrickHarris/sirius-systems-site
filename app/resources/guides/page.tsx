import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  Workflow,
  TrendingDown,
  LayoutDashboard,
  Star,
  Search,
} from 'lucide-react'
import { ResourceCard, type ResourceCardData } from '@/components/site/ResourceCard'
import { Breadcrumbs } from '@/components/site/Breadcrumbs'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList } from '@/lib/schema'

const PAGE = {
  slug: 'resources/guides',
  title: 'Guides for AI Automation and Local Business Growth | Sirius Systems',
  description:
    'Read practical guides on AI automation, smart websites, local SEO, reviews, booking systems, and CRM follow-up for local service businesses.',
}

export const metadata: Metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: `/${PAGE.slug}` },
  openGraph: {
    title: PAGE.title,
    description: PAGE.description,
    url: `/${PAGE.slug}`,
    images: ['/og/default.webp'],
  },
}

// Planned guides. The long-form guide pages ship in a later phase, so every
// card is "Coming soon" (no href) for now. Add an href as each guide ships.
const GUIDES: ResourceCardData[] = [
  { title: 'AI Automation for Local Service Businesses', blurb: 'How trigger-based systems replace the manual steps between a lead and a booked job.', Icon: Workflow },
  { title: 'How Local Businesses Lose Leads Online', blurb: 'The common gaps where inquiries go quiet, and what closing each one is worth.', Icon: TrendingDown },
  { title: 'Smart Website Conversion Guide', blurb: 'How to turn a brochure site into one that captures, qualifies, books, and follows up.', Icon: LayoutDashboard },
  { title: 'Review Growth System Guide', blurb: 'How to earn more reviews consistently and respond to the hard ones with the right tone.', Icon: Star },
  { title: 'Local SEO and AEO Guide', blurb: 'How to get found in Google and in AI answer engines, and why both now matter.', Icon: Search },
]

export default function ResourcesGuidesPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${PAGE.slug}`,
            name: PAGE.title,
            description: PAGE.description,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/resources' },
            { name: 'Guides', url: `/${PAGE.slug}` },
          ]),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <Breadcrumbs
            className="mb-6"
            trail={[
              { name: 'Home', url: '/' },
              { name: 'Resources', url: '/resources' },
              { name: 'Guides', url: `/${PAGE.slug}` },
            ]}
          />
          <span className="section-eyebrow">Guides</span>
          <h1 className="mt-6 hero-heading max-w-4xl">
            Guides for AI Automation and Local Business Growth
          </h1>
          <p className="mt-7 hero-copy">
            Deeper walk-throughs that help business owners understand how
            websites, automation, reviews, CRM follow-up, booking, and local SEO
            work together as one system instead of five disconnected tools.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#guide-library" className="btn-primary">
              Browse guides
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/resources" className="btn-ghost">
              All resources
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Explanation (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What to expect</span>
            <p className="mt-6 text-xl leading-relaxed text-[color:var(--text-charcoal)] md:text-2xl">
              Each guide takes one part of the growth system and explains how it
              works, why it matters for a local service business, and how it
              connects to the rest of the stack. Practical, not theoretical.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Guide grid (soft) ───────── */}
      <section
        id="guide-library"
        className="section-soft section-padding scroll-mt-20"
      >
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The library</span>
            <h2 className="mt-5 section-heading">
              Guides we are building
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((guide) => (
              <ResourceCard key={guide.title} {...guide} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="cta-deep">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              Ready when you are
            </span>
            <h2 className="mt-5 section-heading max-w-3xl text-balance">
              Book a 20-minute revenue leak audit.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              We will map where leads, reviews, or follow-up are leaking and show
              you the order of operations to fix it. Walk away with the plan,
              whether or not we work together.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book the audit
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
