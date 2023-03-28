import { Nunito, Alegreya } from 'next/font/google'
import 'styles/index.css'

const nunito = Nunito({
  variable: '--font-nunito',
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const alegreya = Alegreya({
  variable: '--font-alegreya',
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
    <html lang="en" className={`${nunito.variable} ${alegreya.variable}`}>
      <body>{children}</body>
    </html>
  )
}
