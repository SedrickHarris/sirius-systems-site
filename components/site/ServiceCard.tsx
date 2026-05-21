import Link from 'next/link'
import {
  ArrowUpRight,
  Workflow,
  LayoutDashboard,
  ShieldCheck,
  Layers,
} from 'lucide-react'
import type { Service } from '@/lib/services'

// Lucide icon per service group. Keeps the card lean — one glyph that says
// "automation pillar" / "web pillar" / "reputation pillar" / "capstone"
// instead of a unique icon per service.
const ICON_FOR_GROUP: Record<Service['group'], typeof Workflow> = {
  ai: Workflow,
  'web-seo': LayoutDashboard,
  reputation: ShieldCheck,
  capstone: Layers,
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = ICON_FOR_GROUP[service.group]
  return (
    <Link
      href={`/${service.slug}`}
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
      <h3 className="card-title mt-5">{service.name}</h3>
      <p className="card-copy mt-2">{service.oneLiner}</p>
    </Link>
  )
}
