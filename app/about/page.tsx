import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  X as XIcon,
} from 'lucide-react'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { breadcrumbList, webPage } from '@/lib/schema'
import { SITE } from '@/lib/site'

const PAGE = {
  title: 'About',
  description: `${SITE.name} builds AI automation, smart websites, and reputation systems for local service businesses. One operator, one system, no rented agency layer.`,
}

export const metadata: Metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: '/about' },
  openGraph: {
    title: PAGE.title,
    description: PAGE.description,
    url: '/about',
    images: ['/og/default.webp'],
  },
}

const NEVER_LIST = [
  'Invented testimonials or stock-photo "clients"',
  "Numbers we can't back with a source",
  '"As featured in" strips we didn\'t earn',
  "Guarantees we can't actually enforce",
]

const PROCESS = [
  {
    num: '01',
    title: 'Audit',
    body: 'Twenty minutes. We walk through where leads, reviews, and follow-up are leaking. You leave with a written map.',
  },
  {
    num: '02',
    title: 'Build',
    body: "We scope the system to the leaks: not the catalog. Sometimes that's one piece. Sometimes the whole engine.",
  },
  {
    num: '03',
    title: 'Run',
    body: 'The system runs. We tune what underperforms and report what works. You stop chasing the same problems every month.',
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: '/about',
            name: `${PAGE.title} | ${SITE.name}`,
            description: PAGE.description,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
          ]),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="motion-fade-up">
            <span className="section-eyebrow">About</span>
            <h1 className="mt-6 hero-heading">
              A growth system, not an agency layer.
            </h1>
            <p className="mt-7 hero-copy">
              {SITE.name} exists to do one thing well: capture, qualify, book,
              and follow up. For local service businesses that have
              outgrown a website-only setup.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a discovery call
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/services" className="btn-ghost">
                See what we build
              </Link>
            </div>
          </div>

          {/* What we won't do: selective glass trust card */}
          <aside aria-label="Things Sirius Systems will not do" className="card-glass">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              What we won&rsquo;t do
            </span>
            <ul className="mt-5 space-y-3">
              {NEVER_LIST.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80"
                  >
                    <XIcon className="h-2.5 w-2.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/85">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-white/55">
              We sell trust services. Faking trust signals on a site that sells
              trust services is a credibility failure. So we don&rsquo;t.
            </p>
          </aside>
        </div>
      </section>

      {/* ───────── Why this exists (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <span className="section-eyebrow">Why this exists</span>
          </div>
          <div>
            <h2 className="section-heading max-w-3xl">
              Most local service businesses don&rsquo;t need another tool. They
              need fewer tools, doing more of the work.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 section-copy">
              <p>
                Owner-operators in home services, contractors, professional
                services, auto shops, beauty and wellness: the same
                pattern. Three subscriptions for tools that don&rsquo;t talk to
                each other. Missed-call voicemails that never get a callback.
                Reviews piling up faster than anyone can respond. A CRM with
                eight thousand contacts and not one automation running against
                them.
              </p>
              <p>
                {SITE.name} was built to collapse that mess into a single
                growth system: AI automation, smart websites, and
                reputation work that actually compounds, run by one operator
                who can explain every piece in plain English.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Founder (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <span className="section-eyebrow">Founder</span>
          <div className="mt-8 grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <div>
              <h2 className="section-heading">Sedrick Harris.</h2>
              <div className="mt-8 max-w-xl space-y-4 section-copy">
                <p>
                  Sedrick is the founder of Sirius Systems, an AI automation
                  and smart website company built to help businesses capture
                  more leads, respond faster, and grow with less manual work.
                </p>
                <p>
                  With a background in digital marketing, SEO, website
                  strategy, automation, and AI-powered business systems,
                  Sedrick helps business owners turn their websites into
                  active growth tools instead of static online brochures. His
                  work focuses on practical solutions that improve visibility,
                  lead generation, customer follow-up, online reviews, and
                  day-to-day business operations.
                </p>
                <p>
                  Sedrick created Sirius Systems to give businesses access to
                  the same type of automation, search visibility, and customer
                  engagement tools that larger companies use, but in a way
                  that is simple, clear, and built around real business
                  outcomes.
                </p>
                <p>
                  His approach combines smart website design, AI chatbots, AI
                  voice assistants, review automation, CRM workflows, and SEO
                  strategy into one connected system. The goal is simple: help
                  business owners stop missing opportunities, build trust
                  faster, and create a more reliable path from website visitor
                  to booked customer.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href={SITE.social.instagramFounder}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link"
                >
                  Instagram
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <span aria-hidden className="text-[color:var(--border-strong)]">·</span>
                <a
                  href={SITE.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link"
                >
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>

            {/* Founder headshot */}
            <div className="card-subtle relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/founder/sedrick-harris-founder.webp"
                alt="Sedrick Harris, founder of Sirius Systems"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Mission (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <span className="section-eyebrow">Mission</span>
          <h2 className="mt-5 max-w-4xl text-balance font-display text-4xl leading-[1.06] tracking-tight md:text-5xl lg:text-6xl">
            Help local service businesses grow without adding headcount, taking
            out loans, or buying tools they&rsquo;ll never use.
          </h2>
        </div>
      </section>

      {/* ───────── Who we help (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <span className="section-eyebrow">Who we help</span>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <h2 className="section-heading">
              Owner-operators of local service businesses.
            </h2>
            <div className="space-y-5 section-copy">
              <p>
                Typically $250k to $5M in annual revenue, 1 to 25
                employees, stretched thin on follow-up, reviews, and
                scheduling. Technical enough to know what a CRM is, not
                technical enough to debug an API. That&rsquo;s the right fit.
              </p>
              <p>
                If you&rsquo;re enterprise, or pre-revenue, or shopping for the
                cheapest agency on Upwork. We&rsquo;re not the right
                fit, and we&rsquo;ll say so on the call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Process (slate dark) ───────── */}
      <section className="section-slate section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">How it works</span>
            <h2 className="mt-5 section-heading">Three steps. No surprises.</h2>
          </div>
          <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {PROCESS.map((step) => (
              <li key={step.num}>
                <span className="system-node">{step.num}</span>
                <h3 className="card-title mt-6 text-white">{step.title}</h3>
                <p className="card-copy mt-3">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Ecosystem note (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <span className="section-eyebrow">The ecosystem</span>
          <div className="mt-8 grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <h2 className="section-heading">
              Sister brands, not the same brand.
            </h2>
            <div className="space-y-5 section-copy">
              <p>
                Sedrick also operates ClickVSG, Sirius Site Studio, and Review
                Scraper. They share a worldview about how local service
                businesses should be built. They are not the same brand
                as {SITE.name}, and nothing on this site is a claim about their
                work or vice-versa.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href={SITE.ecosystem.clickvsg}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link"
                >
                  ClickVSG
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <a
                  href={SITE.ecosystem.siriusSiteStudio}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link"
                >
                  Sirius Site Studio
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <a
                  href={SITE.ecosystem.reviewScraper}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link"
                >
                  Review Scraper
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="cta-deep">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              Talk to the operator, not an account manager
            </span>
            <h2 className="mt-5 section-heading max-w-3xl text-balance">
              Twenty minutes. A real audit. No pitch.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Walk away knowing what to automate first, what to leave alone,
              and the right order of operations, whether or not we work
              together.
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
