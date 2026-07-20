import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  X,
  Zap,
  ShieldCheck,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/site/Breadcrumbs'
import { FAQ } from '@/components/site/FAQ'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList, serviceSchema, faqPage } from '@/lib/schema'
import { VERTICALS } from '@/lib/verticals'

// ─────────────────────────────────────────────────────────────────────────────
// /plumber-growth-system — Growth System product page (doc 21 §6).
//
// This is a dedicated conversion page for the $297/month Plumber Growth System.
// It is NOT a service page: its CTAs route to the sales funnel (/watch, /book),
// never to /contact, to keep the Growth System sales pipeline separate from
// general agency inquiries (doc WEB-015). It is fully indexed (doc §11).
// ─────────────────────────────────────────────────────────────────────────────

const V = VERTICALS.plumbing

// Booking CTA carries the vertical UTM so GHL tags the contact on booking
// (doc §7.1 / §9.2). Primary hero CTA sends the prospect to the VSSL first.
const BOOK_HREF = `/book?utm_source=product-page&utm_medium=cta&utm_campaign=${V.campaign}`
const WATCH_HREF = `/watch?v=${V.key}`

const META_TITLE = 'Plumber Growth System | Sirius Systems'
const META_DESCRIPTION =
  'A professionally managed plumbing website with instant lead follow-up for $297/month — no setup fee, month-to-month. Turn more website inquiries into real conversations.'

const HERO_HIGHLIGHTS = [
  'Managed plumbing website, built and maintained for you',
  'Every inquiry gets an immediate, automated first response',
  'Missed-call text-back so after-hours leads never go cold',
  'Booking and follow-up that runs without you touching it',
]

const PROBLEMS = [
  'A homeowner with a burst pipe fills out your form at 9 p.m. If the first reply lands the next morning, they have already called the next plumber on the list.',
  'Calls come in while you are under a sink with your hands full. They go to voicemail, and most callers never leave one — they just dial the next number.',
  'Estimates go out and then sit. Whoever follows up first books the job, and it is rarely the plumber waiting for the customer to call back.',
  'Your website looks fine but does nothing after a lead arrives. There is no system behind it capturing, replying, and booking — so the traffic leaks out the bottom.',
]

const STEPS: { label: string; body: string }[] = [
  {
    label: 'We build and manage the site',
    body: 'You get a professionally built plumbing website designed to turn visitors into inquiries — and we maintain it. No DIY builder, no separate web guy, no maintenance on your plate.',
  },
  {
    label: 'Every inquiry gets an instant reply',
    body: 'The moment someone submits a form or you miss a call, the system responds automatically by text and email — in your business name — so the lead hears back in seconds, not hours.',
  },
  {
    label: 'Follow-up runs on its own',
    body: 'Leads that do not respond right away get a timed follow-up sequence instead of being forgotten. The conversation stays warm until the customer books or opts out.',
  },
  {
    label: 'You get the booked conversation',
    body: 'Qualified leads land in one place with a clear path to a scheduled call or job. You step in to do plumbing work, not to chase down people who already raised their hand.',
  },
]

const FEATURES = [
  'Managed plumbing website — built, hosted, and maintained for you',
  'Instant lead response by text and email on every form submission',
  'Missed-call text-back that recovers after-hours and on-the-job calls',
  'Automated follow-up sequences so no inquiry goes cold',
  'A single inbox for web, SMS, and call-back conversations',
  'Appointment booking path wired into your day',
  'Review request prompts after completed work',
  'Mobile-fast pages built for how homeowners actually search',
]

const BEFORE = [
  'A brochure site that stops working the moment a lead arrives',
  'Inquiries answered whenever you next check your phone',
  'Missed calls that quietly become someone else’s job',
  'Follow-up that depends on you remembering to do it',
  'Setup fees and a rebuild every couple of years',
]

const AFTER = [
  'A managed site with a lead-response system behind it',
  'An automated first reply within seconds of every inquiry',
  'Missed-call text-back that keeps the conversation alive',
  'Follow-up sequences that run whether or not you have time',
  '$297/month, $0 setup fee, month-to-month',
]

const FAQS = [
  {
    q: 'What exactly do I get for $297 a month?',
    a: 'A professionally managed plumbing website plus the lead-response system behind it: instant automated replies to every inquiry, missed-call text-back, and follow-up sequences that keep leads warm until they book. We build it, host it, and maintain it. There is no setup fee and no long-term contract.',
  },
  {
    q: 'Is there really no setup fee?',
    a: 'No setup fee. You start at $297 per month and the build is included. The subscription is month-to-month, so you can cancel anytime.',
  },
  {
    q: 'Do I have to move my existing website or phone number?',
    a: 'No. We build and manage the new site, and the lead-response system works alongside the number you already use. We map the details on the call so nothing you rely on gets disrupted.',
  },
  {
    q: 'How is this different from hiring a web designer?',
    a: 'A web designer hands you a site and walks away. The Plumber Growth System is an ongoing managed service: the website is only the front door. What makes it work is the system behind it that replies to leads instantly, recovers missed calls, and follows up automatically — maintained for you every month.',
  },
  {
    q: 'Will this get me more leads or guarantee more jobs?',
    a: 'We do not guarantee leads, rankings, revenue, appointments, or jobs, and we will never claim to. What the system does is make sure the inquiries you already get are answered fast and followed up consistently, instead of leaking away because no one responded in time.',
  },
  {
    q: 'How long until it is live?',
    a: 'Once we have your business details and assets, the managed site and the lead-response system are set up together. We confirm the exact timeline on the call — it depends on what you already have in place and how quickly we can gather what we need.',
  },
  {
    q: 'What happens on the 15-minute call?',
    a: 'It is a short, no-pressure conversation to see whether the system fits how your plumbing business runs. We look at how leads reach you today and where they are slipping. If it is a fit, we show you the next step. If it is not, you still leave knowing where your follow-up is leaking.',
  },
]

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: '/plumber-growth-system' },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: '/plumber-growth-system',
    images: [{ url: '/og/default.webp', alt: META_TITLE }],
  },
}

export default function PlumberGrowthSystemPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: '/plumber-growth-system',
            name: META_TITLE,
            description: META_DESCRIPTION,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Plumber Growth System', url: '/plumber-growth-system' },
          ]),
          serviceSchema({
            slug: 'plumber-growth-system',
            name: 'Plumber Growth System',
            description: META_DESCRIPTION,
          }),
          faqPage(FAQS),
        ]}
      />

      {/* ───────── S00: Hero — outcome headline + primary "See How It Works" ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <Breadcrumbs
              className="mb-6"
              trail={[
                { name: 'Home', url: '/' },
                { name: 'Plumber Growth System', url: '/plumber-growth-system' },
              ]}
            />
            <span className="section-eyebrow">Plumber Growth System</span>
            <h1 className="mt-6 hero-heading">
              Turn More Plumbing Website Inquiries Into Real Conversations
            </h1>
            <p className="mt-7 hero-copy">
              Get a professionally managed plumbing website with immediate lead
              follow-up for $297 per month — with no setup fee. The inquiries you
              already get finally get answered fast and followed up, instead of
              leaking away.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={WATCH_HREF} className="btn-primary">
                See How It Works
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={BOOK_HREF} className="btn-ghost">
                Book a 15-Minute Call
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/55">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              $297/month · $0 setup fee · month-to-month, cancel anytime
            </p>
          </div>

          <aside aria-label="What this delivers" className="card-glass">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              What this delivers
            </span>
            <ul className="mt-5 space-y-3">
              {HERO_HIGHLIGHTS.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent-teal)]"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-white/90">{line}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* ───────── S01: Problem framing (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The problem</span>
            <h2 className="mt-5 section-heading">
              The jobs you lose are the ones no one answered
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {PROBLEMS.map((problem) => (
              <li key={problem} className="card-solid flex items-start gap-3 p-6">
                <span
                  aria-hidden
                  className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-[color:var(--blue-system)]"
                />
                <span className="card-copy text-[color:var(--text-charcoal)]">
                  {problem}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── S02: How the system works (slate dark) ───────── */}
      <section className="section-slate section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">How it works</span>
            <h2 className="mt-5 section-heading">A managed system, not a website you babysit</h2>
          </div>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.label}>
                <span className="system-node">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="card-title mt-6 text-white">{step.label}</h3>
                <p className="card-copy mt-3">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── S03: What's included (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What’s included</span>
            <h2 className="mt-5 section-heading">Everything that makes the inquiries you get count</h2>
          </div>
          <div className="mt-12 card-premium p-8 md:p-10">
            <ul className="grid gap-5 md:grid-cols-2">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--blue-system)]/12 text-[color:var(--blue-system)]"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="card-copy text-[color:var(--text-charcoal)]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── S04: Before / after comparison (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The difference</span>
            <h2 className="mt-5 section-heading">A typical plumbing site vs. the Growth System</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="card-solid p-8">
              <h3 className="card-title text-[color:var(--text-charcoal)]">A typical plumbing website</h3>
              <ul className="mt-6 space-y-3">
                {BEFORE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X
                      className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--text-charcoal)]/40"
                      aria-hidden
                    />
                    <span className="card-copy text-[color:var(--text-charcoal)]/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-premium p-8">
              <h3 className="card-title text-[color:var(--text-charcoal)]">The Plumber Growth System</h3>
              <ul className="mt-6 space-y-3">
                {AFTER.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--blue-system)]/12 text-[color:var(--blue-system)]"
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="card-copy text-[color:var(--text-charcoal)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── S05: Pricing (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Pricing</span>
            <h2 className="mt-5 section-heading">One price. No setup fee. Cancel anytime.</h2>
          </div>
          <div className="mt-12 card-premium mx-auto max-w-xl p-8 text-center md:p-10">
            <p className="text-5xl font-bold text-[color:var(--text-charcoal)]">
              $297
              <span className="text-lg font-medium text-[color:var(--text-charcoal)]/60">
                {' '}
                / month
              </span>
            </p>
            <p className="mt-4 card-copy text-[color:var(--text-charcoal)]/75">
              $0 setup fee · month-to-month · cancel anytime. The managed website
              and the full lead-response system are included — no add-ons required
              to get the whole thing running.
            </p>
            <ul className="mt-8 space-y-3 text-left">
              {['Managed website, built and maintained', 'Instant lead response and missed-call text-back', 'Automated follow-up and one unified inbox'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--blue-system)]/12 text-[color:var(--blue-system)]"
                    >
                      <Zap className="h-3.5 w-3.5" />
                    </span>
                    <span className="card-copy text-[color:var(--text-charcoal)]">{item}</span>
                  </li>
                ),
              )}
            </ul>
            <Link href={BOOK_HREF} className="btn-primary mt-8 w-full justify-center">
              Book a 15-Minute Call
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── S06: FAQ (light) — same array drives visible render + JSON-LD ───────── */}
      <section className="section-light section-padding">
        <div className="site-container grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="mt-5 section-heading">Common questions</h2>
          </div>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* ───────── S07: Booking CTA (light wrapping cta-deep) → /book ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="cta-deep">
            <span className="section-eyebrow text-[color:var(--blue-light)]">Ready when you are</span>
            <h2 className="mt-5 section-heading max-w-3xl text-balance">
              Book a 15-minute call and see if it fits your plumbing business.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              No hard sell. We look at how leads reach you today and where they
              slip, and show you exactly what the managed system would do about it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={BOOK_HREF} className="btn-primary">
                Book a 15-Minute Call
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={WATCH_HREF} className="btn-ghost">
                See How It Works
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/55">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              $297/month · $0 setup fee · cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── S08: Disclaimer (light) — required per doc §6.5 / §12.2 ───────── */}
      <section className="section-light pb-20">
        <div className="site-container">
          <div className="content-medium border-t border-[color:var(--border)] pt-8">
            <p className="text-xs leading-relaxed text-[color:var(--text-charcoal)]/55">
              Sirius Systems does not guarantee leads, rankings, revenue,
              appointments, or jobs. The Plumber Growth System is a professionally
              managed website and lead-response service; results depend on many
              factors outside our control, including your market, pricing, and the
              volume of inquiries you already receive. The subscription is
              month-to-month at $297 per month with no setup fee and can be
              cancelled anytime. See our{' '}
              <Link href="/privacy" className="underline hover:no-underline">
                privacy policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="underline hover:no-underline">
                terms of service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
