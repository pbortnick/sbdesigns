import Image from 'next/image'
import Grid from './Grid'

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-neutral-800">
      <div className="w-full md:py-40 py-20">
        <Grid>
          <div className="flex flex-col gap-10 text-slate-50 col-span-1 md:col-span-4 lg:col-span-5">
            <h1 className="font-sans text-6xl font-bold pt-10">SB Designs</h1>
            <h2 className="font-mono text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus
              erat, porta nec felis sed, pellentesque commodo nisl. Curabitur
              pellentesque ligula orci, condimentum tempor diam volutpat vitae.
              Nam imperdiet urna sem, nec rutrum tortor ullamcorper sed. Sed vel
              nunc rhoncus, mollis sem ac, efficitur felis
            </h2>
          </div>
          <div className="md:col-start-4 lg:col-start-7 md:col-span-2 lg:col-span-6 pt-8 md:pt-0">
            <Image
              src="/img/home-hero.png"
              width={818}
              height={800}
              className="w-full rounded-md"
              alt="Living room with green couch, fur rug, a large polant, and curated wall art pieces"
            />
          </div>
        </Grid>
      </div>
    </div>
  )
}
