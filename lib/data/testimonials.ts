import { type ImageProps } from 'next/image'
import { type Photo } from 'react-photo-album'

interface TestimonialProps {
  name: string
  quote: string
  location: string
  image: ImageProps
  link: string
}

const testimonials: Array<TestimonialProps> = [
  {
    name: 'Karyn Greenblatt',
    location: 'Manhattan, NY',
    quote: `Sherry did an AMAZING job helping me renovate my kitchen, den, living room and bedroom.  Having worked with her on such a large project, she has the unique ability to really work within your budget, take what you already have and make it look new and refreshed.  She listens and understands what you are looking for and finds unique ways to make it your own. She really has the vision to transform a space and make you find and consider things that you might never have otherwise picked!  Sherry's great taste, natural talent, and warm personality make her an absolute pleasure to work with!`,
    image: {
      src: '/img/testimonials/testimonial_1.png',
      alt: 'living room',
      width: 1788,
      height: 1130,
    },
    link: '/portfolio/downtown-manhattan',
  },
	{
    name: 'Lisa Zorfas',
    location: 'Long Island, NY',
    quote: `Sherry is amazing!  I hired Sherry for 2 different projects.  One in 2018 (really just an update using mostly what was already in my house) and again in 2020(complete renovation).  Both times Sherry was extremely professional, offered great ideas and suggestions and worked hard to help me achieve the goals of my project while staying in my budget.  Sherry has incredible vision, listens to her clients needs and works hard to satisfy those needs. She treats her job as if she was designing her own house.  Every time I walk into my house I am so happy and love every decision Sherry and I made to upgrade my home.`,
    image: {
      src: '/img/testimonials/testimonial_2.png',
      alt: 'dining room and bar',
      width: 1790,
      height: 1366,
    },
    link: '/portfolio/manhattan',
  },
	{
    name: 'Tama Lustberg',
    location: 'Hamptons, NY',
    quote: `It has been such a pleasure to work with Sherry Bortnick to create our ultimate " happy place". Sherry has helped me to decorate 2 city apartments and our lake house. Sherry is so attentive, efficient, resourceful and has an incredible eye. I love simplicity and neutrals and Sherry  has done a great job taking my feedback and adding just the right accents whether it be a contrast pop of color in a swivel chair or glass bottle accessories. She knows how to make a minimalist focus look incredible. I can't wait to work with Sherry on my next project!`,
    image: {
      src: '/img/testimonials/testimonial_3.png',
      alt: 'kitchen area with wine bar',
      width: 662,
      height: 486,
    },
    link: '/portfolio/lakehouse',
  },
	{
    name: 'Leslie Adler',
    location: 'East Hampton, NY',
    quote: `I loved working with Sherry on our NYC apartment and our East Hampton house.  She transformed both places and made each feel like home.  Sherry is collaborative and creative and just a pleasure to work with.  She respects your budget and your taste and works hard to maximize both.  Walking in to a beautifully decorated and accessorized home gives me a sense of peace and makes me happy.  I have Sherry to thank for that.`,
    image: {
      src: '/img/testimonials/testimonial_4.png',
      alt: 'living room with view of Manhattan',
      width: 1790,
      height: 1366,
    },
    link: '/portfolio/nyc',
  },
]

export { testimonials }
