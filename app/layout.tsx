import { Nunito, Red_Hat_Mono } from 'next/font/google'
import './globals.css'
import Nav from 'app/Nav'
import Footer from 'app/Footer'

const nunito = Nunito({
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
})

const redhatmono = Red_Hat_Mono({
  variable: '--font-redhatmono',
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
        <main className="h-screen">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
