'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Nav() {
  return (
    <div className="container flex justify-between items-center">
      <Image
        src="/logos/horizontal.svg"
        alt="homepage logo"
        width={183}
        height={36}
      />
      <nav className="grid grid-flow-col gap-5 py-5">
        <NavLink href="/about" text="About" />
        <NavLink href="/testimonials" text="Testimonials" />
        <NavLink href="/portfolio" text="Portfolio" />
        <NavLink href="/contact" text="Contact" />
      </nav>
    </div>
  )
}

interface NavLinkProps {
  href: string
  text: string
}

function NavLink({ href, text }: NavLinkProps): JSX.Element {
  const currentRoute = usePathname()

  return (
    <div className="flex relative">
      <Link href={href} className="text-sm font-sans">
        {text}
      </Link>
      {currentRoute === href && (
        <div className="absolute -bottom-2 w-full flex justify-center">
          <svg
            width="18"
            height="6"
            viewBox="0 0 18 6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="4" y1="0.5" x2="14" y2="0.5" stroke="currentColor" />
            <line y1="4" x2="18" y2="4" stroke="currentColor" />
          </svg>
        </div>
      )}
    </div>
  )
}
