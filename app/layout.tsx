import './globals.css'
import { inter, k2d, josefinSans } from 'lib/fonts'
import Head from 'next/head'
import Footer from '@/components/footer'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SB Designs',
  description: `I work to have an understanding of my clients' style preferences which I use to create an environment where they feel happy, comfortable, and, most importantly, at home.`,
  openGraph: {
    images: ['https://www.sbdesigns516.com/og-image.png'],
  },
  twitter: {
    images: ['https://www.sbdesigns516.com/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${k2d.variable} ${josefinSans.variable}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
