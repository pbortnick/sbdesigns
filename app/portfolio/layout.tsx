import MainNav from '@/components/main-nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainNav />
      {children}
    </>
  )
}
