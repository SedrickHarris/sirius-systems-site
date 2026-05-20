import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/site/SectionLabel'
import { ProcessStep } from '@/components/site/ProcessStep'
import { CTASection } from '@/components/site/CTASection'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { breadcrumbList, webPage } from '@/lib/schema'
import { SITE } from '@/lib/site'

const PAGE = {
  title: 'About',
  description: `${SITE.name} builds AI automation, smart websites, and reputation systems for local service businesses. One operator, one system, no rented agency layer.`,
}

export const metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: '/about' },
}

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
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid-faint bg-grid-48 opacity-40" />
        <div className="absolute inset-0 -z-10 glow-accent" />

        <div className="container-page grid items-start gap-12 py-20 md:py-24 lg:grid-cols-[1.5fr_1fr] lg:gap-20 lg:py-28">
          <div>
            <SectionLabel index="00" label="About" tone="accent" />
            <h1 className="mt-8 max-w-3xl text-balance font-display text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-[4.5rem]">
              A growth system, not an agency layer.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              {SITE.name} exists to do one thing well: capture, qualify, book,
              and follow up &mdash; for local service businesses that have
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

          {/* Trust/values card */}
          <aside className="card relative overflow-hidden p-7 md:p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                What we won&rsquo;t do
              </div>
              <h2 className="mt-4 font-display text-xl leading-tight tracking-tight md:text-2xl">
                Things you&rsquo;ll never see on this site.
              </h2>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  'Invented testimonials or stock-photo "clients"',
                  'Numbers we can\'t back with a source',
                  '"As featured in" strips we didn\'t earn',
                  'Guarantees we can\'t actually enforce',
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
              <p className="mt-6 text-xs leading-relaxed text-muted">
                We sell trust services. Faking trust signals on a site that
                sells trust services is a credibility failure. So we don&rsquo;t.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── Why this exists ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <SectionLabel index="01" label="Why this exists" />
            </div>
            <div>
              <h2 className="max-w-3xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Most local service businesses don&rsquo;t need another tool. They
                need fewer tools, doing more of the work.
              </h2>
              <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
                {/* TODO: replace with confirmed brand story when client provides
                    (content-needed-from-client.md item 1.12 — final positioning). */}
                <p>
                  Owner-operators in home services, cleaning, junk removal,
                  real estate, contracting, coaching &mdash; the same pattern.
                  Three subscriptions for tools that don&rsquo;t talk to each other.
                  Missed-call voicemails that never get a callback. Reviews
                  piling up faster than anyone can respond. A CRM with eight
                  thousand contacts and not one automation running against them.
                </p>
                <p>
                  Sirius Systems was built to collapse that mess into a single
                  growth system &mdash; AI automation, smart websites, and
                  reputation work that actually compounds, run by one operator
                  who can explain every piece in plain English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Founder ───────── */}
      <section className="border-b border-border bg-surface/30">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="02" label="Founder" />
          <div className="mt-8 grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
            <div>
              <h2 className="max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Sedrick Harris.
              </h2>
              <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
                {/* TODO: replace with the founder bio confirmed by the client
                    (content-needed-from-client.md item 1.11). The placeholder
                    below is intentionally fact-light so we don't invent any
                    biographical claims. */}
                <p>
                  Founder and operator of {SITE.name}. Builds AI automation,
                  smart websites, and reputation systems for local service
                  businesses &mdash; the same kind of operators he grew up
                  around.
                </p>
                <p className="text-sm text-muted/80">
                  <em>
                    Full bio + headshot pending &mdash; tracked at
                    {' '}
                    <code className="rounded bg-secondary/60 px-1 py-0.5 text-xs text-secondary-foreground">
                      docs/site-os/inputs/content-needed-from-client.md
                    </code>
                    {' '}item 1.11.
                  </em>
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href={SITE.social.instagramFounder}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  Instagram
                </a>
                <span aria-hidden className="text-border-strong">·</span>
                <a
                  href={SITE.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Headshot placeholder — a constellation panel */}
            <div className="card relative aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 bg-grid-faint bg-grid-32 opacity-60" />
              <div className="absolute inset-0 glow-accent" />
              <div className="relative flex h-full items-end p-6">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-muted/80">
                  Headshot pending
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Mission ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="03" label="Mission" />
          <h2 className="mt-6 max-w-4xl text-balance font-display text-4xl leading-[1.06] tracking-tight md:text-5xl lg:text-6xl">
            Help local service businesses grow without adding headcount, taking out loans, or buying tools they&rsquo;ll never use.
          </h2>
        </div>
      </section>

      {/* ───────── Who we help ───────── */}
      <section className="border-b border-border bg-surface/30">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="04" label="Who we help" />
          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <h2 className="text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl">
              Owner-operators of local service businesses.
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Typically $250k&ndash;$5M in annual revenue, 1&ndash;25 employees,
                stretched thin on follow-up, reviews, and scheduling. Technical
                enough to know what a CRM is &mdash; not technical enough to
                debug an API. That&rsquo;s the right fit.
              </p>
              <p>
                If you&rsquo;re enterprise, or pre-revenue, or shopping for the
                cheapest agency on Upwork &mdash; we&rsquo;re not the right fit, and
                we&rsquo;ll say so on the call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Process ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="05" label="How it works" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Three steps. No surprises.
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
            <ProcessStep
              index={1}
              title="Audit"
              body="Twenty minutes. We walk through where leads, reviews, and follow-up are leaking. You leave with a written map."
            />
            <ProcessStep
              index={2}
              title="Build"
              body="We scope the system to the leaks &mdash; not the catalog. Sometimes that's one piece. Sometimes the whole engine."
            />
            <ProcessStep
              index={3}
              title="Run"
              body="The system runs. We tune what underperforms and report what works. You stop chasing the same problems every month."
            />
          </div>
        </div>
      </section>

      {/* ───────── Ecosystem note ───────── */}
      <section className="border-b border-border bg-surface/30">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="06" label="The ecosystem" />
          <div className="mt-8 grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <h2 className="text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl">
              Sister brands, not the same brand.
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Sedrick also operates ClickVSG, Sirius Site Studio, and Review
                Scraper. They share a worldview about how local service
                businesses should be built &mdash; they are not the same brand
                as Sirius Systems, and nothing on this site is a claim about
                their work or vice-versa.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href={SITE.ecosystem.clickvsg}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1.5"
                >
                  ClickVSG
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <a
                  href={SITE.ecosystem.siriusSiteStudio}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1.5"
                >
                  Sirius Site Studio
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
                <a
                  href={SITE.ecosystem.reviewScraper}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1.5"
                >
                  Review Scraper
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Talk to the operator, not an account manager"
        headline="Twenty minutes. A real audit. No pitch."
        body="Walk away knowing what to automate first, what to leave alone, and the right order of operations — whether or not we work together."
        secondary={{ label: 'See services', href: '/services' }}
      />
    </>
  )
}
