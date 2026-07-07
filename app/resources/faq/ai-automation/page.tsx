import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ShieldCheck, ListChecks, BookOpen, Gauge } from 'lucide-react'
import { ResourceCard, type ResourceCardData } from '@/components/site/ResourceCard'
import { RelatedServicesGrid } from '@/components/site/RelatedServicesGrid'
import { Breadcrumbs } from '@/components/site/Breadcrumbs'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList } from '@/lib/schema'
import { AI_AUTOMATION_FAQS, AI_FAQ_HUB } from '@/lib/faq-ai-automation'

export const metadata: Metadata = {
  title: AI_FAQ_HUB.title,
  description: AI_FAQ_HUB.description,
  alternates: { canonical: `/${AI_FAQ_HUB.slug}` },
  openGraph: {
    title: AI_FAQ_HUB.title,
    description: AI_FAQ_HUB.description,
    url: `/${AI_FAQ_HUB.slug}`,
    images: ['/og/default.webp'],
  },
}

// Breadcrumb + JSON-LD trail shared by the visible nav and the schema.
const TRAIL = [
  { name: 'Home', url: '/' },
  { name: 'Resources', url: '/resources' },
  { name: 'FAQ Library', url: '/resources/faq' },
  { name: 'AI Automation', url: `/${AI_FAQ_HUB.slug}` },
]

// Suggested reading: all three routes already exist and are live.
const RELATED_RESOURCES: ResourceCardData[] = [
  {
    title: 'Checklists',
    blurb: 'Find missed leads, follow-up gaps, review leaks, and weak conversion points with practical checklists.',
    href: '/resources/checklists',
    Icon: ListChecks,
  },
  {
    title: 'Guides',
    blurb: 'Deeper walk-throughs on how websites, automation, reviews, CRM, booking, and local SEO work together.',
    href: '/resources/guides',
    Icon: BookOpen,
  },
  {
    title: 'Revenue Leak Audit',
    blurb: 'A free audit that maps where your business loses leads, missed calls, follow-ups, bookings, and reviews.',
    href: '/revenue-leak-audit',
    Icon: Gauge,
  },
]

// Related services shown as ServiceCards (RelatedServicesGrid skips unknown slugs).
const RELATED_SERVICES = [
  'ai-automation',
  'crm-automation',
  'appointment-booking-automation',
  'ai-chatbots',
  'ai-voicebots',
  'review-automation',
  'local-seo-aeo',
  'all-in-one-business-growth-system',
]

export default function AiAutomationFaqHubPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${AI_FAQ_HUB.slug}`,
            name: AI_FAQ_HUB.title,
            description: AI_FAQ_HUB.description,
          }),
          breadcrumbList(TRAIL),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <Breadcrumbs className="mb-6" trail={TRAIL} />
          <span className="section-eyebrow">{AI_FAQ_HUB.eyebrow}</span>
          <h1 className="mt-6 hero-heading max-w-4xl">
            AI Automation FAQ for Local Service Businesses
          </h1>
          <p className="mt-7 hero-copy">
            Plain-language answers to help local business owners understand how AI
            automation captures missed leads, improves follow-up, qualifies
            inquiries, books appointments, connects to your CRM, supports reviews,
            and ties the whole local growth system together.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#faq-questions" className="btn-primary">
              Browse questions
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/resources/faq" className="btn-ghost">
              All FAQ topics
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── What this covers (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What this covers</span>
            <p className="mt-6 text-xl leading-relaxed text-[color:var(--text-charcoal)] md:text-2xl">
              Local service businesses lose leads, reviews, and revenue when
              follow-up, booking, websites, reviews, and CRM work sit
              disconnected. These questions explain, in plain terms, how AI
              automation closes those gaps so fewer jobs slip away.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Questions (soft) ───────── */}
      <section id="faq-questions" className="section-soft section-padding scroll-mt-20">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Questions</span>
            <h2 className="mt-5 section-heading">The AI automation questions owners ask most</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {AI_AUTOMATION_FAQS.map((faq) => (
              <Link
                key={faq.slug}
                href={`/${AI_FAQ_HUB.slug}/${faq.slug}`}
                className="card-solid hover-lift group flex items-start justify-between gap-4 p-6"
              >
                <span className="card-title text-base md:text-lg">{faq.question}</span>
                <ArrowUpRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Suggested reading (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Suggested reading</span>
            <h2 className="mt-5 section-heading">Keep going</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {RELATED_RESOURCES.map((r) => (
              <ResourceCard key={r.title} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Related services (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Related services</span>
            <h2 className="mt-5 section-heading">The systems behind these answers</h2>
          </div>
          <div className="mt-12">
            <RelatedServicesGrid slugs={RELATED_SERVICES} />
          </div>
        </div>
      </section>

      {/* ───────── Final CTA (light wrapping cta-deep) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="cta-deep">
            <span className="section-eyebrow text-[color:var(--blue-light)]">Ready when you are</span>
            <h2 className="mt-5 section-heading max-w-3xl text-balance">
              Book a 20-minute revenue leak audit.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              We will map where leads, reviews, or follow-up are leaking and show
              you the order of operations to fix it. Walk away with the plan,
              whether or not we work together.
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
