import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X, ShieldCheck } from 'lucide-react'
import { Breadcrumbs } from '@/components/site/Breadcrumbs'
import { FAQ } from '@/components/site/FAQ'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { webPage, breadcrumbList } from '@/lib/schema'
import { PageView, TrackedLink } from './analytics'

// ─────────────────────────────────────────────────────────────────────────────
// /plumber-growth-system — Growth System product page.
// Copy is the approved sales-page copy from doc 23 (23-sales-page-copy.md) and
// must match it exactly (doc 23 §7, acceptance criteria). CTAs route to the
// sales funnel (/watch, /book), never /contact (doc 21 WEB-015). Fully indexed.
//
// Structured data is limited to WebPage + BreadcrumbList per doc 23 §3 (and
// doc 21 §6.6). The visible FAQ renders without FAQPage schema by design.
// ─────────────────────────────────────────────────────────────────────────────

// Repo convention is no trailing slash (see sitemap.ts / other canonicals);
// the trailing slashes in doc 23 are notional. Destinations are otherwise exact.
const WATCH_HREF = '/watch?v=plumbing'
const BOOK_HREF =
  '/book?utm_source=product-page&utm_medium=cta&utm_campaign=plumber-growth-system'

const META_TITLE =
  'Plumber Growth System — Managed Website + Lead Response | Sirius Systems'
const META_DESCRIPTION =
  'A professionally managed plumbing website and lead-response system for $297 per month. No setup fee. Capture more inquiries, respond faster, recover missed calls, and request reviews automatically.'
const OG_TITLE = 'Plumber Growth System | Sirius Systems'
const OG_DESCRIPTION =
  'A professionally managed plumbing website and lead-response system. $297 per month. No setup fee. Built for established plumbing companies.'

const STEPS: { label: string; body: string }[] = [
  {
    label: 'We build your website',
    body: 'A professional, mobile-first plumbing website — built for the way homeowners actually search. Clear service pages, a visible phone number, and dedicated forms for quote requests and emergency service. Built on your brand, approved by you before launch.',
  },
  {
    label: 'Inquiries get captured and acknowledged immediately',
    body: 'When a homeowner submits a quote request, two things happen at once: your business gets notified immediately, and the customer receives an automatic confirmation that their request was received. They’re not left wondering if the form worked — and you’re not finding out three hours later.',
  },
  {
    label: 'Missed calls get a text-back automatically',
    body: 'If a call comes in while your crew is on a job and nobody picks up, the system sends a text message to that caller within seconds. It opens the conversation instead of losing it.',
  },
  {
    label: 'Completed jobs trigger review requests',
    body: 'After a job is done, the system sends a review request to that customer. Honest. Direct. Consistent. You don’t have to remember to ask — and your reputation keeps building without manual effort.',
  },
]

const CAPABILITIES: { heading: string; body: string }[] = [
  {
    heading: 'Mobile-first plumbing website',
    body: 'A professionally designed website built for plumbing businesses. Fast on mobile, clear on desktop. Service pages, a visible call button, quote request form, emergency request page, and service area content — built to convert visitors into inquiries.',
  },
  {
    heading: 'Quote request and emergency request forms',
    body: 'Dedicated forms that route directly into your lead pipeline. The emergency form includes appropriate safety guidance and clearly states that submission is not a guaranteed dispatch.',
  },
  {
    heading: 'Immediate lead notifications',
    body: 'Every time a homeowner submits a request, your business is notified right away — by text, email, or both. No digging through inboxes hours later.',
  },
  {
    heading: 'Instant customer acknowledgment',
    body: 'The customer receives an automatic confirmation the moment their request is submitted. It confirms you received it, sets expectations, and keeps them from calling your competitors while they wait to hear from you.',
  },
  {
    heading: 'Missed-call text-back',
    body: 'When a call goes unanswered, the system sends a text to that caller automatically — within seconds. It opens the door to a conversation your business would otherwise have lost.',
  },
  {
    heading: 'Lead pipeline',
    body: 'Every inquiry lands in an organized pipeline. New leads, connected contacts, estimate requests, scheduled estimates, open estimates, and completed jobs — all visible in one place. No more tracking opportunities in memory or a spreadsheet.',
  },
  {
    heading: 'Automated review requests',
    body: 'When a job is marked complete, the system sends a review request to that customer. The request is honest, not coercive — every customer gets the same opportunity to leave a public review regardless of their feedback.',
  },
  {
    heading: 'Hosting, maintenance, and management',
    body: 'We host the website and manage the technical infrastructure. Routine content updates, security maintenance, and system management are included. You focus on plumbing.',
  },
]

const COMPARISON: { without: string; with: string }[] = [
  { without: 'Inquiry arrives by email — checked hours later', with: 'Lead notification sent immediately' },
  { without: 'Customer submits a form and hears nothing', with: 'Customer receives automatic confirmation' },
  { without: 'Missed call goes to voicemail', with: 'Missed call triggers automatic text-back' },
  { without: 'Open estimates tracked in memory', with: 'Pipeline shows every open opportunity' },
  { without: 'Review requests depend on remembering to ask', with: 'Review request sent automatically after every job' },
  { without: 'Website updates require chasing a developer', with: 'Routine updates handled as part of the service' },
  { without: 'Conversations spread across email, texts, and voicemail', with: 'Conversations organized in one place' },
  { without: 'No visibility into which inquiries were followed up', with: 'Pipeline status visible at a glance' },
]

const PRICING_INCLUDES = [
  'Professional plumbing website — built and launched',
  'Quote request and emergency request forms',
  'Immediate lead notifications',
  'Automatic customer acknowledgment',
  'Missed-call text-back',
  'Lead pipeline for tracking open opportunities',
  'Automated review requests',
  'Hosting, maintenance, and ongoing management',
]

const FAQS = [
  {
    q: 'Do you guarantee leads or a certain number of booked jobs?',
    a: 'No. The system improves the infrastructure that captures and responds to the opportunities already reaching your business — faster notifications, automatic acknowledgments, missed-call recovery, and consistent follow-up. Lead volume depends on your market, service area, reputation, advertising, and a range of factors outside the system. We won’t promise results we can’t control.',
  },
  {
    q: 'I already have a website. Do I have to replace it?',
    a: 'That depends on what’s actually causing the problem. If your current website is generating inquiries and your team responds to them quickly, the issue may be elsewhere. We’ll look at what’s not working and recommend only what needs to change. In most cases, there’s a real gap between the website experience and the follow-up process — and that’s what the system is designed to close.',
  },
  {
    q: 'What exactly is included for $297 per month?',
    a: 'A professionally built, mobile-first plumbing website. Quote request and emergency request forms. Immediate lead notifications. Automatic customer acknowledgment after each inquiry. Missed-call text-back. A lead pipeline for tracking open opportunities. Automated review requests after completed jobs. And ongoing hosting, maintenance, and system management. Text message and email delivery are billed separately based on actual volume — that’s disclosed before your system goes live.',
  },
  {
    q: 'How long does it take to go live?',
    a: 'Timeline depends on how quickly onboarding is completed — specifically, how quickly we receive your business information, approved content, and access to required accounts. We can walk you through what’s needed on the onboarding call. We build it, you approve it before launch.',
  },
  {
    q: 'What happens if I cancel?',
    a: 'The subscription is month-to-month. You can cancel without a long-term penalty. When a subscription ends, access to the managed system and hosting ends with it. Your business information — contacts, conversations, and customer data — can be exported. The website template and automation system are agency-owned infrastructure and are not transferred automatically. If you need a transition package, that’s available as a separately scoped service.',
  },
  {
    q: 'Do I have to sign a long-term contract?',
    a: 'No. The Plumber Growth System is month-to-month. There’s no long-term commitment required to get started.',
  },
  {
    q: 'What’s the difference between this and just buying the software yourself?',
    a: 'The system uses software tools to deliver the result — but what you’re paying for is the implementation, integration, configuration, and ongoing management. Building, connecting, and maintaining a plumbing website, lead-response system, missed-call recovery, pipeline, and review-request workflow from scratch takes significant time and technical knowledge. The Plumber Growth System does that work for you and keeps it running.',
  },
  {
    q: 'Is this only for residential plumbers?',
    a: 'The system is built primarily for residential and light-commercial plumbing companies. If your business serves both residential and commercial customers, it still fits — the website and pipeline can be configured for your actual service mix. Larger commercial-only operations with more complex dispatch, reporting, or integration requirements may need something beyond the base plan.',
  },
  {
    q: 'What do I need to provide to get started?',
    a: 'After your call and checkout, we’ll send you an onboarding form. It covers your business name, service areas, services offered, brand assets, license information, preferred contact information, and domain access. The more complete your onboarding submission, the faster we can build and launch.',
  },
  {
    q: 'Will this work if I’m the only one answering leads?',
    a: 'Yes. The system is designed to work for owner-operators. The missed-call text-back, lead notifications, and pipeline are specifically useful when one person is managing the field and the phone. You’ll know immediately when something comes in, and the customer will hear from you before they move on.',
  },
]

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: '/plumber-growth-system' },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: '/plumber-growth-system',
    images: [{ url: '/og/default.webp', alt: OG_TITLE }],
  },
}

export default function PlumberGrowthSystemPage() {
  return (
    <>
      <PageView />
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
        ]}
      />

      {/* ───────── SECTION 1 — HERO ───────── */}
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
            <span className="section-eyebrow">For established plumbing companies</span>
            <h1 className="mt-6 hero-heading">
              Turn More Plumbing Website Inquiries Into Real Conversations
            </h1>
            <p className="mt-7 hero-copy">
              Get a professionally managed plumbing website with immediate lead
              follow-up for $297 per month — with no setup fee.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <TrackedLink event="vssl_cta_click" href={WATCH_HREF} className="btn-primary">
                See How It Works
                <ArrowRight className="h-4 w-4" aria-hidden />
              </TrackedLink>
              <TrackedLink event="book_cta_click" href={BOOK_HREF} className="btn-ghost">
                Or book a 15-minute call
              </TrackedLink>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/55">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              No setup fee · Month-to-month · Built and managed for you
            </p>
          </div>

          <aside aria-label="What this delivers" className="card-glass">
            <span className="section-eyebrow text-[color:var(--blue-light)]">
              What this delivers
            </span>
            <ul className="mt-5 space-y-3">
              {[
                'A managed, mobile-first plumbing website',
                'Immediate notifications and customer acknowledgment',
                'Missed-call text-back that recovers lost calls',
                'Automated review requests after every job',
              ].map((line) => (
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

      {/* ───────── SECTION 2 — PROBLEM ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">The problem</span>
            <h2 className="mt-5 section-heading">
              Most plumbing websites don’t work when you’re working.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-[color:var(--text-charcoal)]/80">
              <p>
                A homeowner wakes up to a backed-up drain or a water heater that
                stopped working. They search for a plumber nearby, find your
                website, and submit a request.
              </p>
              <p>And then nothing happens for an hour.</p>
              <p>
                By the time someone calls back, that homeowner has already hired
                whoever responded first.
              </p>
              <p>
                Not because your work isn’t better. Not because your price was
                wrong. They went with the other company because that company
                reached out first.
              </p>
              <p>
                That’s the gap the Plumber Growth System is designed to close. Not
                more advertising. Not guaranteed rankings. Just making sure that
                when someone reaches out to your business, something happens right
                away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SECTION 3 — HOW IT WORKS ───────── */}
      <section className="section-slate section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">How it works</span>
            <h2 className="mt-5 section-heading">
              A managed system that runs while you’re on the job.
            </h2>
            <p className="mt-5 section-copy">
              The Plumber Growth System is a done-for-you service. We build it,
              connect it, host it, and manage it. You approve the website before it
              goes live. After that, the system handles the follow-up.
            </p>
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

      {/* ───────── SECTION 4 — WHAT IS INCLUDED ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What’s included</span>
            <h2 className="mt-5 section-heading">Everything in the Plumber Growth System.</h2>
            <p className="mt-5 section-copy">
              One subscription. One system. Built specifically for plumbing companies.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {CAPABILITIES.map((cap) => (
              <article key={cap.heading} className="card-solid p-6">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--blue-system)]/12 text-[color:var(--blue-system)]"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h3 className="card-title text-[color:var(--text-charcoal)]">{cap.heading}</h3>
                    <p className="mt-2 card-copy text-[color:var(--text-charcoal)]/75">{cap.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SECTION 5 — BEFORE AND AFTER COMPARISON ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What changes</span>
            <h2 className="mt-5 section-heading">The difference between a website and a system.</h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-[color:var(--border)]">
            {/* Header row — hidden on mobile, where each cell is labeled inline */}
            <div
              className="hidden bg-[color:var(--blue-system)]/[0.04] md:grid md:grid-cols-2"
              role="row"
            >
              <div className="border-r border-[color:var(--border)] px-6 py-4 text-sm font-semibold text-[color:var(--text-charcoal)]/70">
                Without the system
              </div>
              <div className="px-6 py-4 text-sm font-semibold text-[color:var(--text-charcoal)]">
                With the Plumber Growth System
              </div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.without}
                className={`grid gap-px md:grid-cols-2 ${
                  i % 2 === 1 ? 'bg-[color:var(--blue-system)]/[0.02]' : ''
                }`}
              >
                <div className="flex items-start gap-3 border-b border-[color:var(--border)] px-6 py-4 md:border-b-0 md:border-r">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--text-charcoal)]/35" aria-hidden />
                  <span>
                    <span className="mb-1 block text-[11px] font-semibold uppercase tracking-eyebrow text-[color:var(--text-charcoal)]/45 md:hidden">
                      Without the system
                    </span>
                    <span className="card-copy text-[color:var(--text-charcoal)]/70">{row.without}</span>
                  </span>
                </div>
                <div className="flex items-start gap-3 border-b border-[color:var(--border)] px-6 py-4 md:border-b-0">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--blue-system)]" aria-hidden />
                  <span>
                    <span className="mb-1 block text-[11px] font-semibold uppercase tracking-eyebrow text-[color:var(--blue-system)]/70 md:hidden">
                      With the Plumber Growth System
                    </span>
                    <span className="card-copy text-[color:var(--text-charcoal)]">{row.with}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SECTION 6 — PRICING ───────── */}
      <section className="section-light section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Pricing</span>
            <h2 className="mt-5 section-heading">One price. No surprises.</h2>
          </div>
          <div className="mt-12 card-premium mx-auto max-w-xl p-8 md:p-10">
            <div className="text-center">
              <p className="text-5xl font-bold text-[color:var(--text-charcoal)]">
                $297
                <span className="text-lg font-medium text-[color:var(--text-charcoal)]/60"> / month</span>
              </p>
              <p className="mt-3 text-sm font-medium text-[color:var(--text-charcoal)]/70">
                No setup fee · Month-to-month · Cancel anytime
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {PRICING_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--blue-system)]/12 text-[color:var(--blue-system)]"
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="card-copy text-[color:var(--text-charcoal)]">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-xl bg-[color:var(--blue-system)]/[0.04] px-5 py-4 text-sm leading-relaxed text-[color:var(--text-charcoal)]/70">
              Text message and email delivery are billed separately based on actual
              volume. Current rates are reviewed during the onboarding call. There
              are no surprise charges — usage is disclosed before your system goes
              live.
            </p>

            <TrackedLink
              event="book_cta_click"
              href={BOOK_HREF}
              className="btn-primary mt-8 w-full justify-center"
            >
              Book a 15-Minute Call
              <ArrowRight className="h-4 w-4" aria-hidden />
            </TrackedLink>

            <p className="mt-6 text-center text-xs text-[color:var(--text-charcoal)]/55">
              No setup fee. No long-term contract. We build it, you approve it, we manage it.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── SECTION 7 — WHO THIS IS FOR ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">Is this right for you?</span>
            <h2 className="mt-5 section-heading">Built for established plumbing companies.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <article className="card-premium p-8">
              <h3 className="card-title text-[color:var(--text-charcoal)]">A good fit</h3>
              <div className="mt-4 space-y-4 card-copy text-[color:var(--text-charcoal)]/80">
                <p>
                  The Plumber Growth System is designed for plumbing companies that
                  are already operating — you have customers, a service area, and a
                  team that can handle additional work.
                </p>
                <p>
                  It works best when there’s a clear gap between the opportunities
                  reaching your business and the ones you’re actually capturing. A
                  slow follow-up process. A missed-call problem. A website that
                  sends inquiries into an email inbox and nothing happens next.
                </p>
                <p>If that describes your situation, the system is designed to help.</p>
              </div>
            </article>
            <article className="card-solid p-8">
              <h3 className="card-title text-[color:var(--text-charcoal)]">Not a fit</h3>
              <div className="mt-4 space-y-4 card-copy text-[color:var(--text-charcoal)]/70">
                <p>
                  This is not a lead generation advertising service. We don’t run
                  ads or guarantee rankings.
                </p>
                <p>
                  It’s also not designed for businesses that are just starting out
                  with no customers, no reviews, and no operating history. The
                  system improves how your business handles the opportunities
                  already reaching it — it doesn’t create demand from nothing.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ───────── SECTION 8 — FAQ ───────── */}
      <section className="section-light section-padding">
        <div className="site-container grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="section-eyebrow">Questions</span>
            <h2 className="mt-5 section-heading">Common questions, real answers.</h2>
          </div>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* ───────── SECTION 9 — FINAL CTA ───────── */}
      <section className="section-light pb-20">
        <div className="site-container">
          <div className="cta-deep">
            <span className="section-eyebrow text-[color:var(--blue-light)]">Ready when you are</span>
            <h2 className="mt-5 section-heading max-w-3xl text-balance">
              Ready to see how it works?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              The call is 15 minutes. We’ll look at your current setup, answer your
              questions, and tell you directly whether the system is a fit for your
              business.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              No pressure. No obligation. If it’s not right for you, we’ll say so.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <TrackedLink event="book_cta_click" href={BOOK_HREF} className="btn-primary">
                Book a 15-Minute Call
                <ArrowRight className="h-4 w-4" aria-hidden />
              </TrackedLink>
            </div>
            <p className="mt-8 text-sm text-white/70">
              Want to see the system before the call?{' '}
              <TrackedLink
                event="vssl_cta_click"
                href={WATCH_HREF}
                className="font-semibold text-[color:var(--blue-light)] underline underline-offset-4 hover:no-underline"
              >
                Watch the 5-minute overview →
              </TrackedLink>
            </p>
          </div>
        </div>
      </section>

      {/* ───────── SECTION 10 — FOOTER DISCLAIMER ───────── */}
      <section className="section-light pb-20">
        <div className="site-container">
          <div className="content-medium border-t border-[color:var(--border)] pt-8">
            <p className="text-xs leading-relaxed text-[color:var(--text-charcoal)]/55">
              The Plumber Growth System is a managed website and lead-response
              service provided by Sirius Systems (SHH Group dba Sirius Systems), Las
              Vegas, NV. Results depend on your market, service area, reputation,
              availability, and how actively your business engages with incoming
              opportunities. We do not guarantee leads, booked jobs, revenue, search
              rankings, map-pack position, response times, or review counts.
              Submitting an emergency request form does not guarantee immediate
              service or dispatch. The $297 monthly subscription is billed
              month-to-month. Text message and email delivery are billed separately
              based on actual usage volume. Pricing and terms are subject to change
              with notice. See our{' '}
              <Link href="/privacy" className="underline hover:no-underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="underline hover:no-underline">
                Terms of Service
              </Link>{' '}
              for complete terms.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
