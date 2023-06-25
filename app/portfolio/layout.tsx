import Container from '@/components/container'
import MainNav from '@/components/main-nav'
import 'yet-another-react-lightbox/styles.css'

export const metadata = {
  title: 'SB Designs - Portfolio',
  description: `I work to have an understanding of my clients' style preferences which I use to create an environment where they feel happy, comfortable, and, most importantly, at home.`,
  openGraph: {
    images: ['https://www.sbdesigns516.com/og-image.png'],
  },
  twitter: {
    images: ['https://www.sbdesigns516.com/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 3,
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container className="flex flex-col items-center gap-10 pb-36 font-sans">
      <MainNav />
      {children}
    </Container>
  )
}
