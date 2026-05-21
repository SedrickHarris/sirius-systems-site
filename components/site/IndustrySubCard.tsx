import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

// Sub-vertical card used on industry hub pages. Renders the specific trades
// within an industry — Plumbing, HVAC, etc. inside /industries/home-services.
//
// Behavior:
//   - href + !comingSoon  → wraps in <Link>, card-hover styles
//   - comingSoon || !href → static <div>, shows a neutral "Coming soon" pill
//
// The "Coming soon" pill is intentionally subdued (text-muted, no accent fill)
// so it doesn't compete with primary actions or look like a CTA. Coming-soon
// cards are placeholders for vertical pages that will be built later, not
// invitations to click.

export interface IndustrySubCardProps {
  name: string
  blurb: string
  href?: string
  comingSoon?: boolean
  size?: 'featured' | 'compact'
}

export function IndustrySubCard({
  name,
  blurb,
  href,
  comingSoon = false,
  size = 'featured',
}: IndustrySubCardProps) {
  const linkable = Boolean(href) && !comingSoon
  const isFeatured = size === 'featured'

  const base = isFeatured
    ? 'group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 md:p-7'
    : 'group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-5'

  const hoverLink = isFeatured
    ? 'transition-colors duration-base ease-out-soft hover:border-border-strong'
    : 'transition-colors duration-base ease-out-soft hover:bg-surface-2'

  const titleClass = isFeatured
    ? 'font-display text-xl leading-tight tracking-tight md:text-2xl'
    : 'font-display text-base leading-tight tracking-tight'

  const blurbClass = isFeatured
    ? 'mt-3 text-sm leading-relaxed text-muted md:text-base'
    : 'mt-2 text-sm leading-relaxed text-muted'

  const Body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className={titleClass}>{name}</h3>
        {linkable ? (
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-muted transition-transform duration-fast ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            aria-hidden
          />
        ) : (
          comingSoon && (
            <span className="shrink-0 rounded-full border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-eyebrow text-muted-foreground">
              Coming soon
            </span>
          )
        )}
      </div>
      <p className={blurbClass}>{blurb}</p>
    </>
  )

  if (linkable) {
    return (
      <Link href={href!} className={`${base} ${hoverLink}`}>
        {Body}
      </Link>
    )
  }

  return <div className={base}>{Body}</div>
}
