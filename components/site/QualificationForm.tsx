'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Check,
  HardHat,
  HelpCircle,
  Loader2,
  MapPin,
  Sparkles,
  Trash2,
  Wrench,
} from 'lucide-react'

// Replace before launch with the live GHL inbound webhook URL.
const GHL_WEBHOOK_URL = 'TODO_GHL_WEBHOOK_URL'
const BOOKING_URL =
  'https://link.siriussys.io/widget/booking/Qn4ugo4iZ8ZJ8eaxX1c4'

type Step = 1 | 2 | 3 | 'result-qualified' | 'result-nurture'

interface FormData {
  industry: string
  leadVolume: string
  bottleneck: string[]
  currentTools: string
  followUpSpeed: string
  decisionMaker: string
  timeline: string
  email: string
  firstName: string
}

const EMPTY_FORM: FormData = {
  industry: '',
  leadVolume: '',
  bottleneck: [],
  currentTools: '',
  followUpSpeed: '',
  decisionMaker: '',
  timeline: '',
  email: '',
  firstName: '',
}

const INDUSTRY_HIGH_FIT = new Set([
  'home-services',
  'construction-contractors',
  'cleaning',
  'junk-removal',
  'real-estate',
  'coaches-consultants',
])

const LEAD_VOLUME_POINTS: Record<string, number> = {
  '50-plus': 5,
  '20-to-50': 4,
  '10-to-20': 3,
  'under-10': 1,
}

const TOOLS_POINTS: Record<string, number> = {
  'yes-crm-and-automation': 3,
  'yes-crm-only': 4,
  'spreadsheets-or-basic': 5,
  'nothing-yet': 3,
}

const FOLLOW_UP_POINTS: Record<string, number> = {
  'within-5-minutes': 1,
  'within-1-hour': 2,
  'same-day': 4,
  'next-day-or-longer': 5,
  inconsistent: 5,
}

const DECISION_POINTS: Record<string, number> = {
  yes: 4,
  'mostly-yes': 3,
  'need-approval': 1,
  no: 0,
}

const TIMELINE_POINTS: Record<string, number> = {
  immediately: 5,
  'within-30-days': 4,
  'within-90-days': 3,
  'just-researching': 0,
}

function calculateScore(form: FormData): number {
  let score = 0

  if (INDUSTRY_HIGH_FIT.has(form.industry)) score += 4
  else if (form.industry === 'other-local-service') score += 2

  score += LEAD_VOLUME_POINTS[form.leadVolume] ?? 0
  score += Math.min(form.bottleneck.length * 2, 6)
  score += TOOLS_POINTS[form.currentTools] ?? 0
  score += FOLLOW_UP_POINTS[form.followUpSpeed] ?? 0
  score += DECISION_POINTS[form.decisionMaker] ?? 0
  score += TIMELINE_POINTS[form.timeline] ?? 0

  return score
}

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

type IconCmp = typeof Wrench

const INDUSTRY_OPTIONS: { value: string; label: string; Icon: IconCmp }[] = [
  { value: 'home-services', label: 'Home Services', Icon: Wrench },
  { value: 'construction-contractors', label: 'Construction & Contractors', Icon: HardHat },
  { value: 'cleaning', label: 'Cleaning Companies', Icon: Sparkles },
  { value: 'junk-removal', label: 'Junk Removal', Icon: Trash2 },
  { value: 'real-estate', label: 'Real Estate', Icon: Building2 },
  { value: 'coaches-consultants', label: 'Coaches & Consultants', Icon: Briefcase },
  { value: 'other-local-service', label: 'Other Local Service', Icon: MapPin },
  { value: 'not-sure', label: 'Not Sure Yet', Icon: HelpCircle },
]

const LEAD_VOLUME_OPTIONS = [
  { value: 'under-10', label: 'Under 10' },
  { value: '10-to-20', label: '10 to 20' },
  { value: '20-to-50', label: '20 to 50' },
  { value: '50-plus', label: '50+' },
]

const BOTTLENECK_OPTIONS = [
  { value: 'slow-follow-up', label: 'Missed or slow lead follow-up' },
  { value: 'missed-leads', label: 'Leads not converting to booked appointments' },
  { value: 'no-show-appointments', label: 'No-shows and cancellations' },
  { value: 'bad-reviews', label: 'Not enough Google reviews' },
  { value: 'manual-admin', label: 'Too much manual admin work' },
  { value: 'not-ranking-locally', label: 'Not ranking well locally' },
]

const TOOLS_OPTIONS = [
  { value: 'yes-crm-and-automation', label: 'CRM plus automation (e.g. GHL, HubSpot)' },
  { value: 'yes-crm-only', label: 'CRM only, no automation' },
  { value: 'spreadsheets-or-basic', label: 'Spreadsheets or basic tools' },
  { value: 'nothing-yet', label: 'Nothing formal yet' },
]

const FOLLOW_UP_OPTIONS = [
  { value: 'within-5-minutes', label: 'Within 5 minutes' },
  { value: 'within-1-hour', label: 'Within 1 hour' },
  { value: 'same-day', label: 'Same day' },
  { value: 'next-day-or-longer', label: 'Next day or longer' },
  { value: 'inconsistent', label: "Honestly, it's inconsistent" },
]

const DECISION_OPTIONS = [
  { value: 'yes', label: 'Yes, I decide' },
  { value: 'mostly-yes', label: 'Mostly — I lead the decision' },
  { value: 'need-approval', label: 'I need approval from someone else' },
  { value: 'no', label: "No, I'm researching for someone else" },
]

const TIMELINE_OPTIONS = [
  { value: 'immediately', label: 'I want to move immediately' },
  { value: 'within-30-days', label: 'Within the next 30 days' },
  { value: 'within-90-days', label: 'Within the next 90 days' },
  { value: 'just-researching', label: 'Just researching for now' },
]

type OptionCardProps = {
  selected: boolean
  onSelect: () => void
  label: string
  icon?: React.ReactNode
  multi?: boolean
  ariaLabel?: string
}

function OptionCard({
  selected,
  onSelect,
  label,
  icon,
  multi = false,
  ariaLabel,
}: OptionCardProps) {
  const base =
    'cursor-pointer rounded-lg border p-3 text-sm transition-all duration-150 flex items-center gap-3'
  const stateClass = selected
    ? 'border-[color:var(--blue)] bg-[color:var(--surface-2)] text-[color:var(--text)]'
    : 'border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text-muted)] hover:border-[color:var(--border-strong)] hover:text-[color:var(--text)]'

  return (
    <div
      role={multi ? 'checkbox' : 'radio'}
      aria-checked={selected}
      aria-label={ariaLabel ?? label}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      className={`${base} ${stateClass}`}
    >
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span className="flex-1">{label}</span>
      {multi ? (
        <span
          aria-hidden
          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
            selected
              ? 'border-[color:var(--blue)] bg-[color:var(--blue)]'
              : 'border-[color:var(--border-strong)] bg-transparent'
          }`}
        >
          {selected ? <Check className="h-3 w-3 text-[color:var(--text)]" /> : null}
        </span>
      ) : null}
    </div>
  )
}

export function QualificationForm() {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [touched, setTouched] = useState({ email: false, firstName: false })
  const [magnetSent, setMagnetSent] = useState(false)

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const toggleBottleneck = (value: string) =>
    setForm((prev) => ({
      ...prev,
      bottleneck: prev.bottleneck.includes(value)
        ? prev.bottleneck.filter((v) => v !== value)
        : [...prev.bottleneck, value],
    }))

  const canProceedStep1 = form.industry !== '' && form.leadVolume !== ''
  const canProceedStep2 =
    form.bottleneck.length > 0 &&
    form.currentTools !== '' &&
    form.followUpSpeed !== ''
  const canProceedStep3 =
    form.decisionMaker !== '' &&
    form.timeline !== '' &&
    form.firstName.trim() !== '' &&
    isValidEmail(form.email)

  const handleNext = () => {
    if (step === 1 && canProceedStep1) setStep(2)
    else if (step === 2 && canProceedStep2) setStep(3)
  }

  const handleBack = () => {
    if (step === 2) setStep(1)
    else if (step === 3) setStep(2)
  }

  const handleSubmit = async () => {
    if (!canProceedStep3 || submitting) return
    setSubmitting(true)
    setSubmitError(null)

    const score = calculateScore(form)
    const tag = score >= 20 ? 'qualified-lead' : 'nurture-lead'
    const nextStep: Step = score >= 20 ? 'result-qualified' : 'result-nurture'

    const payload = {
      firstName: form.firstName.trim(),
      email: form.email.trim(),
      industry: form.industry,
      leadVolume: form.leadVolume,
      bottlenecks: form.bottleneck.join(', '),
      currentTools: form.currentTools,
      followUpSpeed: form.followUpSpeed,
      decisionMaker: form.decisionMaker,
      timeline: form.timeline,
      qualificationScore: score,
      qualificationTag: tag,
      source: 'contact-page-qualification-form',
    }

    // Skip the network call while the webhook URL is still the placeholder
    // so the form is functional during development and visual QA.
    if (GHL_WEBHOOK_URL === 'TODO_GHL_WEBHOOK_URL') {
      setSubmitting(false)
      setStep(nextStep)
      return
    }

    try {
      const res = await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`status ${res.status}`)
      setSubmitting(false)
      setStep(nextStep)
    } catch {
      setSubmitting(false)
      setSubmitError(
        'Something went wrong submitting your answers. Please try again or email us directly.'
      )
    }
  }

  const currentStepNum = step === 1 ? 1 : step === 2 ? 2 : 3
  const isResultStep = step === 'result-qualified' || step === 'result-nurture'

  return (
    <div className="card-elevated p-8 lg:p-10">
      {!isResultStep && (
        <>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--blue-system)]">
              Fit Check
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--text-muted)]">
              Step {currentStepNum} of 3
            </span>
          </div>
          <div
            className="mt-3 flex items-center gap-2"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={3}
            aria-valuenow={currentStepNum}
          >
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  currentStepNum >= n
                    ? 'bg-[color:var(--blue)]'
                    : 'bg-[color:var(--border)]'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {step === 1 && (
        <div className="mt-6">
          <h2 className="sr-only">Step 1: About your business</h2>
          <div>
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              What best describes your business?
            </p>
            <div
              role="radiogroup"
              aria-label="Business type"
              className="mt-4 grid gap-2 sm:grid-cols-2"
            >
              {INDUSTRY_OPTIONS.map(({ value, label, Icon }) => (
                <OptionCard
                  key={value}
                  selected={form.industry === value}
                  onSelect={() => update('industry', value)}
                  label={label}
                  icon={<Icon className="h-4 w-4 text-[color:var(--blue-system)]" aria-hidden />}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              How many new leads does your business receive per month?
            </p>
            <div
              role="radiogroup"
              aria-label="Lead volume"
              className="mt-4 grid gap-2 sm:grid-cols-2"
            >
              {LEAD_VOLUME_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.leadVolume === value}
                  onSelect={() => update('leadVolume', value)}
                  label={label}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canProceedStep1}
            className="btn-primary mt-8 flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="mt-6">
          <h2 className="sr-only">Step 2: Your current operation</h2>
          <div>
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              Where are your biggest growth bottlenecks?
            </p>
            <p className="mt-1 text-xs text-[color:var(--text-muted)]">
              Select all that apply.
            </p>
            <div className="mt-4 grid gap-2">
              {BOTTLENECK_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.bottleneck.includes(value)}
                  onSelect={() => toggleBottleneck(value)}
                  label={label}
                  multi
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              What tools do you currently use to manage leads?
            </p>
            <div
              role="radiogroup"
              aria-label="Current tools"
              className="mt-4 grid gap-2"
            >
              {TOOLS_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.currentTools === value}
                  onSelect={() => update('currentTools', value)}
                  label={label}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              How quickly does your team typically follow up with new leads?
            </p>
            <div
              role="radiogroup"
              aria-label="Follow-up speed"
              className="mt-4 grid gap-2"
            >
              {FOLLOW_UP_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.followUpSpeed === value}
                  onSelect={() => update('followUpSpeed', value)}
                  label={label}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="btn-ghost flex-1"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceedStep2}
              className="btn-primary flex-[2] items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mt-6">
          <h2 className="sr-only">Step 3: Timing and contact</h2>
          <div>
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              Are you the decision-maker for investing in growth systems?
            </p>
            <div
              role="radiogroup"
              aria-label="Decision-maker"
              className="mt-4 grid gap-2"
            >
              {DECISION_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.decisionMaker === value}
                  onSelect={() => update('decisionMaker', value)}
                  label={label}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="font-display text-lg leading-snug text-[color:var(--text)]">
              What&rsquo;s your timeline for making a change?
            </p>
            <div
              role="radiogroup"
              aria-label="Timeline"
              className="mt-4 grid gap-2"
            >
              {TIMELINE_OPTIONS.map(({ value, label }) => (
                <OptionCard
                  key={value}
                  selected={form.timeline === value}
                  onSelect={() => update('timeline', value)}
                  label={label}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="qf-firstName" className="field-label">
                First name
              </label>
              <input
                id="qf-firstName"
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                value={form.firstName}
                onChange={(e) => update('firstName', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
                className="field"
              />
              {touched.firstName && form.firstName.trim() === '' ? (
                <p
                  role="alert"
                  className="mt-1 text-xs text-[color:var(--error)]"
                >
                  First name is required.
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="qf-email" className="field-label">
                Work email
              </label>
              <input
                id="qf-email"
                type="email"
                autoComplete="email"
                placeholder="you@yourbusiness.com"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                className="field"
              />
              {touched.email && !isValidEmail(form.email) ? (
                <p
                  role="alert"
                  className="mt-1 text-xs text-[color:var(--error)]"
                >
                  Enter a valid email address.
                </p>
              ) : null}
            </div>
          </div>

          {submitError ? (
            <p
              role="alert"
              className="mt-4 text-xs text-[color:var(--error)]"
            >
              {submitError}
            </p>
          ) : null}

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="btn-ghost flex-1"
              disabled={submitting}
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting || !canProceedStep3}
              aria-busy={submitting}
              className="btn-primary flex-[2] items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Scoring...
                </>
              ) : (
                <>
                  See my results
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {step === 'result-qualified' && (
        <div>
          <div
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full border-2"
            style={{ borderColor: 'var(--success)' }}
          >
            <Check className="h-6 w-6" style={{ color: 'var(--success)' }} />
          </div>

          <span className="section-eyebrow mt-6 block">You&rsquo;re a fit</span>
          <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight text-[color:var(--text)] md:text-3xl">
            Let&rsquo;s map your system.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
            Based on your answers, Sirius Systems can likely make a meaningful
            difference in how your business captures and converts leads. The
            next step is a 20-minute audit call — no pitch, just a system map
            you keep.
          </p>

          <div className="my-6 border-t border-[color:var(--border)]" />

          <ul className="space-y-3">
            {[
              "We'll review exactly where leads are leaking",
              "You'll get a written order of operations",
              'No obligation to move forward',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-[color:var(--text-muted)]"
              >
                <Check
                  aria-hidden
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--success)]"
                />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 flex w-full items-center justify-center gap-2"
          >
            Book the 20-min audit call
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>

          <p className="mt-3 text-center text-xs text-[color:var(--text-muted)]">
            Opens in a new tab. No account needed.
          </p>
        </div>
      )}

      {step === 'result-nurture' && (
        <div>
          <div
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full border"
            style={{ borderColor: 'var(--blue)' }}
          >
            <BookOpen className="h-6 w-6" style={{ color: 'var(--blue)' }} />
          </div>

          <span className="section-eyebrow mt-6 block">Your next step</span>
          <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight text-[color:var(--text)] md:text-3xl">
            Start here before the call.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)]">
            Based on your answers, there are a few things worth thinking
            through before a strategy call will be most useful. We&rsquo;ve put
            together a guide with the right questions to ask yourself first.
          </p>

          <div className="my-6 border-t border-[color:var(--border)]" />

          <div className="card-elevated p-5 mt-4">
            <span className="code-badge">Free Resource</span>
            <p className="mt-3 font-semibold text-base text-[color:var(--text)]">
              The Local Business Automation Audit
            </p>
            <p className="text-xs text-[color:var(--text-muted)] mt-1 leading-relaxed">
              10 questions that reveal exactly where your business is leaking
              leads, revenue, and time — before you spend a dollar on any tool.
            </p>
          </div>

          <p className="text-xs text-[color:var(--text-muted)] mt-3 text-center">
            We&rsquo;ll email this to {form.firstName} at {form.email}
          </p>

          {magnetSent ? (
            <p
              role="status"
              className="text-sm text-[color:var(--success)] text-center mt-6"
            >
              Guide sent — check your inbox.
            </p>
          ) : (
            <button
              type="button"
              // TODO: wire to email delivery — send lead magnet PDF to
              // form.email via GHL workflow or direct email API. For now,
              // this only flips local state to show a confirmation message.
              onClick={() => setMagnetSent(true)}
              className="btn-primary w-full flex items-center justify-center gap-2 mt-6"
            >
              Send me the guide
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          )}

          <div className="my-6 border-t border-[color:var(--border)]" />

          <p className="text-sm text-[color:var(--text-muted)] text-center">
            Already know what you need?
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full flex items-center justify-center gap-2 mt-3"
          >
            Book the call anyway
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      )}
    </div>
  )
}
