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
	{ text: 'Testimonials', href: '/testimonials' },
]

export default function MainNav({ className, theme = 'light' }: { className?: string; theme?: 'dark' | 'light' }) {
  const pathname = usePathname()
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {navLinks.map(({ href, text }) => (
          <NavLink key={text} href={href} active={pathname === href} theme={theme}>
            {text}
          </NavLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
