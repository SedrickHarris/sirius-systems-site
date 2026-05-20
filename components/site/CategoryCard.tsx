import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ConstellationGlyph } from './ConstellationGlyph'
import type { ServiceGroup } from '@/lib/services'

const GLYPH_BY_GROUP: Record<ServiceGroup, Parameters<typeof ConstellationGlyph>[0]['variant']> = {
  ai: 'orbit',
  'web-seo': 'grid',
  reputation: 'arc',
  capstone: 'beacon',
}

export function CategoryCard({
  group,
  label,
  blurb,
  href,
  count,
  featured = false,
}: {
  group: ServiceGroup
  label: string
  blurb: string
  href: string
  count?: number
  featured?: boolean
}) {
  return (
    <Link
      href={href}
      className={`card card-hover group relative flex flex-col overflow-hidden p-7 md:p-8 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div
        className={`relative ${
          featured ? 'h-32' : 'h-24'
        } w-full overflow-hidden rounded-xl border border-border bg-background/50`}
      >
        <div className="absolute inset-0 bg-grid-faint bg-grid-32" />
        <div className="absolute inset-0">
          <ConstellationGlyph variant={GLYPH_BY_GROUP[group]} />
        </div>
        {featured && (
          <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-eyebrow text-accent">
            Capstone
          </span>
        )}
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl leading-tight tracking-tight md:text-3xl">
            {label}
          </h3>
          {count !== undefined && (
            <p className="mt-1 font-mono text-xs uppercase tracking-eyebrow text-muted">
              {count} {count === 1 ? 'service' : 'services'}
            </p>
          )}
        </div>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-muted transition-transform duration-fast ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          aria-hidden
        />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
        {blurb}
      </p>
    </Link>
  )
}
