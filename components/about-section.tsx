import Link from 'next/link'
import Container from './container'
import { Button } from './ui/button'

export default function AboutSection() {
  return (
    <Container className="flex flex-col items-center justify-center gap-10 py-14 font-sans">
      <h2 className="text-4xl font-bold">Feel at home in your home.</h2>
      <p className="mx-auto max-w-4xl text-center text-lg font-light">
        My name is Sherry Bortnick and I am a passionate and attentive interior
        designer. I work to have an understanding of my clients&apos; style
        preferences which I use to create an environment where they feel happy,
        comfortable, and, most importantly,{' '}
        <span className="underline underline-offset-4">at home</span>.
      </p>
      <Button asChild size="lg">
        <Link href="/portfolio">View my portfolio</Link>
      </Button>
    </Container>
  )
}
