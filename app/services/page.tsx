import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/site/SectionLabel'
import { ServiceCard } from '@/components/site/ServiceCard'
import { IndustryChip } from '@/components/site/IndustryChip'
import { CTASection } from '@/components/site/CTASection'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import {
  SERVICES,
  SERVICE_GROUPS,
  servicesByGroup,
} from '@/lib/services'
import { INDUSTRIES } from '@/lib/industries'
import { breadcrumbList, webPage } from '@/lib/schema'
import { SITE } from '@/lib/site'

const PAGE = {
  title: 'Services',
  description: `Every service from ${SITE.name}: AI chatbots and voicebots, CRM and booking automation, smart websites, reputation, review automation, local SEO and AEO.`,
}

export const metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  const capstone = SERVICES.find(
    (s) => s.slug === 'all-in-one-business-growth-system',
  )!

  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: '/services',
            name: `${PAGE.title} | ${SITE.name}`,
            description: PAGE.description,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
          ]),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid-faint bg-grid-48 opacity-40" />
        <div className="absolute inset-0 -z-10 glow-accent" />

        <div className="container-page grid items-start gap-12 py-20 md:py-24 lg:grid-cols-[1.6fr_1fr] lg:gap-20 lg:py-28">
          <div>
            <SectionLabel index="00" label="Services" tone="accent" />
            <h1 className="mt-8 max-w-3xl text-balance font-display text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-[4.5rem]">
              Fourteen services. One operator. One system.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Pick one to start. Pick the whole engine. The pieces are designed
              to compound &mdash; the more of them you run, the less manual the
              business feels.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Map your system in 20 min
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={`/${capstone.slug}`}
                className="btn-ghost"
              >
                See the all-in-one system
              </Link>
            </div>
          </div>

          {/* Index card */}
          <aside className="card p-7 md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
              On this page
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICE_GROUPS.map((group, i) => (
                <li key={group.id} className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a
                    href={`#${group.id}`}
                    className="link-underline text-foreground/90"
                  >
                    {group.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ───────── Group A — AI & Automation ───────── */}
      <section id="ai" className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end md:gap-16">
            <div>
              <SectionLabel index="01" label="AI & Automation" />
              <h2 className="mt-6 text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Capture, qualify, book, follow up.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Chatbots, voicebots, CRM, booking, and lead-gen &mdash; wired
              into one system that runs while you work. Six services, one set
              of opinions about how to wire them together.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicesByGroup('ai').map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Group B — Smart Websites & Local SEO ───────── */}
      <section id="web-seo" className="border-b border-border bg-surface/30">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end md:gap-16">
            <div>
              <SectionLabel index="02" label="Smart Websites & Local SEO" />
              <h2 className="mt-6 text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Get found. Get chosen.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              A smart website plus the local-SEO + GBP + AEO work that gets
              you ranking in both Google AND in AI answer engines &mdash;
              ChatGPT, Perplexity, AI Overviews.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicesByGroup('web-seo').map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Group C — Reputation ───────── */}
      <section id="reputation" className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end md:gap-16">
            <div>
              <SectionLabel index="03" label="Reputation Systems" />
              <h2 className="mt-6 text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                More reviews. Better responses. Real signal.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Earn more reviews, respond well to the hard ones, and benchmark
              against the five competitors actually pulling attention away
              from you.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicesByGroup('reputation').map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Capstone callout ───────── */}
      <section id="capstone" className="relative overflow-hidden border-b border-border bg-surface/50">
        <div className="absolute inset-0 -z-10 glow-accent" />
        <div className="absolute inset-0 -z-10 bg-grid-faint bg-grid-32 opacity-30" />

        <div className="container-page py-20 md:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <SectionLabel index="04" label="Capstone" tone="accent" />
              <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl leading-[1.04] tracking-tight md:text-5xl lg:text-6xl">
                The whole engine, running as one system.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                AI automation, smart website, reputation, local SEO + AEO.
                One operator, one quote, one weekly report. Run it for a
                year and the business stops feeling manual.
              </p>
              <Link
                href={`/${capstone.slug}`}
                className="btn-primary mt-10"
              >
                Inside the all-in-one growth system
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <aside className="card relative overflow-hidden p-7 md:p-8">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
              <div className="relative">
                <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                  What you get
                </div>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    'AI lead capture across chat, voice, and forms',
                    'CRM + booking automation wired end-to-end',
                    'Smart website tuned for local search',
                    'GBP, local SEO, and AEO managed in one place',
                    'Review automation + AI responses on-brand',
                    'Weekly written report. Honest about what worked.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-accent"
                      />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ───────── Industries quick links ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end md:gap-16">
            <div>
              <SectionLabel index="05" label="Industry fits" />
              <h2 className="mt-6 text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl">
                Built for these six.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted">
              Each industry page maps the most useful services for that
              business shape &mdash; not all fourteen, the right four or five.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {INDUSTRIES.map((i) => (
              <IndustryChip key={i.slug} industry={i} />
            ))}
            <Link
              href="/industries"
              className="ml-1 inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
            >
              All industries
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
