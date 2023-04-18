import type { ReactNode } from 'react'

export default function Grid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-8 container">
      {children}
    </div>
  )
}
