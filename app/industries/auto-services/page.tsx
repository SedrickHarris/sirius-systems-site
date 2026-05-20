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
  title: 'Auto Services Automation — Booking, Reviews & CRM | Sirius Systems',
  description:
    'Appointment booking automation, AI chatbots, review systems, and CRM for auto repair shops, detailers, tire shops, body shops, and other auto service businesses.',
  slug: 'industries/auto-services',
}

const FEATURED = [
  {
    name: 'Auto Detailing (Mobile & Shop)',
    blurb:
      'Online booking, automated reminders, and review systems for mobile and shop-based auto detailers.',
  },
  {
    name: 'Auto Repair & General Mechanics',
    blurb:
      'Appointment booking automation, service reminders, and review flows for general repair shops.',
  },
  {
    name: 'Body Shops & Collision Repair',
    blurb:
      'Lead capture, estimate follow-up, and reputation management for body shops and collision repair centers.',
  },
  {
    name: 'Tire Shops',
    blurb:
      'Online appointment booking and review automation for tire shops competing on local search.',
  },
]

const COMPACT = [
  {
    name: 'Windshield Repair & Replacement',
    blurb:
      'Fast booking automation and review requests for windshield repair and replacement businesses.',
  },
  {
    name: 'Oil Change & Lube Shops',
    blurb:
      'Rebooking automation and review systems for oil change and quick-lube operators.',
  },
  {
    name: 'Transmission & Drivetrain',
    blurb:
      'Lead capture and estimate follow-up for transmission and drivetrain specialists.',
  },
  {
    name: 'Towing & Roadside Assistance',
    blurb:
      'Emergency call handling and follow-up automation for towing and roadside assistance operators.',
  },
  {
    name: 'Car Wash (Self-Serve & Full-Service)',
    blurb:
      'Booking automation and review flows for full-service car wash operations.',
  },
  {
    name: 'RV & Camper Service',
    blurb:
      'Appointment booking and service reminders for RV and camper repair businesses.',
  },
  {
    name: 'Motorcycle & Powersports',
    blurb:
      'Booking automation and review systems for motorcycle and powersports service shops.',
  },
  {
    name: 'Fleet Maintenance',
    blurb:
      'CRM automation and recurring service scheduling for fleet maintenance operators.',
  },
]

// FAQs — visible body and FAQPage JSON-LD consume the same array (byte-identical).
// TODO: confirm supported shop management integrations with client before
//       publishing Q5.
const FAQS = [
  {
    q: 'What types of auto service businesses do you work with?',
    a: 'We work with repair shops, detailers, tire shops, body shops, oil change operators, towing businesses, and other auto service providers. If your business depends on bookings, local search, and customer reviews, the system applies.',
  },
  {
    q: 'Can customers book appointments online through this system?',
    a: 'Yes. The booking automation puts a real-time scheduling link on your website and in any automated message — so customers can book without calling during business hours. The appointment goes directly into your calendar.',
  },
  {
    q: 'How do you help with repeat business and retention?',
    a: 'The CRM and automation stack tracks customers and their service history, then triggers follow-up at the right interval — oil change reminders, seasonal service prompts, or a simple check-in. That sequence brings customers back without you manually tracking it.',
  },
  {
    q: 'How does review automation work for an auto shop?',
    a: 'After each job closes, the system sends a review request by text with a direct link to your Google Business Profile. The timing is configurable — typically same day or next day. No manual step required from the shop.',
  },
  {
    q: 'Do you integrate with shop management software?',
    a: "It depends on the software. We evaluate your current stack during onboarding and build integrations where they're available. If a direct integration isn't supported, we configure a workflow bridge.",
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

export default function AutoServicesIndustryPage() {
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
            { name: 'Auto Services', url: `/${META.slug}` },
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
            <SectionLabel index="00" label="Auto Services" tone="accent" />

            <h1 className="mt-8 max-w-3xl text-balance font-display text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-[4.5rem]">
              Customers Search for a Shop Online. Your System Should Close
              Them Before They Move On.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Auto service businesses win or lose on speed and reputation. We
              build the system that captures the inquiry, books the
              appointment, sends the reminder, and earns the review — running
              automatically between jobs.
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
              <ConstellationGlyph variant="wave" />
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── S01 — The problem ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="01" label="The problem" tone="muted" />
          <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Where auto shops lose business
          </h2>
          <ul className="mt-10 grid max-w-3xl gap-5">
            {[
              "A customer searches for a shop, lands on your site, and leaves because there's no fast way to book or ask a question.",
              'Appointment slots go unfilled because the booking process requires a phone call during business hours.',
              'Jobs get completed without a review request — and the competitor down the street with 200 more reviews keeps winning the search.',
              "Repeat customers drift away because there's no system to bring them back for oil changes, seasonal service, or follow-up work.",
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
            The service stack for auto businesses
          </h2>
          <div className="mt-12">
            <RelatedServicesGrid
              slugs={[
                'appointment-booking-automation',
                'ai-chatbots',
                'review-automation',
                'crm-automation',
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
            label="Shop types we work with"
            tone="muted"
          />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Built around your shop type
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

      {/* ───────── S04 — FAQ ───────── */}
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
