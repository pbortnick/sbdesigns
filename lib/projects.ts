import { type ImageProps } from 'next/image'
import { type Photo } from 'react-photo-album'

interface ProjectProps {
  coverImage: ImageProps
  images: Array<Photo>
  name: string
  slug: string
  description: string
}

const projects: Array<ProjectProps> = [
  {
    coverImage: {
      src: '/img/portfolio/jericho/kitchen.jpeg',
      alt: '',
      width: 760,
      height: 760,
    },
    images: [
      {
        src: '/img/portfolio/jericho/kitchen.jpeg',
        alt: '',
        width: 514,
        height: 1136,
      },
      {
        src: '/img/portfolio/jericho/den.jpeg',
        alt: '',
        width: 1514,
        height: 1136,
      },
      {
        src: '/img/portfolio/jericho/pool-night.jpeg',
        alt: '',
        width: 852,
        height: 1136,
      },
      {
        src: '/img/portfolio/jericho/backyard.jpeg',
        alt: '',
        width: 1514,
        height: 1136,
      },
    ],
    name: 'Jericho',
    slug: 'jericho',
    description:
      'A suburban home that gives the feel of a secluded island resort.',
  },
]

export { projects }
