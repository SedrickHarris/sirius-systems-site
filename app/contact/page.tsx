import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/site/SectionLabel'
import { FAQ } from '@/components/site/FAQ'
import { ProcessStep } from '@/components/site/ProcessStep'
import { JsonLdScript } from '@/components/site/JsonLdScript'
import { CONTACT_FAQ } from '@/lib/faq'
import { breadcrumbList, faqPage, webPage } from '@/lib/schema'
import { SITE } from '@/lib/site'

const PAGE = {
  title: 'Contact',
  description: `Talk to ${SITE.name} about an AI automation, smart website, or reputation system for your local service business. Book a discovery call.`,
}

export const metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: '/contact' },
}

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

      {/* ───────── Hero + Form ───────── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid-faint bg-grid-48 opacity-40" />
        <div className="absolute inset-0 -z-10 glow-accent" />

        <div className="container-page grid items-start gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-28">
          {/* Left: copy */}
          <div>
            <SectionLabel index="00" label="Contact" tone="accent" />

            <h1 className="mt-8 max-w-2xl text-balance font-display text-5xl leading-[1.04] tracking-tight md:text-6xl lg:text-[4.25rem]">
              Twenty minutes. A real audit. No pitch.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Tell us where leads, reviews, or follow-up are leaking. We&rsquo;ll
              map a system in twenty minutes &mdash; yours to take with you
              whether we work together or not.
            </p>

            {/* Alt contact — phone/email placeholders honor do-not-invent */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="card p-5">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                  Phone
                </p>
                {/* TODO: replace with confirmed publishable phone (content-needed 1.1) */}
                <p className="mt-2 font-display text-base text-muted/80">
                  Pending confirmation
                </p>
                <p className="mt-2 text-xs text-muted/70">
                  Booking the audit is currently the fastest path to a reply.
                </p>
              </div>
              <div className="card p-5">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                  Email
                </p>
                {/* TODO: replace with confirmed publishable email (content-needed 1.2) */}
                <p className="mt-2 font-display text-base text-muted/80">
                  Pending confirmation
                </p>
                <p className="mt-2 text-xs text-muted/70">
                  Reply within one business day to every audit request.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <aside className="card relative overflow-hidden p-7 md:p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary/15 blur-3xl" />
            <div className="relative">
              <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                Strategy Session
              </div>
              <h2 className="mt-4 font-display text-2xl leading-tight tracking-tight md:text-[1.75rem]">
                Book the audit.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We&rsquo;ll reply within one business day to confirm a time.
              </p>

              <form
                /* TODO: wire to confirmed CRM / form endpoint
                   (content-needed-from-client.md item 2.5). For now this is
                   a visible-but-non-functional placeholder so QA can review
                   layout + copy. */
                action="#"
                method="post"
                className="mt-7 space-y-5"
                aria-label="Strategy session request"
              >
                <Field
                  id="name"
                  label="Your name"
                  type="text"
                  required
                  autoComplete="name"
                />
                <Field
                  id="business"
                  label="Business name"
                  type="text"
                  required
                  autoComplete="organization"
                />
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
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  required
                  autoComplete="email"
                />
                <Field
                  id="bottleneck"
                  label="Where's the bottleneck right now?"
                  as="textarea"
                  rows={3}
                />

                {/* Honeypot — bots fill, humans don't see */}
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
                <p className="text-center text-[11px] text-muted">
                  No automated nurture. No surprise emails.
                </p>

                {/* Booking link placeholder */}
                <p className="border-t border-border pt-5 text-center text-xs text-muted">
                  Prefer a calendar?{' '}
                  {/* TODO: replace href with confirmed booking provider
                      (content-needed-from-client.md item 2.6) */}
                  <a href="#" className="link-underline text-foreground/90">
                    Booking link pending
                  </a>
                </p>
              </form>
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── What happens next ───────── */}
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-24">
          <SectionLabel index="01" label="What happens next" />
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Three steps from here.
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
            <ProcessStep
              index={1}
              title="Reply within one business day"
              body="You'll hear back to confirm a 20-minute slot &mdash; usually the same day, never longer than the next business day."
            />
            <ProcessStep
              index={2}
              title="The audit, on a real call"
              body="We map where leads, reviews, or follow-up are leaking. You leave with a written punch list of what to fix and in what order."
            />
            <ProcessStep
              index={3}
              title="Decide on your own time"
              body="No pressure tactics. If we're a fit you'll know, and if we're not we'll tell you who is."
            />
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="border-b border-border bg-surface/30">
        <div className="container-page py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel index="02" label="Questions" />
              <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Before you book.
              </h2>
            </div>
            <FAQ items={CONTACT_FAQ} />
          </div>
        </div>
      </section>
    </>
  )
}

// ─────────────────────────────────────────────
// Form field — single component, three modes.
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
    'mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-foreground/90">
        {label}
        {required && <span className="ml-1 text-accent" aria-hidden>*</span>}
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
