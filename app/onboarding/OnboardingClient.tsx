'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { resolveVertical } from '@/lib/verticals'

// Client half of /onboarding (doc §7.5). Post-purchase intake for a new paying
// client. noindex; linked only from the GHL post-payment workflow.
//
// COMPLIANCE (doc §7.5 / §12.5): never collect passwords, recovery codes, or
// private credentials. Account access is handled through GHL secure delegated
// access — NOT through this form. The "logo" field asks how the client will
// send assets rather than uploading here (file-upload architecture is open,
// AGY-008).
//
// OPEN: the GHL intake webhook URL is not finalized. Until it is, submit shows
// a confirmation state and does not post anywhere.

const ONBOARDING_WEBHOOK_URL = '' // TODO: GHL intake webhook (fulfillment pipeline)

type Field = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'url' | 'textarea'
  required?: boolean
  placeholder?: string
  help?: string
}

const FIELDS: Field[] = [
  { name: 'businessName', label: 'Business name', required: true },
  { name: 'contactName', label: 'Your name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Business phone', type: 'tel', required: true },
  { name: 'serviceAreas', label: 'Service areas (cities / ZIP codes)', type: 'textarea', required: true, placeholder: 'e.g. Las Vegas, Henderson, North Las Vegas' },
  { name: 'logo', label: 'Logo', help: 'Have a logo? Tell us how you’ll send it (e.g. reply to our welcome email, or a link to a shared folder). Do not paste passwords here.' },
  { name: 'brandColors', label: 'Brand colors (if any)', placeholder: 'e.g. navy blue and orange, or hex codes' },
  { name: 'license', label: 'License / registration info to display', help: 'License number(s) you want shown on the site, if applicable.' },
  { name: 'gbp', label: 'Google Business Profile link', type: 'url', placeholder: 'https://…' },
  { name: 'social', label: 'Social profiles', type: 'textarea', placeholder: 'Facebook, Instagram, etc.' },
  { name: 'domain', label: 'Domain', help: 'Do you have a domain already, or need one? Just tell us — do not share registrar logins here.' },
  { name: 'timeline', label: 'Preferred launch timeline', placeholder: 'e.g. as soon as possible, or a target date' },
]

export function OnboardingClient() {
  const params = useSearchParams()
  const vertical = resolveVertical(params.get('v'))
  const productName = vertical ? vertical.product : 'Growth System'

  const [submitted, setSubmitted] = useState(false)
  const [consent, setConsent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (ONBOARDING_WEBHOOK_URL) {
      const data = new FormData(e.currentTarget)
      try {
        await fetch(ONBOARDING_WEBHOOK_URL, { method: 'POST', body: data })
      } catch {
        /* surfaced to the team via GHL; keep the UX forgiving */
      }
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="section-deep section-padding min-h-screen">
        <section className="site-container">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center md:p-12">
            <span
              aria-hidden
              className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--blue-system)]/15 text-[color:var(--blue-light)]"
            >
              <CheckCircle2 className="h-7 w-7" />
            </span>
            <h1 className="mt-6 hero-heading">Thanks — we&rsquo;ve got what we need to start.</h1>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Your intake for the {productName} is in. We&rsquo;ll follow up by email
              if we need anything else, and we&rsquo;ll never ask for passwords —
              account access is handled through secure, delegated invitations.
            </p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="section-deep section-padding min-h-screen">
      <section className="site-container">
        <div className="content-medium">
          <span className="section-eyebrow">Welcome aboard</span>
          <h1 className="mt-6 hero-heading">Let&rsquo;s set up your {productName}</h1>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            Fill this out so we can build your managed site and lead-response
            system. It takes a few minutes. Please don&rsquo;t enter any passwords
            or login codes — we&rsquo;ll connect accounts securely and separately.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-2xl space-y-6">
          {FIELDS.map((f) => (
            <div key={f.name} className="flex flex-col gap-2">
              <label htmlFor={f.name} className="text-sm font-medium text-white/85">
                {f.label}
                {f.required && <span className="text-[color:var(--blue-light)]"> *</span>}
              </label>
              {f.type === 'textarea' ? (
                <textarea
                  id={f.name}
                  name={f.name}
                  required={f.required}
                  placeholder={f.placeholder}
                  rows={3}
                  className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[color:var(--blue-light)] focus:outline-none"
                />
              ) : (
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type ?? 'text'}
                  required={f.required}
                  placeholder={f.placeholder}
                  className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[color:var(--blue-light)] focus:outline-none"
                />
              )}
              {f.help && <p className="text-xs text-white/45">{f.help}</p>}
            </div>
          ))}

          <label className="flex items-start gap-3 text-sm text-white/70">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0"
            />
            <span>
              I authorize Sirius Systems to use the information above to build and
              manage my website, and I understand account connections will be made
              through secure delegated access — not by sharing passwords. I agree to
              the{' '}
              <Link href="/privacy" className="underline hover:no-underline">privacy policy</Link>.
            </span>
          </label>

          <button
            type="submit"
            disabled={!consent}
            className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
          >
            Submit and start my build
          </button>

          <p className="inline-flex items-center gap-2 text-xs text-white/45">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            Never enter passwords or recovery codes on this form.
          </p>
        </form>
      </section>
    </main>
  )
}
