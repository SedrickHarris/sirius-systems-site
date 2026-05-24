import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  UserPlus,
  MessageSquare,
  GitBranch,
  CalendarCheck,
  Star,
  TrendingUp,
  Home,
  HardHat,
  Briefcase,
  Car,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Building2,
  UtensilsCrossed,
  GraduationCap,
  Heart,
  ShoppingBag,
  Cpu,
} from 'lucide-react'
import { FAQ } from '@/components/site/FAQ'
import { GoogleReviewsSection } from '@/components/reviews/GoogleReviewsSection'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { faqPage, webPage } from '@/lib/schema'
import { SITE } from '@/lib/site'
import { servicesByGroup } from '@/lib/services'
import { INDUSTRIES } from '@/lib/industries'
import { HOME_FAQ } from '@/lib/faq'

export const metadata = {
  description: SITE.description,
  alternates: { canonical: '/' },
}

// ─── Hero dashboard panel data ──────────────────────────────────────
// Illustrative pipeline rows: show HOW the system works, not real
// client metrics. No invented stats, no fabricated client results.
const HERO_PIPELINE = [
  { time: '12:42 PM', event: 'New lead captured',         status: 'Done' },
  { time: '12:42 PM', event: 'AI follow-up sent',         status: 'Done' },
  { time: '12:43 PM', event: 'Appointment booked',        status: 'Done' },
  { time: '04:15 PM', event: 'Review request scheduled',  status: 'Queued' },
] as const

// ─── Connected workflow steps ───────────────────────────────────────
const WORKFLOW = [
  { icon: UserPlus,      label: 'Lead Capture' },
  { icon: MessageSquare, label: 'AI Follow-Up' },
  { icon: GitBranch,     label: 'CRM Pipeline' },
  { icon: CalendarCheck, label: 'Appointment Booking' },
  { icon: Star,          label: 'Review Request' },
  { icon: TrendingUp,    label: 'Reputation Growth' },
] as const

// ─── Industry icons (lucide) keyed to INDUSTRIES.slug ───────────────
const INDUSTRY_ICON: Record<string, typeof Home> = {
  'home-services':              Home,
  'construction-contractors':   HardHat,
  'professional-services':      Briefcase,
  'auto-services':              Car,
  'beauty-wellness':            Sparkles,
  'healthcare-medical':         Stethoscope,
  'real-estate-property':       Building2,
  'hospitality-events':         UtensilsCrossed,
  'education-childcare':        GraduationCap,
  'community-faith-nonprofit':  Heart,
  'retail-local-commerce':      ShoppingBag,
  'technology-b2b':             Cpu,
}

export default function HomePage() {
  const aiServices         = servicesByGroup('ai')
  const webSeoServices     = servicesByGroup('web-seo')
  const reputationServices = servicesByGroup('reputation')

  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: '/',
            name: `${SITE.name}: ${SITE.shortTagline}`,
            description: SITE.description,
          }),
          faqPage(HOME_FAQ),
        ]}
      />

      {/* ───────────────── 1. HERO ───────────────── */}
      <section className="section-deep section-padding-lg relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">

          {/* Left: copy + CTA stack */}
          <div className="motion-fade-up">
            <span className="section-eyebrow">Sirius Systems</span>

            <h1 className="mt-6 hero-heading">
              Stop losing leads, reviews, and revenue to manual work.
            </h1>

            <p className="mt-7 hero-copy">
              Sirius Systems builds AI automation, smart websites, and
              reputation systems for local service businesses. Capture
              more leads, book more jobs, earn more reviews, without
              adding headcount.
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

            <p className="mt-12 max-w-md text-sm leading-relaxed text-white/70">
              Built for local service businesses. Honest about what each
              piece does. No invented results, no rented testimonials, no
              rip-and-replace unless it actually loses you leads.
            </p>
          </div>

          {/* Right: dashboard panel (selective glass, hero-only) */}
          <aside aria-label="Sample automation pipeline" className="dashboard-panel lg:p-7 xl:p-8">
            <header className="flex items-center justify-between gap-4 pb-3">
              <span className="dashboard-label">Live Pipeline · Today</span>
              <span className="status-pill">Live</span>
            </header>
            <div>
              {HERO_PIPELINE.map((row, i) => {
                const isQueued = row.status === 'Queued'
                return (
                  <div key={i} className="dashboard-row">
                    <span
                      aria-hidden
                      className="dashboard-dot"
                      style={
                        isQueued
                          ? { backgroundColor: 'var(--accent-gold)' }
                          : undefined
                      }
                    />
                    <span className="dashboard-label w-20 shrink-0">
                      {row.time}
                    </span>
                    <span className="dashboard-value flex-1 text-white">
                      {row.event}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-[11px] font-semibold"
                      style={{
                        color: isQueued ? 'var(--yellow)' : 'var(--blue-hover)',
                      }}
                    >
                      {isQueued ? null : <Check className="h-3 w-3" aria-hidden />}
                      {row.status}
                    </span>
                  </div>
                )
              })}
            </div>
            <p className="dashboard-label mt-4 text-white/40">
              Illustrative · your pipeline runs on the same rules
            </p>
          </aside>
        </div>
      </section>

      {/* ───────────────── 2. REVENUE LEAK / PROBLEM ───────────────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium text-center">
            <span className="section-eyebrow">Where the money leaks</span>
            <h2 className="mt-5 section-heading">
              Three problems most local service businesses live with. Until
              they don&rsquo;t.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                pill: 'Missed inbound',
                title: 'Leads call when you’re on a job.',
                body: "And don't call back. Voicemail-only is a daily revenue leak: same-day buyers go to whoever picked up.",
              },
              {
                pill: 'Reputation drift',
                title: 'Reviews build up faster than you can respond.',
                body: 'Negative ones sit unanswered. Positive ones don’t turn into more reviews. Local rank slides quietly.',
              },
              {
                pill: 'CRM theater',
                title: 'Your CRM has 8,000 contacts and nothing on autopilot.',
                body: 'Tools paid for, never used. The follow-up that would book the next job lives in someone’s head: or doesn’t.',
              },
            ].map((card) => (
              <article key={card.pill} className="card-feature hover-lift">
                <span className="badge-blue">{card.pill}</span>
                <h3 className="card-title mt-5">{card.title}</h3>
                <p className="card-copy mt-3">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── 3. THREE SYSTEMS, ONE ENGINE ───────────────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Three systems, one engine</span>
            <h2 className="mt-5 section-heading">
              The three pieces every local service business is missing.
            </h2>
            <p className="mt-5 section-copy">
              Adopt one. Adopt all three. Either way it&rsquo;s the same
              operator, the same system, and the same plain-English
              explanation of what we&rsquo;re doing and why.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                num: '01',
                title: 'AI &amp; Automation',
                body: 'Chatbots, voicebots, CRM and booking automation, lead generation: wired into one system that runs while you work.',
                bullets: [
                  'Missed-call text-back inside 60 seconds',
                  'CRM + booking automation, end-to-end',
                  'Lead capture across web, voice, SMS',
                ],
                href: '/ai-automation',
                cta: 'Inside AI automation',
              },
              {
                num: '02',
                title: 'Smart Websites &amp; Local SEO',
                body: 'A smart website plus the local-SEO, GBP, and AEO work that gets you ranked in Google AND AI answer engines.',
                bullets: [
                  'Conversion-first site architecture',
                  'GBP optimization &amp; AEO content',
                  'Tracking that ties traffic to booked jobs',
                ],
                href: '/smart-websites',
                cta: 'Inside smart websites',
              },
              {
                num: '03',
                title: 'Reputation Systems',
                body: 'Earn more reviews, respond to every one in your voice, and benchmark against the five competitors actually pulling attention.',
                bullets: [
                  'Review requests on every completed job',
                  'AI responses written in your tone',
                  'Competitor benchmarking on Google',
                ],
                href: '/reputation-management',
                cta: 'Inside reputation systems',
              },
            ].map((card) => (
              <article key={card.num} className="card-feature hover-lift flex flex-col">
                <span className="font-mono text-xs uppercase tracking-eyebrow text-[color:var(--blue-system)]">
                  System {card.num}
                </span>
                <h3
                  className="mt-3 font-display text-2xl leading-tight tracking-tight md:text-[1.75rem]"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
                <p
                  className="card-copy mt-3"
                  dangerouslySetInnerHTML={{ __html: card.body }}
                />
                <ul className="mt-5 space-y-2.5">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm leading-relaxed text-[color:var(--text-body)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--blue-system)]" aria-hidden />
                      <span dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Link href={card.href} className="btn-link">
                    {card.cta}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── 4. CONNECTED WORKFLOW ───────────────── */}
      <section className="section-radial section-padding">
        <div className="site-container">
          <div className="content-medium text-center mx-auto">
            <span className="section-eyebrow">How it runs</span>
            <h2 className="mt-5 section-heading">
              One connected workflow. Six things that stop slipping.
            </h2>
            <p className="mt-5 section-copy">
              Every lead enters one system and moves through it automatically,
              from first contact to a review that earns the next job.
            </p>
          </div>

          {/* Mobile / tablet: grid (no flow lines) */}
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:hidden">
            {WORKFLOW.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.label} className="flex flex-col items-center text-center">
                  <span className="system-node">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="dashboard-label mt-3">{`0${i + 1}`}</span>
                  <p className="mt-1 card-title text-white">{step.label}</p>
                </div>
              )
            })}
          </div>

          {/* Desktop: horizontal flow with connecting lines */}
          <ol className="mt-14 hidden lg:flex items-start gap-2">
            {WORKFLOW.map((step, i) => {
              const Icon = step.icon
              return (
                <li key={step.label} className="flex flex-1 items-start">
                  <div className="flex w-full flex-col items-center text-center">
                    <span className="system-node">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="dashboard-label mt-3">{`0${i + 1}`}</span>
                    <p className="mt-1 card-title text-white">{step.label}</p>
                  </div>
                  {i < WORKFLOW.length - 1 && (
                    <span
                      aria-hidden
                      className="system-flow-line mt-[1.0625rem] w-12 shrink-0"
                    />
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* ───────────────── 5. AI AUTOMATION (editorial split) ───────────────── */}
      <section className="section-light section-padding">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <span className="section-eyebrow">AI Automation</span>
            <h2 className="mt-5 section-heading">
              The lead came in. Now what happens?
            </h2>
            <p className="mt-5 section-copy">
              Every local service business is one missed call, one slow reply,
              one forgotten follow-up away from losing a job to whoever moved
              faster. AI automation closes that gap: answering in your
              voice, routing leads to your CRM, and booking the job while
              you&rsquo;re still on the ladder.
            </p>
            <div className="mt-8">
              <Link href="/ai-automation" className="btn-link">
                The full AI automation playbook
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>

          <ul className="grid gap-3 self-start">
            {aiServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="card-solid hover-lift group flex items-start justify-between gap-4 p-5"
                >
                  <div>
                    <h3 className="card-title">{s.name}</h3>
                    <p className="mt-1 card-copy">{s.oneLiner}</p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────────── 6. SMART WEBSITES + LOCAL SEO (split, reversed) ───────────────── */}
      <section className="section-soft section-padding">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">

          <ul className="order-2 grid gap-3 self-start lg:order-1">
            {webSeoServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="card-solid hover-lift group flex items-start justify-between gap-4 p-5"
                >
                  <div>
                    <h3 className="card-title">{s.name}</h3>
                    <p className="mt-1 card-copy">{s.oneLiner}</p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="order-1 lg:order-2">
            <span className="section-eyebrow">Smart Websites &amp; Local SEO</span>
            <h2 className="mt-5 section-heading">
              A site that does work, not just one that looks good.
            </h2>
            <p className="mt-5 section-copy">
              Smart websites capture, qualify, book, and follow up, wired
              into Google Business Profile, local SEO, and AEO so you
              show up in both classic search and AI answer engines. Same
              engine, three surfaces.
            </p>
            <div className="mt-8">
              <Link href="/local-seo-aeo" className="btn-link">
                How local SEO + AEO actually works
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 7. REPUTATION SYSTEMS (split) ───────────────── */}
      <section className="section-light section-padding">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <span className="section-eyebrow">Reputation Systems</span>
            <h2 className="mt-5 section-heading">
              More reviews. Better responses. Real benchmarking.
            </h2>
            <p className="mt-5 section-copy">
              Reputation isn&rsquo;t a star rating. It&rsquo;s a system.
              Ask the right customer at the right time, respond to every review
              on-brand, and benchmark against the five competitors actually
              pulling attention away from you.
            </p>
            <div className="mt-8">
              <Link href="/reputation-management" className="btn-link">
                The reputation playbook
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>

          <ul className="grid gap-3 self-start">
            {reputationServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="card-solid hover-lift group flex items-start justify-between gap-4 p-5"
                >
                  <div>
                    <h3 className="card-title">{s.name}</h3>
                    <p className="mt-1 card-copy">{s.oneLiner}</p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────────── 8. INDUSTRIES ───────────────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Industries</span>
            <h2 className="mt-5 section-heading">
              Built for local service businesses.
            </h2>
            <p className="mt-5 section-copy">
              Twelve industry hubs. Hundreds of sub-verticals beneath each. If
              your business depends on calls, bookings, and local reputation,
              the system applies.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => {
              const Icon = INDUSTRY_ICON[industry.slug] ?? Briefcase
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="card-solid hover-lift group flex h-full flex-col p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--bg-page)] text-[color:var(--blue-system)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-5 card-title">{industry.name}</h3>
                  <p className="mt-2 card-copy">{industry.oneLiner}</p>
                </Link>
              )
            })}

            {/* Catch-all card */}
            <div className="card-subtle flex h-full flex-col p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--bg-white)] text-[color:var(--blue-system)]">
                <Briefcase className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 card-title">Local service businesses</h3>
              <p className="mt-2 card-copy">
                Don&rsquo;t see your industry? Any local service business
                qualifies. The system applies the same way.
              </p>
              <Link href="/contact" className="btn-link mt-5">
                Ask if it fits your business
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── 9. HOW IT WORKS ───────────────── */}
      <section className="section-slate section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Process</span>
            <h2 className="mt-5 section-heading">
              Three steps. No surprises.
            </h2>
          </div>

          <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {[
              {
                num: '01',
                title: 'Audit',
                body: 'A twenty-minute walkthrough of where leads, reviews, and follow-up are leaking. You leave with a map: whether or not we work together.',
              },
              {
                num: '02',
                title: 'Build',
                body: 'We wire the system. Smart site, AI automation, reputation flows, GBP: whichever pieces fit. Nothing speculative; everything mapped to a leak.',
              },
              {
                num: '03',
                title: 'Run',
                body: "The system runs. We tune what's underperforming and report what's working. You stop chasing the same problems every month.",
              },
            ].map((step) => (
              <li key={step.num}>
                <span className="system-node">{step.num}</span>
                <h3 className="card-title mt-6 text-white">{step.title}</h3>
                <p className="card-copy mt-3">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────── 10. TRUST / REVIEW POLICY ───────────────── */}
      <section className="section-light section-padding">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="section-eyebrow">Trust policy</span>
            <h2 className="mt-5 section-heading">
              No fake testimonials. No inflated claims.
            </h2>
            <p className="mt-5 section-copy">
              We sell trust services. Faking trust signals on a site that
              sells trust services is a credibility failure, so we
              don&rsquo;t. Real proof gets added when verified. Until then,
              this section tells you what we won&rsquo;t do.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                'No invented results or rented testimonials',
                'No numbers we can’t back with a source',
                '“As featured in” strips we didn’t earn',
                'No guarantees we can’t actually enforce',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm leading-relaxed text-[color:var(--text-body)]">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--blue-system)]" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Google reviews surface: currently renders the neutral
              trust fallback per docs/site-os/inputs/do-not-invent-rules.md.
              When verified GBP data lands, this surface automatically swaps
              to real review cards. */}
          <div>
            <GoogleReviewsSection variant="carousel" />
          </div>
        </div>
      </section>

      {/* ───────────────── 11. FAQ ───────────────── */}
      <section className="section-soft section-padding">
        <div className="site-container grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="section-eyebrow">Questions</span>
            <h2 className="mt-5 section-heading">Common ones, real answers.</h2>
          </div>
          <FAQ items={HOME_FAQ} />
        </div>
      </section>

      {/* ───────────────── 12. FINAL CTA ───────────────── */}
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
              We&rsquo;ll map where leads, reviews, and follow-up are leaking
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
            <p className="mt-6 text-xs text-white/55">
              No automated nurture. No surprise emails. No sales pressure.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
