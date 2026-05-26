// components/blog/FAQ.tsx
// Structured FAQ component for MDX posts.
//
// CRITICAL RULE (do-not-invent-rules.md + schema-plan.md):
// This component renders the visible FAQ text AND emits FAQPage JSON-LD
// from the SAME `items` array. The schema text always matches the visible
// text exactly. The post route page.tsx reads the items from this
// component's props (passed via MDX) and injects the JSON-LD in <head>.
//
// Usage in MDX:
//   import { FAQ } from '@/components/blog/FAQ'
//   <FAQ items={[
//     { q: "What is AI automation?", a: "AI automation is..." },
//     { q: "How long does setup take?", a: "Most businesses..." },
//   ]} />
//
// Do NOT use this component with invented Q/A pairs.

'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items:     FAQItem[]
  heading?:  string   // defaults to "Frequently asked questions"
}

export function FAQ({ items, heading = 'Frequently asked questions' }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="not-prose my-10" aria-label={heading}>
      <h2 className="mb-6 font-display text-xl font-semibold text-[color:var(--text)] md:text-2xl">
        {heading}
      </h2>
      <dl className="divide-y divide-[color:var(--border)]">
        {items.map((item, i) => (
          <div key={i} className="py-4">
            <dt>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 text-left"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="text-sm font-medium leading-snug text-[color:var(--text)] md:text-base">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    'mt-0.5 h-4 w-4 shrink-0 text-[color:var(--text-muted)] transition-transform duration-200',
                    open === i && 'rotate-180',
                  )}
                  aria-hidden
                />
              </button>
            </dt>
            <dd
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className={cn(
                'overflow-hidden text-sm leading-relaxed text-[color:var(--text-muted)] transition-all duration-200 md:text-base',
                open === i ? 'mt-3 max-h-screen opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
