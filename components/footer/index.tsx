import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="flex w-full bg-black justify-center items-center h-72 flex-col">
      <Image
        height={180}
        width={115}
        src="/logos/vertical-large.svg"
        alt="SB Designs logo"
      />
      <div className="text-dark-dark-6 pt-10">
        <a href="sbdesigns516@gmail.com>" className="flex gap-2">
          <EnvelopeIcon className="h-6" />
          <span className="font-sans">sbdesigns516@gmail.com</span>
        </a>
      </div>
    </footer>
  )
}
