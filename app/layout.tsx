import Container from '@/components/container'
import './globals.css'
import 'yet-another-react-lightbox/styles.css'
import { inter, k2d, josefinSans } from 'lib/fonts'

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
      <body
        className={`${inter.variable} ${k2d.variable} ${josefinSans.variable}`}
      >
        <Container className="flex flex-col items-center gap-10 py-14 font-sans">
          {children}
        </Container>
      </body>
    </html>
  )
}
