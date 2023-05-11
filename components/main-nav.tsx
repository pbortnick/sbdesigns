'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from 'components/ui/navigation-menu'

const navLinks = [
  {
    text: 'Home',
    href: '/',
  },
  { text: 'Portfolio', href: '/portfolio' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
]

export default function MainNav() {
  return (
    <NavigationMenu className="bg-gold-background">
      <NavigationMenuList>
        {navLinks.map(({ href, text }) => (
          <Link key={text} href={href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {text}
            </NavigationMenuLink>
          </Link>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
