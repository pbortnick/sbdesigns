import AboutSection from '@/components/about-section'
import Hero from '@/components/hero'
import MainNav from '@/components/main-nav'

export default function Home() {
  return (
    <>
      <MainNav className="bg-teal-950 pb-8 md:pb-6" theme="dark"/>
      <main>
        <Hero />
        <AboutSection />
      </main>
    </>
  )
}
