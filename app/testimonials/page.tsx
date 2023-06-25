import Container from '@/components/container'
import MainNav from '@/components/main-nav'
import Image from 'next/image'
import { testimonials } from '@/lib/data/testimonials'
import Link from 'next/link'
import { Quote } from 'lucide-react'

export const metadata = {
  title: 'SB Designs - Testimonials',
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

export default function About() {
  return (
    <>
      <MainNav />
      <Container className="pt-12 pb-36">
        <div className="grid pb-8 gap-10">
          <h1 className="mx-auto text-center font-k2d text-4xl md:text-6xl tracking-wider text-teal-700">
            Testimonials
          </h1>
          <hr className="mx-auto h-2 md:h-4 w-3/4 bg-teal-800 rounded" />
					<ul className="grid gap-8 ">
						{testimonials.map(({ name, location, quote, image, link}) => (
							<li key={name} className="group grid grid-cols-1 md:grid-cols-6 gap-8">
								<div className="md:col-span-3 p-6 pb-0 md:p-10 md:pb-10 md:group-odd:order-last">
									<div className="relative w-full h-full group cursor-pointer">
										<Link className="inset-0 absolute z-10" href={link} />
										<Image {...image} alt={image.alt} className="rounded group-hover:opacity-50"/>
										<div className="hidden group-hover:flex absolute inset-0 bg-slate-500 bg-opacity-50 rounded" />
										<div className="hidden group-hover:flex absolute inset-0 justify-center items-center bg-transparent">
											<span className="text-xl text-white">View details</span>
										</div>
									</div>
								</div>
								<div className="flex flex-col text-center md:col-span-3 justify-center">
									<h2 className="font-k2d pb-2 text-2xl">{name}</h2>
									<p className="font-sans">{location}</p>
									<div className="pt-4">
										<div className="inline-block">
											<Quote stroke="#319795" size={20} transform="scale(-1,1)"/>
										</div>
										<p className="font-sans text-sm font-light px-2 inline">{quote}</p>
										<div className="inline-block">
											<Quote stroke="#319795" size={20} />
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
      </Container>
    </>
  )
}
