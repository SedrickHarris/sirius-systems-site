import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/site/SectionLabel'
import { ConstellationGlyph } from '@/components/site/ConstellationGlyph'
import { RelatedServicesGrid } from '@/components/site/RelatedServicesGrid'
import { IndustrySubCard } from '@/components/site/IndustrySubCard'
import { FAQ } from '@/components/site/FAQ'
import { CTASection } from '@/components/site/CTASection'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'

const META = {
  title:
    'Contractors — AI Automation, Lead Follow-Up & Reviews | Sirius Systems',
  description:
    'AI-powered lead follow-up, estimate automation, appointment booking, and reputation management for contractors — general contractors, remodelers, solar, flooring, and more.',
  slug: 'industries/contractors',
}

const FEATURED = [
  {
    name: 'General Contractors',
    blurb:
      'Lead qualification, estimate follow-up automation, and review systems for GCs managing multiple active jobs.',
  },
  {
    name: 'Kitchen & Bathroom Remodeling',
    blurb:
      'High-ticket estimate follow-up, consultation booking automation, and review flows for remodelers.',
  },
  {
    name: 'Flooring Installation',
    blurb:
      'Estimate automation, booking, and review requests for flooring contractors competing on responsiveness and reputation.',
  },
  {
    name: 'Solar Installation',
    blurb:
      'Multi-step lead nurturing, consultation booking, and post-install review automation for solar contractors.',
  },
]

const COMPACT = [
  {
    name: 'Tile & Stone',
    blurb:
      'Estimate follow-up and review automation for tile and stone installation contractors.',
  },
  {
    name: 'Concrete & Flatwork',
    blurb:
      'Lead capture and booking automation for concrete and flatwork contractors.',
  },
  {
    name: 'Drywall & Plastering',
    blurb:
      'Job booking automation and review flows for drywall and plastering contractors.',
  },
  {
    name: 'Insulation',
    blurb:
      'Lead follow-up and appointment automation for insulation contractors.',
  },
  {
    name: 'Siding & Exterior',
    blurb:
      'Estimate automation and review systems for siding and exterior contractors.',
  },
  {
    name: 'Fencing',
    blurb:
      'Quote follow-up and review automation for fencing contractors.',
  },
  {
    name: 'Decks & Outdoor Structures',
    blurb:
      'Booking automation and review flows for deck and outdoor structure builders.',
  },
  {
    name: 'Masonry & Brickwork',
    blurb:
      'Estimate follow-up and reputation management for masonry contractors.',
  },
  {
    name: 'Waterproofing & Foundation',
    blurb:
      'Lead qualification and booking automation for waterproofing and foundation specialists.',
  },
  {
    name: 'Custom Home Builders',
    blurb:
      'Multi-touch lead nurturing and consultation booking for custom home builders.',
  },
  {
    name: 'Commercial Build-Out',
    blurb:
      'Lead qualification, estimate automation, and CRM integration for commercial build-out contractors.',
  },
]

// FAQs — visible body and FAQPage JSON-LD consume this same array so they
// remain byte-identical.
const FAQS = [
  {
    q: 'What types of contractors do you work with?',
    a: 'We work with residential and commercial contractors across most trades — general contractors, remodelers, flooring, solar, concrete, fencing, and more. If your business is project-based and depends on estimates, referrals, and local reputation, the system applies.',
  },
  {
    q: 'My estimates are already professional — what would automation actually improve?',
    a: 'The gap is almost always in follow-up timing and consistency, not estimate quality. Most contractors send an estimate and wait. Automated follow-up sends a message within 24 hours, then again at 72 hours, then flags the lead for a direct call. That sequence alone closes more jobs than redesigning the estimate.',
  },
  {
    q: 'How does the review system work for contractors?',
    a: 'After a job closes, the system sends a review request via text at the right moment — not immediately, but once the customer has had time to see the finished work. It links directly to your Google Business Profile. No manual step required from you.',
  },
  {
    q: 'Do I need a new website to use the automation system?',
    a: "No. The automation stack can run alongside your existing website. If the site is a conversion problem — visitors aren't becoming inquiries — we address that separately. The two don't have to happen at the same time.",
  },
  {
    q: 'How is this different from a generic CRM or lead service?',
    a: 'A generic CRM holds contacts. A lead service sends you names. We build the system that connects your website, CRM, phone, and review profile into a working follow-up engine — specific to how contractors sell, close, and earn referrals.',
  },
]

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: `/${META.slug}` },
  openGraph: {
    title: META.title,
    description: META.description,
    url: `/${META.slug}`,
  },
}

export default function ContractorsIndustryPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: `/${META.slug}`,
            name: META.title,
            description: META.description,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Industries', url: '/industries' },
            { name: 'Contractors', url: `/${META.slug}` },
          ]),
          faqPage(FAQS),
        ]}
      />

      {/* ───────── S00 — Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid-faint bg-grid-48 opacity-50" />
        <div className="absolute inset-0 -z-10 glow-accent" />

        <div className="container-page grid items-start gap-12 py-20 md:py-24 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <SectionLabel index="00" label="Contractors" tone="accent" />

            <h1 className="mt-8 max-w-3xl text-balance font-display text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-[4.5rem]">
              Your Estimate Was Good. The Follow-Up Is What Lost the Job.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Most contractors lose jobs not because they priced wrong but
              because they followed up too late — or not at all. We build the
              system that follows up automatically, books the call, and earns
              the review that wins the next job without you lifting a finger.
            </p>

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

          <aside className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface/40">
            <div className="absolute inset-0 bg-grid-faint bg-grid-32" />
            <div className="absolute inset-0 glow-accent" />
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
              <ConstellationGlyph variant="arc" />
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── S01 — The problem ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="01" label="The problem" tone="muted" />
          <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Where contractors leak revenue
          </h2>
          <ul className="mt-10 grid max-w-3xl gap-5">
            {[
              'Estimates go out and sit unanswered for days — the job goes to whoever called back first.',
              "You're busy on site and can't respond to new inquiries fast enough to win the job.",
              "Finished jobs don't turn into reviews because no one asked at the right moment.",
              'The website looks fine but has no system behind it — leads arrive and stall.',
            ].map((problem) => (
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

      {/* ───────── S02 — What we build ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="02" label="What we build" tone="muted" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            The system contractors actually need
          </h2>
          <div className="mt-12">
            <RelatedServicesGrid
              slugs={[
                'lead-generation-automation',
                'appointment-booking-automation',
                'crm-automation',
                'review-automation',
                'google-business-profile-optimization',
                'all-in-one-business-growth-system',
              ]}
            />
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-foreground link-underline"
            >
              See the full service catalog
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── S03 — Sub-verticals ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <SectionLabel
            index="03"
            label="Contractor trades we work with"
            tone="muted"
          />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Built around how your trade operates
          </h2>

          {/* Tier 1 — Featured */}
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((trade) => (
              <IndustrySubCard
                key={trade.name}
                name={trade.name}
                blurb={trade.blurb}
                comingSoon
                size="featured"
              />
            ))}
          </div>

          {/* Tier 2 — Compact */}
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {COMPACT.map((trade) => (
              <IndustrySubCard
                key={trade.name}
                name={trade.name}
                blurb={trade.blurb}
                comingSoon
                size="compact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── S04 — FAQ ─────────
          Visible Q text below is byte-identical to the FAQPage JSON-LD —
          both consume FAQS. Do not paraphrase. */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel index="04" label="FAQ" tone="muted" />
              <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Common questions
              </h2>
            </div>
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>

      {/* ───────── S09 — CTA ───────── */}
      <CTASection />
    </>
  )
}
