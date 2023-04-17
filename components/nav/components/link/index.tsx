'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  text: string
}

export default function NavLink({ href, text }: NavLinkProps): JSX.Element {
  const currentRoute = usePathname()

  return (
    <div className="flex relative">
      <Link
        href={href}
        className="text-lg text-sans md:text-sm"
        aria-current={currentRoute === href ? 'page' : undefined}
      >
        {text}
      </Link>
      {currentRoute === href && (
        <div className="absolute -bottom-2 w-full justify-center md:block hidden">
          <svg
            width="30"
            height="6"
            viewBox="0 0 30 6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" y2="0.5" x1="4" x2="26" stroke="currentColor" />
            <line y1="4" y2="4" x2="30" stroke="currentColor" />
          </svg>
        </div>
      )}
    </div>
  )
}
