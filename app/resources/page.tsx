import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  ListChecks,
  BookOpen,
  Newspaper,
  Gauge,
} from 'lucide-react'
import { ResourceCard, type ResourceCardData } from '@/components/site/ResourceCard'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList } from '@/lib/schema'

const PAGE = {
  slug: 'resources',
  title: 'Resources for Local Business Growth Systems | Sirius Systems',
  description:
    'Explore Sirius Systems resources for AI automation, smart websites, local SEO, review growth, CRM follow-up, and local business lead generation.',
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

// Only routes that already exist are linked. The FAQ / Checklists / Guides
// sub-hubs and Blog are live; the Revenue Leak Audit funnel already exists.
const CATEGORIES: ResourceCardData[] = [
  {
    title: 'FAQ Library',
    blurb:
      'Plain-language answers about AI automation, reviews, local SEO, smart websites, and the systems that capture more leads.',
    href: '/resources/faq',
    Icon: HelpCircle,
  },
  {
    title: 'Checklists',
    blurb:
      'Practical checklists to find missed leads, follow-up gaps, review leaks, and weak spots in your website and local visibility.',
    href: '/resources/checklists',
    Icon: ListChecks,
  },
  {
    title: 'Guides',
    blurb:
      'Deeper walk-throughs on how websites, automation, reviews, CRM follow-up, booking, and local SEO work together as one system.',
    href: '/resources/guides',
    Icon: BookOpen,
  },
  {
    title: 'Blog',
    blurb:
      'Articles on lead capture, follow-up, reviews, and local growth for service businesses that want fewer manual tasks.',
    href: '/blog',
    Icon: Newspaper,
  },
  {
    title: 'Revenue Leak Audit',
    blurb:
      'A free audit that maps where your business loses leads, missed calls, follow-ups, bookings, and reviews.',
    href: '/revenue-leak-audit',
    Icon: Gauge,
  },
]

export default function ResourcesPage() {
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
            { name: 'Resources', url: `/${PAGE.slug}` },
          ]),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <span className="section-eyebrow">Resources</span>
          <h1 className="mt-6 hero-heading max-w-4xl">
            Resources for Local Business Growth Systems
          </h1>
          <p className="mt-7 hero-copy">
            A growing library for local service businesses that want better lead
            capture, faster follow-up, more booked jobs, stronger reviews, and
            local visibility. Everything here is built around the same systems we
            put to work for clients.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#resource-categories" className="btn-primary">
              Browse resources
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/services" className="btn-ghost">
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Category grid (light) ───────── */}
      <section
        id="resource-categories"
        className="section-light section-padding scroll-mt-20"
      >
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Start here</span>
            <h2 className="mt-5 section-heading">
              Pick the resource that fits where you are
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <ResourceCard key={cat.title} {...cat} />
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
