import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Industry } from '@/lib/industries'

export function IndustryChip({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-sm text-foreground/90 transition-colors duration-fast ease-out-soft hover:border-border-strong hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span>{industry.name}</span>
      <ArrowUpRight
        className="h-3.5 w-3.5 text-muted transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        aria-hidden
      />
    </Link>
  )
}
