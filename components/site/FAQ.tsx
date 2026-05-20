import { Plus } from 'lucide-react'
import type { QA } from '@/lib/faq'

// Native <details>/<summary> for accessibility + no JS state.
// Visible Q/A pairs match the FAQPage JSON-LD on the same page.
export function FAQ({ items }: { items: QA[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details
          key={item.q}
          className="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 pr-1 transition-colors duration-fast hover:text-foreground">
            <h3 className="font-display text-lg leading-snug tracking-tight md:text-xl">
              {item.q}
            </h3>
            <span
              aria-hidden
              className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-strong text-muted transition-transform duration-base ease-out-soft group-open:rotate-45 group-open:border-accent group-open:text-accent"
            >
              <Plus className="h-3.5 w-3.5" />
            </span>
          </summary>
          <p className="pb-6 pr-12 text-base leading-relaxed text-muted">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  )
}
