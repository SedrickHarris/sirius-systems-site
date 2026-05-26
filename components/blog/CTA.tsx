// components/blog/CTA.tsx
// Used inside MDX posts as:
//   <CTA
//     headline="Want to map this for your business?"
//     body="..."
//     href="/contact"
//     label="Book a discovery call"
//   />
//
// Consumes .btn-primary and existing card tokens from globals.css.
// href must be a real internal route — no invented landing pages.

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTAProps {
  headline: string
  body?:    string
  href:     string
  label:    string
}

export function CTA({ headline, body, href, label }: CTAProps) {
  return (
    <aside className="not-prose my-10 rounded-xl border border-[color:var(--border-strong)] bg-[color:var(--surface-2)] p-6 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--blue)]">
        Next step
      </p>
      <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-[color:var(--text)] md:text-2xl">
        {headline}
      </h2>
      {body && (
        <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-muted)] md:text-base">
          {body}
        </p>
      )}
      <div className="mt-6">
        <Link href={href} className="btn-primary inline-flex items-center gap-2">
          {label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </aside>
  )
}
