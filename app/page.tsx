import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/site/SectionLabel'
import { CTACard } from '@/components/site/CTACard'
import { CategoryCard } from '@/components/site/CategoryCard'
import { ServiceCard } from '@/components/site/ServiceCard'
import { ProcessStep } from '@/components/site/ProcessStep'
import { FAQ } from '@/components/site/FAQ'
import { IndustryChip } from '@/components/site/IndustryChip'
import { CTASection } from '@/components/site/CTASection'
import { GoogleReviewsSection } from '@/components/reviews/GoogleReviewsSection'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { SERVICE_GROUPS, servicesByGroup } from '@/lib/services'
import { INDUSTRIES } from '@/lib/industries'
import { HOME_FAQ } from '@/lib/faq'
import { faqPage, webPage } from '@/lib/schema'
import { SITE } from '@/lib/site'

export const metadata = {
  description: SITE.description,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const aiServices = servicesByGroup('ai')
  const webSeoServices = servicesByGroup('web-seo')
  const reputationServices = servicesByGroup('reputation')

  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: '/',
            name: `${SITE.name} — ${SITE.shortTagline}`,
            description: SITE.description,
          }),
          faqPage(HOME_FAQ),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid-faint bg-grid-48 opacity-50" />
        <div className="absolute inset-0 -z-10 glow-accent" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <div className="container-page grid items-start gap-12 py-20 md:py-24 lg:grid-cols-[1.5fr_1fr] lg:gap-20 lg:py-32">
          <div>
            <SectionLabel index="00" label="Sirius Systems" tone="accent" />

            <h1 className="mt-8 max-w-4xl text-balance font-display text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-[5rem]">
              Stop losing leads, reviews, and revenue to manual work.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Sirius Systems builds AI automation, smart websites, and
              reputation systems for local service businesses — capture more
              leads, book more jobs, earn more reviews, without adding
              headcount.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a discovery call
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/services" className="btn-ghost">
                See all 14 services
              </Link>
            </div>

            {/* Trust line — true on day one, no invented claims */}
            <p className="mt-12 max-w-md text-sm leading-relaxed text-muted">
              Built for local service businesses. Honest about what each piece
              does. No invented results, no rented testimonials, no rip-and-replace
              unless it actually loses you leads.
            </p>
          </div>

          <CTACard />
        </div>
      </section>

      {/* ───────── Problem framing ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="01" label="Where the money leaks" />
          <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Three problems most local service businesses live with — until they don&rsquo;t.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                eyebrow: 'Missed inbound',
                title: "Leads call when you're on a job.",
                body: "And don't call back. Voicemail-only is a daily revenue leak — same-day buyers go to whoever picked up.",
              },
              {
                eyebrow: 'Reputation drift',
                title: 'Reviews build up faster than you can respond.',
                body: 'Negative ones sit unanswered. Positive ones don’t turn into more reviews. Local rank slides quietly.',
              },
              {
                eyebrow: 'CRM theater',
                title: 'Your CRM has 8,000 contacts and nothing on autopilot.',
                body: 'Tools paid for, never used. The follow-up that would book the next job lives in someone’s head — or doesn’t.',
              },
            ].map((card) => (
              <article
                key={card.eyebrow}
                className="card p-6 transition-colors duration-base hover:border-border-strong md:p-7"
              >
                <p className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                  {card.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-xl leading-tight tracking-tight md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── What we build (4 category cards) ───────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 glow-accent-soft" />
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[2fr_3fr] md:items-end">
            <div>
              <SectionLabel index="02" label="What we build" />
              <h2 className="mt-6 max-w-md text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Three systems, one engine.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Adopt one. Adopt all three. Either way it&rsquo;s the same operator,
              the same system, and the same plain-English explanation of what
              we&rsquo;re doing and why.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {SERVICE_GROUPS.map((group) => (
              <CategoryCard
                key={group.id}
                group={group.id}
                label={group.label}
                blurb={group.blurb}
                href={`/${group.hubSlug}`}
                count={
                  group.id === 'capstone'
                    ? undefined
                    : servicesByGroup(group.id).length
                }
                featured={group.id === 'capstone'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── AI automation deep dive ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <SectionLabel index="03" label="AI Automation" />
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                The lead came in. Now what happens?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Every local service business is one missed call, one slow
                reply, one forgotten follow-up away from losing a job to
                whoever moved faster. AI automation closes that gap — answering
                in your voice, routing leads to your CRM, and booking the job
                while you&rsquo;re still on the ladder.
              </p>
              <Link
                href="/ai-automation"
                className="mt-8 inline-flex items-center gap-2 text-sm text-foreground link-underline"
              >
                The full AI automation playbook
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <ul className="grid gap-3 self-start">
              {aiServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="card card-hover group flex items-start justify-between gap-4 p-5"
                  >
                    <div>
                      <h3 className="font-display text-base leading-tight tracking-tight">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {s.oneLiner}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform duration-fast ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── Smart websites + Local SEO ───────── */}
      <section className="border-b border-border bg-surface/30">
        <div className="container-page py-20 md:py-28">
          <SectionLabel index="04" label="Smart Websites & Local SEO" />
          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <ul className="order-2 grid gap-3 self-start lg:order-1">
              {webSeoServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="card card-hover group flex items-start justify-between gap-4 p-5"
                  >
                    <div>
                      <h3 className="font-display text-base leading-tight tracking-tight">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {s.oneLiner}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform duration-fast ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="order-1 lg:order-2">
              <h2 className="max-w-xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                A site that does work, not just one that looks good.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Smart websites capture, qualify, book, and follow up — wired
                into Google Business Profile, local SEO, and AEO so you show
                up in both classic search and AI answer engines. Same engine,
                three surfaces.
              </p>
              <Link
                href="/local-seo-aeo"
                className="mt-8 inline-flex items-center gap-2 text-sm text-foreground link-underline"
              >
                How local SEO + AEO actually works
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Reputation ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <SectionLabel index="05" label="Reputation Systems" />
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <h2 className="max-w-xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                More reviews. Better responses. Real benchmarking.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Reputation isn&rsquo;t a star rating &mdash; it&rsquo;s a system. Ask the right
                customer at the right time, respond to every review on-brand,
                and benchmark against the five competitors actually pulling
                attention away from you.
              </p>
              <Link
                href="/reputation-management"
                className="mt-8 inline-flex items-center gap-2 text-sm text-foreground link-underline"
              >
                The reputation playbook
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <ul className="grid gap-3 self-start">
              {reputationServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="card card-hover group flex items-start justify-between gap-4 p-5"
                  >
                    <div>
                      <h3 className="font-display text-base leading-tight tracking-tight">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {s.oneLiner}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform duration-fast ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── What people say (Google reviews) ───────── */}
      <section className="border-b border-border bg-surface/30">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16">
            <div>
              <SectionLabel index="06" label="What people say" />
              <h2 className="mt-6 max-w-md text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Real reviews. When they&rsquo;re real.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
                Reviews shown here are pulled from our Google Business Profile
                &mdash; not retyped, not edited, not invented. If there&rsquo;s
                nothing to show yet, this section says so.
              </p>
            </div>
            <GoogleReviewsSection variant="carousel" />
          </div>
        </div>
      </section>

      {/* ───────── Who we help ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">
            <div>
              <SectionLabel index="07" label="Who we help" />
              <h2 className="mt-6 max-w-md text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl">
                Six industries we know well.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted">
              We build for the operators we&rsquo;ve already mapped. If you&rsquo;re
              outside this list and still a local service business, the
              systems usually fit &mdash; ask.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {INDUSTRIES.map((i) => (
              <IndustryChip key={i.slug} industry={i} />
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm text-foreground link-underline"
            >
              See how each industry maps to the system
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Why Sirius Systems ───────── */}
      <section className="border-b border-border bg-surface/30">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="08" label="Why Sirius Systems" />
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
            {[
              {
                title: 'One operator. One system.',
                body: 'No agency layer of account managers. The person who scopes the work is the person doing it.',
              },
              {
                title: 'Honest about what AI does &mdash; and where it breaks.',
                body: "We don't bolt 'AI-powered' onto everything. Some flows need a human. We tell you which.",
              },
              {
                title: 'Built for systems, not stunts.',
                body: 'Lead capture that compounds. Reviews that compound. Local visibility that compounds. Quietly.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l border-border-strong pl-5">
                <h3
                  className="font-display text-xl leading-tight tracking-tight md:text-2xl"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Process ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="09" label="How it works" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Three steps. No surprises.
          </h2>

          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
            <ProcessStep
              index={1}
              title="Audit"
              body="A twenty-minute walkthrough of where leads, reviews, and follow-up are leaking. You leave with a map &mdash; whether or not we work together."
            />
            <ProcessStep
              index={2}
              title="Build"
              body="We wire the system. Smart site, AI automation, reputation flows, GBP &mdash; whichever pieces fit. Nothing speculative; everything mapped to a leak."
            />
            <ProcessStep
              index={3}
              title="Run"
              body="The system runs. We tune what's underperforming and report what's working. You stop chasing the same problems every month."
            />
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="border-b border-border bg-surface/30">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel index="10" label="Questions" />
              <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Common ones, real answers.
              </h2>
            </div>
            <FAQ items={HOME_FAQ} />
          </div>
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <CTASection
        secondary={{ label: 'See services', href: '/services' }}
      />
    </>
  )
}
