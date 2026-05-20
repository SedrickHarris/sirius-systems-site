import { type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
  variant?: 'page' | 'prose'
}

export function Container({ children, className, variant = 'page' }: ContainerProps) {
  return (
    <div
      className={cn(
        variant === 'page' ? 'container-page' : 'container-prose',
        className,
      )}
    >
      {children}
    </div>
  )
}
