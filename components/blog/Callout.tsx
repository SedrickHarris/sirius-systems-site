// components/blog/Callout.tsx
// Used inside MDX posts as: <Callout type="info">...</Callout>
// Consumes existing CSS tokens from globals.css — no new hex values.

import { cn } from '@/lib/cn'
import { Info, AlertTriangle, Lightbulb } from 'lucide-react'
import type { ReactNode } from 'react'

type CalloutType = 'info' | 'warning' | 'tip'

interface CalloutProps {
  type?: CalloutType
  children: ReactNode
}

const config: Record<
  CalloutType,
  {
    icon:         typeof Info
    borderColor:  string
    bgColor:      string
    iconColor:    string
    label:        string
  }
> = {
  info: {
    icon:        Info,
    borderColor: 'border-[color:var(--blue)]',
    bgColor:     'bg-[color:var(--surface)]',
    iconColor:   'text-[color:var(--blue)]',
    label:       'Note',
  },
  warning: {
    icon:        AlertTriangle,
    borderColor: 'border-[color:var(--warning)]',
    bgColor:     'bg-[color:var(--surface)]',
    iconColor:   'text-[color:var(--warning)]',
    label:       'Warning',
  },
  tip: {
    icon:        Lightbulb,
    borderColor: 'border-[color:var(--yellow)]',
    bgColor:     'bg-[color:var(--surface)]',
    iconColor:   'text-[color:var(--yellow)]',
    label:       'Tip',
  },
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const { icon: Icon, borderColor, bgColor, iconColor, label } = config[type]

  return (
    <aside
      className={cn(
        'my-6 flex gap-3 rounded-lg border-l-4 p-4',
        borderColor,
        bgColor,
      )}
      role="note"
      aria-label={label}
    >
      <Icon
        className={cn('mt-0.5 h-5 w-5 shrink-0', iconColor)}
        aria-hidden
      />
      <div className="min-w-0 text-sm leading-relaxed text-[color:var(--text-muted)]">
        {children}
      </div>
    </aside>
  )
}
