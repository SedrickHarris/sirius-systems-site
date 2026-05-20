import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ConstellationGlyph } from './ConstellationGlyph'
import type { Service } from '@/lib/services'

const GLYPH_BY_GROUP: Record<Service['group'], Parameters<typeof ConstellationGlyph>[0]['variant']> = {
  ai: 'pulse',
  'web-seo': 'wave',
  reputation: 'arc',
  capstone: 'beacon',
}

export function ServiceCard({ service }: { service: Service }) {
  const variant = GLYPH_BY_GROUP[service.group]
  return (
    <Link
      href={`/${service.slug}`}
      className="card card-hover group relative flex flex-col overflow-hidden p-6"
    >
      <div className="relative h-20 w-full overflow-hidden rounded-lg border border-border bg-background/50">
        <div className="absolute inset-0 bg-grid-faint bg-grid-32" />
        <div className="absolute inset-0">
          <ConstellationGlyph variant={variant} />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <h3 className="font-display text-lg leading-tight tracking-tight">
          {service.name}
        </h3>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-muted transition-transform duration-fast ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
          aria-hidden
        />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {service.oneLiner}
      </p>
    </Link>
  )
}
