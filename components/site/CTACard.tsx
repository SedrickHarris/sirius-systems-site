import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// The right-side card in the hero pattern. Carries the strategy-session pitch
// rather than a form (forms live on /contact). Per docs/content/page-copy-plan.md.
export function CTACard() {
  return (
    <aside className="relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-7 backdrop-blur-sm md:p-8">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-secondary/15 blur-3xl" />
      <div className="relative">
        <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
          Strategy Session
        </div>
        <h2 className="mt-4 font-display text-2xl leading-tight tracking-tight md:text-[1.65rem]">
          A 20-minute audit. No pitch.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Tell us where your leads, reviews, or follow-up are leaking. We&rsquo;ll
          map a system in twenty minutes &mdash; yours to take with you whether
          we work together or not.
        </p>
        <ul className="mt-6 space-y-3 text-sm">
          {[
            'What to automate first',
            'What to leave alone',
            'The right order of operations',
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
        <Link
          href="/contact"
          className="btn-primary mt-8 w-full"
        >
          Book the audit
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <p className="mt-4 text-center text-[11px] text-muted">
          No automated nurture. No surprise emails.
        </p>
      </div>
    </aside>
  )
}
