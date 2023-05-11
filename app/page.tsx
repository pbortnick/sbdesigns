import AboutSection from '@/components/about-section'
import Hero from '@/components/hero'
import MainNav from '@/components/main-nav'

export default function Home() {
  return (
    <>
      <MainNav bgColor="gold-background" />
      <main className="">
        <Hero />
        <AboutSection />
      </main>
    </>
  )
}
