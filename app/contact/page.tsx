import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { FAQ } from '@/components/site/FAQ'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { CONTACT_FAQ } from '@/lib/faq'
import { breadcrumbList, faqPage, webPage } from '@/lib/schema'
import { SITE } from '@/lib/site'

const PAGE = {
  title: 'Contact',
  description: `Talk to ${SITE.name} about an AI automation, smart website, or reputation system for your local service business. Book a discovery call.`,
}

export const metadata: Metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: PAGE.title,
    description: PAGE.description,
    url: '/contact',
  },
}

const NEXT_STEPS = [
  {
    num: '01',
    title: 'Reply within one business day',
    body: "You'll hear back to confirm a 20-minute slot — usually the same day, never longer than the next business day.",
  },
  {
    num: '02',
    title: 'The audit, on a real call',
    body: 'We map where leads, reviews, or follow-up are leaking. You leave with a written punch list of what to fix and in what order.',
  },
  {
    num: '03',
    title: 'Decide on your own time',
    body: "No pressure tactics. If we're a fit you'll know, and if we're not we'll tell you who is.",
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLdScript
        data={[
          webPage({
            url: '/contact',
            name: `${PAGE.title} | ${SITE.name}`,
            description: PAGE.description,
          }),
          breadcrumbList([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ]),
          faqPage(CONTACT_FAQ),
        ]}
      />

      {/* ───────── Hero (dark) ───────── */}
      <section className="section-deep section-padding relative overflow-hidden">
        <div aria-hidden className="glow-accent absolute inset-0 -z-10" />
        <div className="site-container">
          <span className="section-eyebrow">Contact</span>
          <h1 className="mt-6 hero-heading max-w-3xl">
            Twenty minutes. A real audit. No pitch.
          </h1>
          <p className="mt-7 hero-copy">
            Tell us where leads, reviews, or follow-up are leaking. We&rsquo;ll
            map a system in twenty minutes &mdash; yours to take with you
            whether we work together or not.
          </p>
          <div className="mt-10">
            <Link href="#book" className="btn-primary">
              Jump to the form
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Contact / strategy session (light, form + alt contact) ───────── */}
      <section id="book" className="section-light section-padding scroll-mt-20">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">

          {/* Left — alt contact + framing copy */}
          <div>
            <span className="section-eyebrow">Strategy session</span>
            <h2 className="mt-5 section-heading">
              Book the audit, or reach out directly.
            </h2>
            <p className="mt-5 section-copy">
              The form on the right is the fastest path. If you&rsquo;d rather
              email or call, contact details land below once they&rsquo;re
              confirmed.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="card-solid p-5">
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-[color:var(--text-muted)]">
                  Phone
                </span>
                {/* TODO: replace with confirmed publishable phone (content-needed 1.1) */}
                <p className="mt-2 font-display text-base text-[color:var(--text-muted)]">
                  Pending confirmation
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--text-muted)]">
                  Booking the audit is currently the fastest path to a reply.
                </p>
              </div>
              <div className="card-solid p-5">
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-[color:var(--text-muted)]">
                  Email
                </span>
                {/* TODO: replace with confirmed publishable email (content-needed 1.2) */}
                <p className="mt-2 font-display text-base text-[color:var(--text-muted)]">
                  Pending confirmation
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--text-muted)]">
                  Reply within one business day to every audit request.
                </p>
              </div>
            </div>
          </div>

          {/* Right — premium form card */}
          <aside aria-label="Strategy session request form" className="card-premium p-7 md:p-8">
            <span className="section-eyebrow">Book the audit</span>
            <h2 className="mt-4 font-display text-2xl leading-tight tracking-tight md:text-[1.75rem]">
              20 minutes. No pitch.
            </h2>
            <p className="mt-3 card-copy">
              We&rsquo;ll reply within one business day to confirm a time.
            </p>

            <form
              /* TODO: wire to confirmed CRM / form endpoint
                 (content-needed-from-client.md item 2.5). Placeholder
                 only so visitors can see the structure. */
              action="#"
              method="post"
              className="mt-7 space-y-5"
              aria-label="Strategy session request"
            >
              <Field id="name" label="Your name" type="text" required autoComplete="name" />
              <Field id="business" label="Business name" type="text" required autoComplete="organization" />
              <Field
                id="industry"
                label="Industry"
                as="select"
                required
                options={[
                  { value: '', label: 'Select industry' },
                  { value: 'home-services', label: 'Home Services' },
                  { value: 'contractors', label: 'Contractors' },
                  { value: 'professional-services', label: 'Professional Services' },
                  { value: 'auto-services', label: 'Auto Services' },
                  { value: 'beauty-wellness', label: 'Beauty & Wellness' },
                  { value: 'other', label: 'Other' },
                ]}
              />
              <Field id="email" label="Email" type="email" required autoComplete="email" />
              <Field
                id="bottleneck"
                label="Where's the bottleneck right now?"
                as="textarea"
                rows={3}
              />

              {/* Honeypot */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <button
                type="submit"
                className="btn-primary w-full"
                disabled
                aria-disabled="true"
                title="Form endpoint pending — see content-needed-from-client.md item 2.5"
              >
                Request the audit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              <p className="text-center text-[11px] text-[color:var(--text-muted)]">
                No automated nurture. No surprise emails.
              </p>

              <p className="border-t border-[color:var(--border-soft)] pt-5 text-center text-xs text-[color:var(--text-muted)]">
                Prefer a calendar?{' '}
                {/* TODO: replace href with confirmed booking provider (content-needed 2.6) */}
                <a href="#" className="btn-link">
                  Booking link pending
                </a>
              </p>
            </form>
          </aside>
        </div>
      </section>

      {/* ───────── What happens next (soft) ───────── */}
      <section className="section-soft section-padding">
        <div className="site-container">
          <div className="content-medium">
            <span className="section-eyebrow">What happens next</span>
            <h2 className="mt-5 section-heading">Three steps from here.</h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
            {NEXT_STEPS.map((step) => (
              <li key={step.num} className="card-solid p-6">
                <span className="font-mono text-xs uppercase tracking-eyebrow text-[color:var(--blue-system)]">
                  Step {step.num}
                </span>
                <h3 className="card-title mt-4">{step.title}</h3>
                <p className="card-copy mt-3">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── FAQ (light) ───────── */}
      <section className="section-light section-padding">
        <div className="site-container grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <span className="section-eyebrow">Questions</span>
            <h2 className="mt-5 section-heading">Before you book.</h2>
          </div>
          <FAQ items={CONTACT_FAQ} />
        </div>
      </section>

      {/* ───────── Trust micro-line (soft) — small finale, no full CTA ───────── */}
      <section className="section-soft section-padding-sm">
        <div className="site-container content-medium text-center">
          <p className="inline-flex items-center gap-2 text-sm text-[color:var(--text-body)]">
            <ShieldCheck className="h-4 w-4 text-[color:var(--blue-system)]" aria-hidden />
            No pressure. No fake promises. Just a practical next step.
          </p>
        </div>
      </section>
    </>
  )
}

// ─────────────────────────────────────────────
// Form field — same shape as Stage 2, restyled for light premium surface.
// ─────────────────────────────────────────────
type FieldProps = {
  id: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
  as?: 'input' | 'textarea' | 'select'
  rows?: number
  options?: { value: string; label: string }[]
}

function Field({
  id,
  label,
  type = 'text',
  required,
  autoComplete,
  as = 'input',
  rows,
  options,
}: FieldProps) {
  const base =
    'mt-2 w-full rounded-lg border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-charcoal)] placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--blue-system)] focus:outline-none focus:ring-1 focus:ring-[color:var(--blue-system)]'

  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold text-[color:var(--text-charcoal)]">
        {label}
        {required && (
          <span className="ml-1 text-[color:var(--blue-system)]" aria-hidden>
            *
          </span>
        )}
      </label>
      {as === 'textarea' && (
        <textarea
          id={id}
          name={id}
          rows={rows ?? 3}
          required={required}
          className={base}
        />
      )}
      {as === 'select' && options && (
        <select id={id} name={id} required={required} className={base}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
      {as === 'input' && (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={base}
        />
      )}
    </div>
  )
}
