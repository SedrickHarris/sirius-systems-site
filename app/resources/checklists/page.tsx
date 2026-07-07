import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  Gauge,
  MousePointerClick,
  Star,
  MapPin,
  PhoneMissed,
} from 'lucide-react'
import { ResourceCard, type ResourceCardData } from '@/components/site/ResourceCard'
import { Breadcrumbs } from '@/components/site/Breadcrumbs'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList } from '@/lib/schema'

const PAGE = {
  slug: 'resources/checklists',
  title: 'Local Business Growth Checklists | Sirius Systems',
  description:
    'Use practical checklists to find missed leads, follow-up gaps, review leaks, weak website conversion points, and local visibility issues.',
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

// Planned checklists. The full checklist landing pages ship in a later phase,
// so every card is "Coming soon" (no href) for now. Add an href as each ships.
const CHECKLISTS: ResourceCardData[] = [
  { title: 'Local Business Revenue Leak Checklist', blurb: 'Walk your lead flow end to end and find the points where jobs quietly slip away.', href: '/resources/checklists/local-business-revenue-leak-checklist', Icon: Gauge },
  { title: 'Smart Website Conversion Checklist', blurb: 'Check whether your site actually captures, qualifies, books, and follows up.', Icon: MousePointerClick },
  { title: 'Review Automation Readiness Checklist', blurb: 'See whether your review requests go out consistently at the right moment.', Icon: Star },
  { title: 'Google Business Profile Signal Checklist', blurb: 'Confirm the categories, services, posts, and signals that drive local visibility.', Icon: MapPin },
  { title: 'Missed Call Text-Back Checklist', blurb: 'Make sure every missed call gets an instant text before the caller moves on.', Icon: PhoneMissed },
]

export default function ResourcesChecklistsPage() {
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
            { name: 'Checklists', url: `/${PAGE.slug}` },
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
              { name: 'Checklists', url: `/${PAGE.slug}` },
            ]}
          />
          <span className="section-eyebrow">Checklists</span>
          <h1 className="mt-6 hero-heading max-w-4xl">
            Local Business Growth Checklists
          </h1>
          <p className="mt-7 hero-copy">
            Simple, practical checklists that help local businesses find missed
            leads, follow-up gaps, review leaks, weak website conversion points,
            and local visibility issues before those gaps cost more money.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#checklist-library" className="btn-primary">
              Browse checklists
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
            <span className="section-eyebrow">What these are for</span>
            <p className="mt-6 text-xl leading-relaxed text-[color:var(--text-charcoal)] md:text-2xl">
              Each checklist walks one part of your business the way a fresh set
              of eyes would: where leads enter, how fast you respond, whether
              follow-up happens, how reviews get requested, and how you show up
              in local search.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Checklist grid (soft) ───────── */}
      <section
        id="checklist-library"
        className="section-soft section-padding scroll-mt-20"
      >
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The library</span>
            <h2 className="mt-5 section-heading">
              Checklists we are building
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CHECKLISTS.map((item) => (
              <ResourceCard key={item.title} {...item} />
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
