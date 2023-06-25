import Container from '@/components/container'
import MainNav from '@/components/main-nav'
import { Mail } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'SB Designs - About',
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
      <Container className="py-12">
        <div className="grid gap-6 pb-8">
          <h1 className="mx-auto text-center font-k2d text-6xl tracking-wider">
            Meet Sherry
          </h1>
          <hr className="mx-auto h-1 w-3/4 bg-gold" />
          <div className="flex flex-col py-10">
            <div className="mx-auto pl-6">
              <Image
                src="/img/about.jpeg"
                alt="Sherry Bortnick"
                width={764}
                height={798}
                priority
              />
            </div>
            <div className="flex flex-col gap-4 pt-10 font-sans md:px-24">
              <p>
                Sherry attended Metropolitan School of Design in Long Island,
                NY. After being involved with Real Estate for years, she decided
                to pursue her passion of becoming a decorator. She has years of
                experience working on a variety of projects, from Manhattan
                apartments to lavish Hamptons homes.
              </p>
              <p>
                Whether your home needs updating, full renovation, or a just
                finishing touch she handles any size of home or scope of design.
                Sherry experiments with space, color, and styles and takes a
                personal interest in creating a happy home for her clients.
              </p>
              <p>
                Sherry is located in Fort Lauderdale, FL, but offers both
                in-person and virtual consultations. Feel free to reach out and
                learn more!
              </p>

              <a
                href="mailto:sbdesigns516@gmail.com"
                className="jd-was-here flex pt-6"
              >
                <Mail />
                <span>&nbsp;sbdesigns516@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
