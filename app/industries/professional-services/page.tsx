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
    'Professional Services Automation — AI Chatbots, Booking & Reviews | Sirius Systems',
  description:
    'AI chatbots, appointment booking automation, CRM, and reputation management for professional service firms — law, dental, medical, accounting, and more.',
  slug: 'industries/professional-services',
}

const FEATURED = [
  {
    name: 'Law Firms & Attorneys',
    blurb:
      'Intake automation, consultation booking, and reputation management for law firms competing on responsiveness and local search.',
  },
  {
    name: 'Dental Practices',
    blurb:
      'Appointment booking automation, no-show reduction, and review systems for dental practices.',
  },
  {
    name: 'Medical Practices & Clinics',
    blurb:
      'Patient intake automation, appointment reminders, and review flows for medical practices and independent clinics.',
  },
  {
    name: 'Accounting & CPA Firms',
    blurb:
      'Consultation booking automation and review systems for accounting firms and CPAs during and outside tax season.',
  },
]

const COMPACT = [
  {
    name: 'Chiropractic',
    blurb:
      'Appointment booking automation and review flows for chiropractic offices.',
  },
  {
    name: 'Physical Therapy & Rehab',
    blurb:
      'Booking automation and patient follow-up for physical therapy and rehab practices.',
  },
  {
    name: 'Optometry',
    blurb:
      'Appointment reminders, rebooking automation, and review systems for optometry practices.',
  },
  {
    name: 'Mental Health & Therapy',
    blurb:
      'Intake automation and no-show reduction for mental health and therapy practices.',
  },
  {
    name: 'Dermatology & Med Spas',
    blurb:
      'Booking automation, no-show reduction, and review flows for dermatology and med spa practices.',
  },
  {
    name: 'Financial Advisors & Wealth Management',
    blurb:
      'Lead qualification, consultation booking, and CRM automation for financial advisors.',
  },
  {
    name: 'Insurance Agencies',
    blurb:
      'Lead follow-up automation and CRM integration for independent insurance agencies.',
  },
  {
    name: 'Mortgage Brokers',
    blurb:
      'Lead nurturing, consultation booking, and review automation for mortgage brokers.',
  },
  {
    name: 'Veterinary Practices',
    blurb:
      'Appointment reminders, rebooking automation, and review requests for veterinary practices.',
  },
  {
    name: 'Tutoring & Test Prep',
    blurb:
      'Enrollment automation and session booking for tutoring and test prep businesses.',
  },
  {
    name: 'Coaching & Consulting',
    blurb:
      'Discovery call booking automation and CRM follow-up for coaches and consultants.',
  },
]

// FAQs. Visible body and FAQPage JSON-LD consume this same array (byte-identical).
// TODO: confirm with client which HIPAA-relevant platforms are being used
//       before publishing Q2.
// TODO: confirm supported scheduling integrations with client before publishing Q4.
const FAQS = [
  {
    q: 'What kinds of professional service businesses do you work with?',
    a: 'We work with licensed professionals and service firms — attorneys, dentists, medical practices, accountants, financial advisors, therapists, and more. If your business depends on scheduled appointments and local reputation, the system applies.',
  },
  {
    q: 'Is this HIPAA-compliant for medical and mental health practices?',
    a: 'This depends on the specific tools and integrations used in your setup. We evaluate compliance requirements during the discovery call and scope the system accordingly. We do not make blanket compliance guarantees.',
  },
  {
    q: 'How does the AI chatbot handle sensitive inquiries in a professional setting?',
    a: 'The chatbot is configured to qualify and route — not to provide advice or answer clinical and legal questions. It captures the inquiry, collects context, and routes to the right staff member or booking flow. The system is scoped and tested before going live.',
  },
  {
    q: 'Can this integrate with the scheduling system we already use?',
    a: "Typically yes. We evaluate your current tools during onboarding and build integrations where available. If a direct integration isn't supported, we configure a workflow that bridges the gap.",
  },
  {
    q: 'How do you handle no-show reduction?',
    a: 'The system sends automated appointment reminders by text and email at intervals you configure — typically 24 hours and 2 hours before the appointment. Confirmed appointments see significantly fewer no-shows than those managed manually.',
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

export default function ProfessionalServicesIndustryPage() {
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
            { name: 'Professional Services', url: `/${META.slug}` },
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
            <SectionLabel
              index="00"
              label="Professional Services"
              tone="accent"
            />

            <h1 className="mt-8 max-w-3xl text-balance font-display text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-[4.5rem]">
              More Qualified Appointments. Less Time Chasing Them.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Professional service firms lose potential clients to slow
              response times, phone tag, and no-shows. We build the system
              that captures inquiries instantly, qualifies them automatically,
              books the consultation, and follows up so you don&rsquo;t have
              to.
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
              <ConstellationGlyph variant="pulse" />
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── S01 — The problem ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="01" label="The problem" tone="muted" />
          <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Where professional service firms lose clients
          </h2>
          <ul className="mt-10 grid max-w-3xl gap-5">
            {[
              'Inquiry forms get submitted after hours and sit unanswered until morning — the prospect has already moved on.',
              "Phone tag replaces the consultation booking process, wasting staff time and losing clients who won't chase you back.",
              'No-shows burn capacity because reminders are manual, inconsistent, or nonexistent.',
              'Reviews accumulate slowly because asking feels awkward — but competitors with more reviews win more searches.',
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
            The client acquisition and retention stack
          </h2>
          <div className="mt-12">
            <RelatedServicesGrid
              slugs={[
                'ai-chatbots',
                'appointment-booking-automation',
                'crm-automation',
                'lead-generation-automation',
                'review-automation',
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
            label="Practice types we work with"
            tone="muted"
          />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Built for your specific practice type
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
