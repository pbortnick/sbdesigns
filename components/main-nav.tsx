'use client'

import {
  NavLink,
  NavigationMenu,
  NavigationMenuList,
} from 'components/ui/navigation-menu'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    text: 'Home',
    href: '/',
  },
  { text: 'Portfolio', href: '/portfolio' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
]

export default function MainNav({ bgColor }: { bgColor?: string }) {
  const pathname = usePathname()
  return (
    <NavigationMenu className={`bg-${bgColor}`}>
      <NavigationMenuList>
        {navLinks.map(({ href, text }) => (
          <NavLink key={text} href={href} active={pathname === href}>
            {text}
          </NavLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
