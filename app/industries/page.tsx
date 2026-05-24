import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Home,
  HardHat,
  Briefcase,
  Car,
  Sparkles,
  Stethoscope,
  Building2,
  UtensilsCrossed,
  GraduationCap,
  Heart,
  ShoppingBag,
  Cpu,
} from 'lucide-react'
import { FAQ } from '@/components/site/FAQ'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, faqPage } from '@/lib/schema'
import { INDUSTRIES } from '@/lib/industries'

const META = {
  title: 'Industries We Serve | Sirius Systems',
  description:
    'AI automation and growth systems for local service businesses across 12 industries — home services, healthcare, construction, auto, retail, and more.',
  slug: 'industries',
}

const SUB_VERTICAL_COUNT: Record<string, string> = {
  'home-services': '20 trades covered',
  'construction-contractors': '15 specialties covered',
  'professional-services': '15 practice types covered',
  'auto-services': '12 shop types covered',
  'beauty-wellness': '12 business types covered',
  'healthcare-medical': '12 practice types covered',
  'real-estate-property': '10 business types covered',
  'hospitality-events': '9 business types covered',
  'education-childcare': '10 program types covered',
  'community-faith-nonprofit': '8 organization types covered',
  'retail-local-commerce': '11 store types covered',
  'technology-b2b': '15 firm types covered',
}

const INDUSTRY_ICON: Record<string, typeof Home> = {
  'home-services': Home,
  'construction-contractors': HardHat,
  'professional-services': Briefcase,
  'auto-services': Car,
  'beauty-wellness': Sparkles,
  'healthcare-medical': Stethoscope,
  'real-estate-property': Building2,
  'hospitality-events': UtensilsCrossed,
  'education-childcare': GraduationCap,
  'community-faith-nonprofit': Heart,
  'retail-local-commerce': ShoppingBag,
  'technology-b2b': Cpu,
}

const FAQS = [
  {
    q: 'What industries do you work with?',
    a: 'We work with home service trades, contractors, professional service firms, auto service businesses, and beauty and wellness operators. Within those groups, we cover hundreds of specific business types.',
  },
  {
    q: 'Do you have experience with my specific trade or practice type?',
    a: 'We work across a wide range of local service businesses. The automation systems: booking, follow-up, reviews, CRM: apply consistently across trades and practice types. Visit the industry page for your group to see the specific services that map to your business.',
  },
  {
    q: "What if my industry isn't listed?",
    a: "The listed industries represent the most common business types we work with. If your business isn't listed, get in touch: if you're a local service business that depends on appointments, reviews, and local search, the system likely applies.",
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

      {/* ───────── Hero ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <span className="section-eyebrow">Industries</span>
          <h1 className="mt-6 hero-heading max-w-4xl">
            Built for the Businesses That Show Up and Do the Work
          </h1>
          <p className="mt-7 hero-copy">
            Sirius Systems is built for local service businesses. Not
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

      {/* ───────── Hub grid (light) ───────── */}
      <section
        id="industries-grid"
        className="section-light section-padding scroll-mt-20"
      >
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Choose your industry</span>
            <h2 className="mt-5 section-heading">
              Twelve industry groups. Hundreds of sub-verticals.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => {
              const Icon = INDUSTRY_ICON[industry.slug] ?? Briefcase
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="card-solid hover-lift group flex h-full flex-col p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      aria-hidden
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--blue-system)]/10 text-[color:var(--blue-system)]"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
                      aria-hidden
                    />
                  </div>
                  <h3 className="card-title mt-5">{industry.name}</h3>
                  <p className="card-copy mt-2">{industry.oneLiner}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-[color:var(--border-soft)] pt-4">
                    <span className="font-mono text-[11px] uppercase tracking-eyebrow text-[color:var(--text-muted)]">
                      {SUB_VERTICAL_COUNT[industry.slug] ?? ''}
                    </span>
                    <span className="text-sm text-[color:var(--blue-system)] group-hover:underline">
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────── How it works (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">How it works</span>
            <h2 className="mt-5 section-heading">
              Same system. Tuned to your industry.
            </h2>
            <div className="mt-8 space-y-5 section-copy">
              <p>
                Every local service business shares the same core problems:
                leads that go unanswered, jobs that don&rsquo;t turn
                into reviews, and manual processes that don&rsquo;t scale. The
                system we build addresses those in every industry.
              </p>
              <p>
                The industry pages show you which services map to your specific
                business type and how the pieces fit together for your trade,
                practice, or shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FAQ (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="mt-5 section-heading">Common questions</h2>
          </div>
          <FAQ items={FAQS} />
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
              We&rsquo;ll map where leads, reviews, or follow-up are leaking
              and show you the order of operations. Walk away with the plan,
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
