import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/site/SectionLabel'
import { FAQ } from '@/components/site/FAQ'
import { CTASection } from '@/components/site/CTASection'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'
import { INDUSTRIES } from '@/lib/industries'

const META = {
  title:
    'Industries We Serve — Local Business Automation | Sirius Systems',
  description:
    'Sirius Systems builds AI automation, booking systems, and reputation management for home service businesses, contractors, professional services, auto shops, and beauty and wellness businesses.',
  slug: 'industries',
}

// Static sub-vertical counts per hub. Kept in code so they're searchable
// and easy to update alongside the hub pages — not pulled from a count of
// IndustrySubCards (which would require parsing each hub page or
// duplicating the lists into shared data).
const SUB_VERTICAL_COUNT: Record<string, string> = {
  'home-services': '20 trades covered',
  contractors: '15 specialties covered',
  'professional-services': '15 practice types covered',
  'auto-services': '12 shop types covered',
  'beauty-wellness': '12 business types covered',
}

const FAQS = [
  {
    q: 'What industries do you work with?',
    a: 'We work with home service trades, contractors, professional service firms, auto service businesses, and beauty and wellness operators. Within those groups, we cover hundreds of specific business types.',
  },
  {
    q: 'Do you have experience with my specific trade or practice type?',
    a: 'We work across a wide range of local service businesses. The automation systems — booking, follow-up, reviews, CRM — apply consistently across trades and practice types. Visit the industry page for your group to see the specific services that map to your business.',
  },
  {
    q: "What if my industry isn't listed?",
    a: "The listed industries represent the most common business types we work with. If your business isn't listed, get in touch — if you're a local service business that depends on appointments, reviews, and local search, the system likely applies.",
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

export default function IndustriesIndexPage() {
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
            { name: 'Industries', url: `/${META.slug}` },
          ]),
          faqPage(FAQS),
        ]}
      />

      {/* ───────── S00 — Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid-faint bg-grid-48 opacity-50" />
        <div className="absolute inset-0 -z-10 glow-accent" />

        <div className="container-page py-20 md:py-24 lg:py-28">
          <SectionLabel index="00" label="Industries" tone="accent" />

          <h1 className="mt-8 max-w-4xl text-balance font-display text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-[4.5rem]">
            Built for the Businesses That Show Up and Do the Work
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Sirius Systems is built for local service businesses — not
            enterprise SaaS, not e-commerce. Every system we build is designed
            around the way trades, practices, shops, and studios actually run.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="#industries-grid" className="btn-primary">
              Find My Industry
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/services" className="btn-ghost">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── S01 — Industry hub cards ───────── */}
      <section
        id="industries-grid"
        className="border-b border-border bg-background-alt scroll-mt-20"
      >
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="01" label="Choose your industry" tone="muted" />
          <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Five industry groups. Hundreds of sub-verticals.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="card card-hover group flex h-full flex-col p-6 md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl leading-tight tracking-tight md:text-2xl">
                    {industry.name}
                  </h3>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-muted transition-transform duration-fast ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {industry.oneLiner}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                    {SUB_VERTICAL_COUNT[industry.slug] ?? ''}
                  </span>
                  <span className="text-sm text-foreground/85 group-hover:text-foreground">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── S02 — How it works ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="02" label="How it works" tone="muted" />
          <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Same system. Tuned to your industry.
          </h2>
          <div className="mt-8 grid max-w-3xl gap-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Every local service business shares the same core problems —
              leads that go unanswered, jobs that don&rsquo;t turn into
              reviews, and manual processes that don&rsquo;t scale. The system
              we build addresses those in every industry.
            </p>
            <p>
              The industry pages show you which services map to your specific
              business type and how the pieces fit together for your trade,
              practice, or shop.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── S03 — FAQ ───────── */}
      <section className="border-b border-border bg-background-alt">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel index="03" label="FAQ" tone="muted" />
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
