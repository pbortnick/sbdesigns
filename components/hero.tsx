import Image from 'next/image'
import Container from './container'

export default function Hero() {
  return (
    <header className="w-100 relative">
      <Image
        alt="clean living room with 2 chairs and a couch"
        src="/hero.png"
        width={1600}
        height={900}
        className="absolute inset-0 top-8"
      />
      <Container className="w-100 flex items-center justify-center">
        <div className="flex w-7/12 justify-center rounded-sm bg-[#A9411B] bg-opacity-90 shadow-md">
          <h1 className="py-5 font-k2d text-4xl text-slate-950">SB Designs</h1>
        </div>
      </Container>
    </header>
  )
}
