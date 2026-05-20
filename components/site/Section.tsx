import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionProps = {
  children: ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div' | 'article'
}

export function Section({ children, className, id, as: As = 'section' }: SectionProps) {
  return (
    <As id={id} className={cn('py-16 md:py-24', className)}>
      {children}
    </As>
  )
}
