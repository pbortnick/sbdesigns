import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-100 flex flex-col gap-4 bg-teal-950 px-8 py-16 text-white">
      <p className="font-k2d text-xl">SB Designs</p>
      <p className="text-md font-serif font-normal">
        Contact me! I&lsquo;d love to connect with you.
      </p>
      <div>
        <a
          href="mailto:sbdesigns516@gmail.com>"
          className="text-md flex items-center font-serif font-light"
        >
          <Mail size={18} />
          <span className="pl-2">&nbsp;sbdesigns516@gmail.com</span>
        </a>
        <a
          href="tel:+15168528668"
          className="text-md flex items-center pt-2 font-serif"
        >
          <Phone size={18} />
          <span className="pl-2">(516) 852-8668</span>
        </a>
      </div>
    </footer>
  )
}
