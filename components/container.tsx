import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export default function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('container relative mx-auto', className)}>
      {children}
    </div>
  )
}
