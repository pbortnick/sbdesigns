'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FocusOn } from 'react-focus-on'
import MobileNavLinks from './components/mobile'
import DesktopNavLinks from './components/desktop'

export default function Nav() {
  const [showMobile, setShowMobile] = useState<boolean>(false)
  const closeMenu = () => setShowMobile(false)

  return (
    <FocusOn
      enabled={showMobile}
      onEscapeKey={closeMenu}
      onClickOutside={closeMenu}
      aria-label="Website navigation"
      className="flex items-center justify-between w-full p-6 container text-dark-dark-2 relative"
      as="nav"
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/logos/horizontal.svg"
          alt="homepage logo"
          width={183}
          height={36}
        />
      </Link>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2"
          aria-expanded="false"
          onClick={() => setShowMobile(!showMobile)}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.5H30V7.5H0V4.5ZM0 13.5H30V16.5H0V13.5ZM0 22.5H30V25.5H0V22.5Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <DesktopNavLinks />
      <MobileNavLinks show={showMobile} />
    </FocusOn>
  )
}
