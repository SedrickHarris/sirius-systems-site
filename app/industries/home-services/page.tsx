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
    'Home Services Automation — AI, Booking & Reviews | Sirius Systems',
  description:
    'AI automation, missed-call recovery, appointment booking, and review systems for home service businesses — plumbers, HVAC, roofers, landscapers, and 16 more trades.',
  slug: 'industries/home-services',
}

// Sub-vertical data. Every card is `comingSoon: true` for now — individual
// trade pages will be built as Phase 4 progresses. Blurbs are descriptive,
// not promotional; no invented results, stats, or guarantees.
const FEATURED = [
  {
    name: 'Plumbing',
    blurb:
      'Emergency call capture, after-hours booking, and review automation for plumbers running solo or managing a crew.',
  },
  {
    name: 'HVAC & Air Conditioning',
    blurb:
      'Seasonal lead capture, maintenance reminders, and review systems for HVAC companies competing in crowded local markets.',
  },
  {
    name: 'Roofing',
    blurb:
      'Storm-season lead flow, estimate follow-up automation, and review velocity for roofing contractors.',
  },
  {
    name: 'Landscaping & Lawn Care',
    blurb:
      'Recurring service booking, seasonal upsell flows, and review automation for landscaping businesses.',
  },
]

const COMPACT = [
  {
    name: 'House Cleaning & Maid Services',
    blurb:
      'Recurring booking automation and review flows for cleaning businesses scaling past word-of-mouth.',
  },
  {
    name: 'Junk Removal & Hauling',
    blurb:
      'Same-day lead capture, routing, and post-job review requests that compound over time.',
  },
  {
    name: 'Electrical',
    blurb:
      "Emergency call handling and appointment booking for electricians who can't afford to miss a job.",
  },
  {
    name: 'Painting (Interior & Exterior)',
    blurb:
      'Estimate follow-up automation and review requests for painting contractors building a referral engine.',
  },
  {
    name: 'Pest Control & Extermination',
    blurb:
      'Recurring contract automation and review systems for pest control operators.',
  },
  {
    name: 'Pressure Washing & Soft Washing',
    blurb:
      'Lead capture, seasonal outreach, and review automation for pressure washing businesses.',
  },
  {
    name: 'Pool Service & Maintenance',
    blurb:
      'Recurring scheduling, reminder automation, and review flows for pool service companies.',
  },
  {
    name: 'Handyman Services',
    blurb:
      'Booking automation and review requests for handyman operators competing on responsiveness.',
  },
  {
    name: 'Garage Door Service & Repair',
    blurb:
      'After-hours call capture and fast booking automation for garage door service businesses.',
  },
  {
    name: 'Window Cleaning',
    blurb:
      'Recurring appointment automation and review systems for window cleaning operators.',
  },
  {
    name: 'Gutter Cleaning & Guards',
    blurb:
      'Seasonal lead capture and review automation for gutter cleaning businesses.',
  },
  {
    name: 'Appliance Repair',
    blurb:
      'Fast call capture, booking automation, and follow-up for appliance repair technicians.',
  },
  {
    name: 'Carpet & Upholstery Cleaning',
    blurb:
      'Recurring booking flows and review automation for carpet and upholstery cleaning businesses.',
  },
  {
    name: 'Moving Services',
    blurb:
      'Lead qualification, booking, and review automation for moving companies.',
  },
  {
    name: 'Tree Service & Arborist',
    blurb:
      'Estimate follow-up and review automation for tree service and arborist businesses.',
  },
  {
    name: 'Home Inspection',
    blurb:
      'Booking automation and review flows for home inspectors building a referral reputation.',
  },
]

// FAQs. Visible body and FAQPage JSON-LD consume this same array — they're
// guaranteed identical. Q3 timing language is intentionally non-specific
// pending client confirmation (TODO: confirm exact timelines with client).
const FAQS = [
  {
    q: 'What types of home service businesses do you work with?',
    a: 'We work with any trade or service that operates locally — plumbers, HVAC companies, roofers, landscapers, cleaners, electricians, pest control operators, and more. If your business depends on phone calls, appointments, and local reputation, the system applies.',
  },
  {
    q: 'Do I need to already have a CRM or website?',
    a: "No. We can work with what you have or build the missing pieces. Most home service businesses we work with either have no CRM (we set one up) or have one they're not using effectively (we configure and connect it). The website situation is similar.",
  },
  {
    q: 'How quickly can you set up the missed-call and booking automation?',
    a: "Setup time depends on what's already in place. A standalone missed-call text-back and booking link can typically be operational in days. A full system buildout with CRM, automations, and review flows takes longer — we scope it during the discovery call.",
  },
  {
    q: 'Will this work for a solo operator or only larger businesses?',
    a: 'Both. A solo plumber benefits from missed-call recovery and automated review requests the same way a 10-truck HVAC company does. The system scales — you start with the pieces that address your biggest leak and add from there.',
  },
  {
    q: 'What does the automation actually replace?',
    a: "Mostly the manual tasks that fall through the cracks — following up on estimates, texting customers when you're running late, asking for a review after the job, responding to leads after hours. The automation handles those consistently so you're focused on the work, not the admin.",
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

export default function HomeServicesIndustryPage() {
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
            { name: 'Home Services', url: `/${META.slug}` },
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
            <SectionLabel index="00" label="Home Services" tone="accent" />

            <h1 className="mt-8 max-w-3xl text-balance font-display text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-[4.5rem]">
              Stop Losing Jobs to the Business That Answered First
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Home service businesses run lean. When a lead calls and gets
              voicemail, they call the next name on the list. We build the
              system that answers, qualifies, books, and follows up — so you
              stop leaving jobs on the table.
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

          {/* Visual panel — same pattern as the service-page hero */}
          <aside className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface/40">
            <div className="absolute inset-0 bg-grid-faint bg-grid-32" />
            <div className="absolute inset-0 glow-accent" />
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
              <ConstellationGlyph variant="orbit" />
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── S01 — The problem ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="01" label="The problem" tone="muted" />
          <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            What&rsquo;s leaking revenue right now
          </h2>
          <ul className="mt-10 grid max-w-3xl gap-5">
            {[
              'Calls go to voicemail after hours and the lead books a competitor before 8 AM.',
              'Estimates get sent and never followed up on — the job goes to whoever called back first.',
              'Happy customers finish the job without leaving a review because no one asked at the right moment.',
              "The website generates traffic but doesn't capture, qualify, or route leads anywhere useful.",
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
            The automation stack for home services
          </h2>
          <div className="mt-12">
            <RelatedServicesGrid
              slugs={[
                'ai-voicebots',
                'appointment-booking-automation',
                'review-automation',
                'lead-generation-automation',
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
          <SectionLabel index="03" label="Trades we work with" tone="muted" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Built for how your trade actually runs
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
          both consume the FAQS array. Do not paraphrase. */}
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
