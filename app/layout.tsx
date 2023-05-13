import Container from '@/components/container'
import './globals.css'
import { inter, k2d, josefinSans } from 'lib/fonts'
import Head from 'next/head'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Sb Designs',
  description: `I work to have an understanding of my clients' style preferences which I use to create an environment where they feel happy, comfortable, and, most importantly, at home.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/png" sizes="32x32" />
        <meta
          property="og:image"
          content="https://www.sbdesigns516.com/og-image.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={`${inter.variable} ${k2d.variable} ${josefinSans.variable}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
