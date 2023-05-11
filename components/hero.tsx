import Image from 'next/image'
import Container from './container'

export default function Hero() {
  return (
    <header className="background-halved relative w-full overflow-hidden bg-gold-halved">
      <Container className="flex w-full items-center justify-center">
        <div className="flex w-7/12 justify-center rounded-sm bg-[#BE4B21] shadow-md shadow-stone-500">
          <h1 className="py-5 font-k2d text-5xl text-slate-950">SB Designs</h1>
        </div>
      </Container>
      <Image
        alt="clean living room with 2 chairs and a couch"
        src="/hero.png"
        width={1600}
        height={900}
        className="mx-auto -mt-10 h-auto max-h-[500px] w-full max-w-[90%] object-cover object-bottom"
      />
    </header>
  )
}
