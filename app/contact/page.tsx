import Container from '@/components/container'
import MainNav from '@/components/main-nav'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <MainNav />
      <Container className="py-12">
        <div className="grid gap-6 pb-8">
          <h1 className="mx-auto text-6xl tracking-wider text-pink-900">
            Contact Me
          </h1>
          <hr />
          <p>I&apos;d love to hear from you!</p>
          <a href="mailto:sbdesigns516@gmail.com>" className="flex">
            <Mail />
            <span>&nbsp;sbdesigns516@gmail.com</span>
          </a>
        </div>
      </Container>
    </>
  )
}
