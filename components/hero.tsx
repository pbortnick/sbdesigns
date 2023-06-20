import Image from 'next/image'
import Container from './container'

export default function Hero() {
  return (
    <header className="relative w-full overflow-hidden background-halved bg-teal-halved">
      <Container className="flex w-full items-center justify-center">
        <div className="flex w-3/4 justify-center rounded-sm bg-teal-500 shadow-md shadow-stone-500 md:w-7/12">
          <h1 className="py-5 font-k2d text-2xl text-slate-950 md:text-5xl">
            SB Designs
          </h1>
        </div>
      </Container>
      <Image
        alt="clean living room with 2 chairs and a couch"
        src="/hero.jpg"
        width={1920}
        height={1279}
        className="mx-auto -mt-10 h-auto max-h-[500px] w-full max-w-[90%] object-cover object-center"
        priority
      />
    </header>
  )
}
