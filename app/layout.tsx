import { Nunito, Red_Hat_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'

const nunito = Nunito({
  variable: '--font-nunito',
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const redhatmono = Red_Hat_Mono({
  variable: '--font-martian-mono',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'SB Designs',
  description: `I work to have an understanding of my clients' style preferences which I use to then enhance and create an environment where they can feel happy, comfortable, and, most importantly, at home.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${redhatmono.variable}`}>
      <body>
        <Nav />
        <main className="max-w-m md:max-w-lg lg:max-w-cl">{children}</main>
      </body>
    </html>
  )
}
