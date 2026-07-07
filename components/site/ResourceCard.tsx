import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

// Card used across the Resources hubs. Two states:
//   - linked   (href present): navigates to a live route
//   - upcoming (href absent):  static "Coming soon" card, no dead link
// Visual pattern mirrors the industries hub cards (card-solid + hover-lift)
// so Resources reads as part of the same system.

export type ResourceCardData = {
  title: string
  blurb: string
  href?: string
  Icon: React.ComponentType<{ className?: string }>
}

export function ResourceCard({ title, blurb, href, Icon }: ResourceCardData) {
  if (href) {
    return (
      <Link
        href={href}
        className="card-solid hover-lift group flex h-full flex-col p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <span
            aria-hidden
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--blue-system)]/10 text-[color:var(--blue-system)]"
          >
            <Icon className="h-5 w-5" />
          </span>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--text-charcoal)]"
            aria-hidden
          />
        </div>
        <h3 className="card-title mt-5">{title}</h3>
        <p className="card-copy mt-2 flex-1">{blurb}</p>
        <div className="mt-6 flex items-center border-t border-[color:var(--border-soft)] pt-4">
          <span className="text-sm text-[color:var(--blue-system)] group-hover:underline">
            Explore &rarr;
          </span>
        </div>
      </Link>
    )
  }

  return (
    <div className="card-solid flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span
          aria-hidden
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--text-muted)]/10 text-[color:var(--text-muted)]"
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-[color:var(--border-soft)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-[color:var(--text-faint)]">
          Coming soon
        </span>
      </div>
      <h3 className="card-title mt-5">{title}</h3>
      <p className="card-copy mt-2 flex-1">{blurb}</p>
    </div>
  )
}
