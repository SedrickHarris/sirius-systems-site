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
    'Beauty & Wellness Automation — Booking, Reviews & AI | Sirius Systems',
  description:
    'Appointment booking automation, rebooking flows, review systems, and AI chatbots for salons, med spas, personal trainers, day spas, and other beauty and wellness businesses.',
  slug: 'industries/beauty-wellness',
}

const FEATURED = [
  {
    name: 'Hair Salons & Stylists',
    blurb:
      'Online booking, automated rebooking reminders, and review flows for hair salons and independent stylists.',
  },
  {
    name: 'Med Spas & Aesthetics',
    blurb:
      'Consultation booking automation, no-show reduction, and reputation management for med spas and aesthetics businesses.',
  },
  {
    name: 'Personal Training & Fitness Studios',
    blurb:
      'Session booking automation, membership retention flows, and review systems for personal trainers and fitness studios.',
  },
  {
    name: 'Day Spas & Massage',
    blurb:
      'Online booking, rebooking automation, and review flows for day spas and massage therapists.',
  },
]

const COMPACT = [
  {
    name: 'Barbershops',
    blurb:
      'Online booking and review automation for barbershops competing on local search and reputation.',
  },
  {
    name: 'Nail Salons',
    blurb:
      'Appointment booking automation and review flows for nail salons.',
  },
  {
    name: 'Tattoo & Piercing Studios',
    blurb:
      'Consultation booking and review systems for tattoo and piercing studios.',
  },
  {
    name: 'Eyebrow & Lash Studios',
    blurb:
      'Online booking, automated reminders, and review automation for eyebrow and lash studios.',
  },
  {
    name: 'Tanning Salons',
    blurb:
      'Membership retention flows and review systems for tanning salons.',
  },
  {
    name: 'Yoga & Pilates Studios',
    blurb:
      'Class booking automation and client retention flows for yoga and Pilates studios.',
  },
  {
    name: 'Nutrition & Wellness Coaching',
    blurb:
      'Discovery call booking and CRM automation for nutrition and wellness coaches.',
  },
  {
    name: 'Acupuncture & Holistic Health',
    blurb:
      'Appointment booking automation and review flows for acupuncture and holistic health practitioners.',
  },
]

// FAQs — visible body and FAQPage JSON-LD consume this same array (byte-identical).
const FAQS = [
  {
    q: 'What types of beauty and wellness businesses do you work with?',
    a: 'We work with salons, barbershops, med spas, spas, fitness studios, personal trainers, and other appointment-based beauty and wellness businesses. If your business depends on repeat clients and local reputation, the system applies.',
  },
  {
    q: 'How does the rebooking automation work?',
    a: 'After an appointment is completed, the system sends a follow-up message at the interval you configure — typically 4 to 6 weeks for most beauty services. The message includes a direct booking link. This runs automatically without any manual step from you or your staff.',
  },
  {
    q: 'How do you reduce no-shows?',
    a: 'The system sends automated reminders by text at 24 hours and 2 hours before each appointment. Clients can confirm directly from the message. Confirmed appointments show significantly fewer no-shows than manual reminder systems.',
  },
  {
    q: 'Will this work for a solo stylist or only larger salons?',
    a: 'Both. The system scales to your size. A solo stylist benefits from automated rebooking and review requests the same way a multi-chair salon does. You start with the pieces that address your biggest gap.',
  },
  {
    q: 'How does the review automation work?',
    a: 'After each appointment, the system sends a review request by text with a direct link to your Google Business Profile. The timing is configurable. No manual follow-up needed from you.',
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

export default function BeautyWellnessIndustryPage() {
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
            { name: 'Beauty & Wellness', url: `/${META.slug}` },
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
            <SectionLabel index="00" label="Beauty & Wellness" tone="accent" />

            <h1 className="mt-8 max-w-3xl text-balance font-display text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-[4.5rem]">
              A Full Chair Starts with a System That Books While You Work.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Beauty and wellness businesses run on repeat clients and
              word-of-mouth. We build the system that books new clients
              automatically, brings existing ones back, reduces no-shows, and
              earns the reviews that make your chair the obvious choice.
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
              <ConstellationGlyph variant="beacon" />
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── S01 — The problem ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="01" label="The problem" tone="muted" />
          <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            What&rsquo;s keeping your calendar from being full
          </h2>
          <ul className="mt-10 grid max-w-3xl gap-5">
            {[
              'No-shows drain revenue because reminders are sent manually, inconsistently, or not at all.',
              "New clients book once and don't return because there's no rebooking system prompting them at the right interval.",
              'Happy clients leave without leaving a review because asking in person feels awkward and no one follows up.',
              'Booking requires a DM, a phone call, or a text — friction that costs you clients who go to whoever is easier to book.',
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
            The automation stack for beauty and wellness
          </h2>
          <div className="mt-12">
            <RelatedServicesGrid
              slugs={[
                'appointment-booking-automation',
                'ai-chatbots',
                'crm-automation',
                'review-automation',
                'smart-websites',
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
            label="Business types we work with"
            tone="muted"
          />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Built for your specific business type
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
