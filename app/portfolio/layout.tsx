import Container from '@/components/container'
import MainNav from '@/components/main-nav'
import 'yet-another-react-lightbox/styles.css'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container className="flex flex-col items-center gap-10 py-14 font-sans">
      <MainNav />
      {children}
    </Container>
  )
}
