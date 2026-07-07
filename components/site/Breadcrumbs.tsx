import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

// Reusable visible breadcrumb trail. Styled for the dark hero sections
// (section-deep / section-slate) where it is placed, above the eyebrow.
// The trail shape matches lib/schema.ts `breadcrumbList()`, so the same
// array can drive both the visible render and the BreadcrumbList JSON-LD.
//
// The final item is the current page: rendered as static text with
// aria-current, not a link.

export type Crumb = { name: string; url: string }

export function Breadcrumbs({
  trail,
  className = '',
}: {
  trail: Crumb[]
  className?: string
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-eyebrow text-white/50">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1
          return (
            <li key={crumb.url} className="flex items-center gap-x-2">
              {isLast ? (
                <span aria-current="page" className="text-white/80">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    href={crumb.url}
                    className="transition-colors hover:text-white"
                  >
                    {crumb.name}
                  </Link>
                  <ChevronRight
                    className="h-3 w-3 text-white/30"
                    aria-hidden
                  />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
