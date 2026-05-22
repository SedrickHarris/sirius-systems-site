import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Workflow,
  LayoutDashboard,
  Layers,
} from 'lucide-react'
import { ServiceCard } from '@/components/site/ServiceCard'
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

export const metadata: Metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: '/services' },
  openGraph: {
    title: PAGE.title,
    description: PAGE.description,
    url: '/services',
  },
}

// Group icon + a 1-line elevator pitch for the 3 pillars + capstone.
const GROUP_VISUAL: Record<string, { Icon: typeof Workflow; tagline: string }> = {
  ai: {
    Icon: Workflow,
    tagline: 'Capture, qualify, book, follow up: without manual work.',
  },
  'web-seo': {
    Icon: LayoutDashboard,
    tagline: 'Get found in Google AND in AI answer engines.',
  },
  reputation: {
    Icon: ShieldCheck,
    tagline: 'More reviews. Better responses. Real benchmarking.',
  },
  capstone: {
    Icon: Layers,
    tagline: 'All three pillars running as one engine.',
  },
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
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <span className="section-eyebrow">Services</span>
            <h1 className="mt-6 hero-heading">
              Fourteen services. One operator. One system.
            </h1>
            <p className="mt-7 hero-copy">
              Pick one to start. Pick the whole engine. The pieces are designed
              to compound: the more of them you run, the less manual the
              business feels.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a discovery call
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={`/${capstone.slug}`} className="btn-ghost">
                See the all-in-one system
              </Link>
            </div>
          </div>

          {/* On this page: TOC card */}
          <aside aria-label="Service groups on this page" className="card-glass">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              On this page
            </span>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICE_GROUPS.map((group, i) => {
                const visual = GROUP_VISUAL[group.id]
                const Icon = visual.Icon
                return (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="group flex items-center gap-3 rounded-lg p-2 -m-2 transition-colors hover:bg-white/5"
                    >
                      <span
                        aria-hidden
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[color:var(--blue-light)]"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="flex flex-1 items-center justify-between gap-2">
                        <span>
                          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-white/55">
                            0{i + 1}
                          </span>
                          <span className="ml-2 text-white">{group.label}</span>
                        </span>
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                          aria-hidden
                        />
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </aside>
        </div>
      </section>

      {/* ───────── Group A: AI & Automation (light) ───────── */}
      <section id="ai" className="section-light section-padding scroll-mt-20">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">AI &amp; Automation</span>
            <h2 className="mt-5 section-heading">
              Capture, qualify, book, follow up.
            </h2>
            <p className="mt-5 section-copy">
              {GROUP_VISUAL.ai.tagline} Six services, one set of opinions about
              how to wire them together.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicesByGroup('ai').map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Group B: Smart Websites & Local SEO (soft) ───────── */}
      <section
        id="web-seo"
        className="section-soft section-padding scroll-mt-20"
      >
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Smart Websites &amp; Local SEO</span>
            <h2 className="mt-5 section-heading">Get found. Get chosen.</h2>
            <p className="mt-5 section-copy">
              {GROUP_VISUAL['web-seo'].tagline} A smart website plus the
              local-SEO + GBP + AEO work that gets you ranked in both classic
              search and answer engines.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicesByGroup('web-seo').map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Group C: Reputation Systems (light) ───────── */}
      <section
        id="reputation"
        className="section-light section-padding scroll-mt-20"
      >
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Reputation Systems</span>
            <h2 className="mt-5 section-heading">
              More reviews. Better responses. Real signal.
            </h2>
            <p className="mt-5 section-copy">
              {GROUP_VISUAL.reputation.tagline} Earn more reviews, respond to
              the hard ones with the right tone, and benchmark against the five
              competitors actually pulling attention away from you.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicesByGroup('reputation').map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Capstone callout (slate dark) ───────── */}
      <section
        id="capstone"
        className="section-slate section-padding scroll-mt-20"
      >
        <div className="site-container grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <span className="section-eyebrow">Capstone</span>
            <h2 className="mt-5 section-heading">
              The whole engine, running as one system.
            </h2>
            <p className="mt-5 section-copy">
              AI automation, smart website, reputation, local SEO + AEO. One
              operator, one quote, one weekly report. Run it for a year and the
              business stops feeling manual.
            </p>
            <div className="mt-10">
              <Link href={`/${capstone.slug}`} className="btn-primary">
                Inside the all-in-one growth system
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <aside aria-label="What the all-in-one system includes" className="card-glass">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              What you get
            </span>
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
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent-teal)]" aria-hidden />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ───────── Industries quick links (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Industry fits</span>
            <h2 className="mt-5 section-heading">Built for these five.</h2>
            <p className="mt-5 section-copy">
              Each industry page maps the most useful services for that
              business shape: not all fourteen, the right four or five.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {INDUSTRIES.map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="badge-premium inline-flex items-center gap-2 px-4 py-2 transition-colors duration-fast hover:border-border-strong hover:bg-surface-2"
              >
                {i.name}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            ))}
            <Link
              href="/industries"
              className="ml-1 btn-link"
            >
              All industries
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
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
              Map your current setup. Walk away with the order of operations
              for the system, whether or not we work together.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book the audit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/industries" className="btn-ghost">
                See industries
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
