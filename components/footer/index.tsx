import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex w-full bg-black justify-center items-center h-72">
      <Image
        height={180}
        width={115}
        src="/logos/vertical-large.svg"
        alt="SB Designs logo"
      />
    </footer>
  )
}
