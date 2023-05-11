import { Inter, K2D, Josefin_Sans } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const k2d = K2D({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-k2d',
})

export const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '500', '600'],
  variable: '--font-josefin-sans',
})
