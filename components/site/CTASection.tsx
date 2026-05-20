import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// The bottom-of-page CTA strip. Heavy on visual weight, single primary action.
export function CTASection({
  eyebrow = 'Ready when you are',
  headline = "Stop losing leads, reviews, and revenue to manual work.",
  body = "Book a twenty-minute audit. Map the gaps, walk away with the plan.",
  primary = { label: 'Book a discovery call', href: '/contact' },
  secondary,
}: {
  eyebrow?: string
  headline?: string
  body?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/40">
      <div className="absolute inset-0 bg-grid-faint bg-grid-48 opacity-60" />
      <div className="absolute inset-0 glow-accent" />
      <div className="container-page relative py-20 md:py-28">
        <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
          {eyebrow}
        </div>
        <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          {headline}
        </h2>
        <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
          {body}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href={primary.href} className="btn-primary">
            {primary.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn-ghost">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
