import { type ImageProps } from 'next/image'
import { type Photo } from 'react-photo-album'

interface ProjectProps {
  coverImage: ImageProps
  images: Array<Photo>
  name: string
  slug: string
  description: string
  details?: Array<{ heading: string; content: string }>
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
        width: 1071,
        height: 1000,
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
    details: [
      { heading: 'Size', content: '3500 sqft' },
      {
        heading: 'Space',
        content: 'Rooms: 5 beds, 2 living spaces, kitchen, backyard',
      },
      { heading: 'Features', content: 'Backyard renovation with pool' },
    ],
  },
]

export { projects }
