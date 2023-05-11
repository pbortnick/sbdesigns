import MainNav from '@/components/main-nav'
import './globals.css'
import { inter, k2d } from 'lib/fonts'

export const metadata = {
  title: 'Sb Designs',
  description: `I work to have an understanding of my clients' style preferences which I use to then enhance and create an environment where they can feel happy, comfortable, and, most importantly, at home.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${k2d.className}`}>
        <MainNav />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
