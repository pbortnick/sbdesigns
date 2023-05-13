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
      alt: 'kitchen',
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
  {
    coverImage: {
      alt: 'dining table',
      src: '/img/portfolio/ftl/dining.jpeg',
      width: 1471,
      height: 1736,
    },
    images: [
      {
        alt: 'dining table',
        src: '/img/portfolio/ftl/dining.jpeg',
        width: 1471,
        height: 1736,
      },
      {
        alt: 'bathroom',
        src: '/img/portfolio/ftl/bathroom.jpeg',
        width: 1302,
        height: 1736,
      },
      {
        alt: 'bedroom',
        src: '/img/portfolio/ftl/bedroom.jpeg',
        width: 2170,
        height: 1627,
      },
      {
        alt: 'living room',
        src: '/img/portfolio/ftl/living-room.jpeg',
        width: 1059,
        height: 953,
      },
      {
        alt: 'balcony',
        src: '/img/portfolio/ftl/balcony.jpeg',
        width: 1302,
        height: 1736,
      },
    ],
    name: 'Fort Lauderdale',
    slug: 'fort-lauderdale',
    description:
      'An apartment with a beachy vibe to match the South Florida environment.',
    details: [
      { heading: 'Size', content: '1500 sqft' },
      {
        heading: 'Space',
        content: '2 beds, office, kitchen, living',
      },
      { heading: 'Features', content: '2 oversized balconies' },
    ],
  },
  {
    coverImage: {
      alt: 'Dining',
      src: '/img/portfolio/manhattan/dining.jpeg',
      width: 1302,
      height: 1736,
    },
    images: [
      {
        alt: 'Dining',
        src: '/img/portfolio/manhattan/dining.jpeg',
        width: 1302,
        height: 1736,
      },
      {
        alt: '',
        src: '/img/portfolio/manhattan/living-2.jpeg',
        width: 2170,
        height: 1627,
      },
      {
        alt: '',
        src: '/img/portfolio/manhattan/livin.jpeg',
        width: 2170,
        height: 1627,
      },
    ],
    name: 'Manhattan',
    slug: 'manhattan',
    description:
      'This mid-century modern design includes bright colors and different textures that tie everything together nicely.',
    details: [
      {
        heading: 'Rooms',
        content: 'large living and kitchen, multiple bedrooms',
      },
      {
        heading: 'Features',
        content:
          'Mid-century modern, accentuated fantastic views, open concept',
      },
    ],
  },
  {
    coverImage: {
      alt: 'Bed',
      src: '/img/portfolio/funky-nyc/bed.jpeg',
      width: 2170,
      height: 1627,
    },
    images: [
      {
        alt: 'Bed',
        src: '/img/portfolio/funky-nyc/bed.jpeg',
        width: 2170,
        height: 1627,
      },
      {
        alt: '',
        src: '/img/portfolio/funky-nyc/bed-2.jpeg',
        width: 1302,
        height: 1736,
      },
      {
        alt: '',
        src: '/img/portfolio/funky-nyc/area.jpeg',
        width: 2170,
        height: 1627,
      },
      {
        alt: '',
        src: '/img/portfolio/funky-nyc/art.jpeg',
        width: 1338,
        height: 1736,
      },
      {
        alt: '',
        src: '/img/portfolio/funky-nyc/living.jpeg',
        width: 1301,
        height: 1736,
      },
    ],
    name: 'Funky NYC',
    slug: 'funky-nyc',
    description:
      'When we say funky we mean an apartment full of personality designed with bright colors and textured walls.',
    details: [
      {
        heading: 'Rooms',
        content: '3 bedrooms, living room, kitchen and dining, plus bathrooms',
      },
      {
        heading: 'Features',
        content: 'A snakeskin textured wall, large windows, bright colors',
      },
    ],
  },
  {
    coverImage: {
      alt: '',
      src: '/img/portfolio/lakehouse/living.jpeg',
      width: 1182,
      height: 807,
    },
    images: [
      {
        alt: '',
        src: '/img/portfolio/lakehouse/living.jpeg',
        width: 1182,
        height: 807,
      },
      {
        alt: '',
        src: '/img/portfolio/lakehouse/dining.jpeg',
        width: 1189,
        height: 821,
      },
      {
        alt: '',
        src: '/img/portfolio/lakehouse/dining-2.jpeg',
        width: 1192,
        height: 441,
      },
      {
        alt: '',
        src: '/img/portfolio/lakehouse/kitchen.jpeg',
        width: 1460,
        height: 972,
      },
      {
        alt: '',
        src: '/img/portfolio/lakehouse/kitchen-2.jpeg',
        width: 1178,
        height: 785,
      },
    ],
    name: 'Lakehouse',
    slug: 'lakehouse',
    description:
      'Comfy wooden cabin vibe with rustic decor and modern accents.',
    details: [
      {
        heading: 'Rooms',
        content: 'large living, dining, and kitchen, multiple bedrooms.',
      },
      {
        heading: 'Features',
        content: 'Large open concept featuring stunning details.',
      },
    ],
  },
  {
    coverImage: {
      alt: '',
      src: '/img/portfolio/downtown-nyc/living.jpeg',
      width: 1302,
      height: 1736,
    },
    images: [
      {
        alt: '',
        src: '/img/portfolio/downtown-nyc/living-2.jpeg',
        width: 1302,
        height: 1736,
      },
      {
        alt: '',
        src: '/img/portfolio/downtown-nyc/bedroom.jpeg',
        width: 1189,
        height: 821,
      },
      {
        alt: '',
        src: '/img/portfolio/downtown-nyc/kitchen.jpeg',
        width: 1302,
        height: 1736,
      },
      {
        alt: '',
        src: '/img/portfolio/downtown-nyc/kitchen-2.jpeg',
        width: 2170,
        height: 1627,
      },
      {
        alt: '',
        src: '/img/portfolio/lakehouse/.jpeg',
        width: 1178,
        height: 785,
      },
    ],
    name: 'Downtown Manhattan',
    slug: 'downtown-manhattan',
    description:
      'This modern apartment brings the culture and contemporary lifestyle of Downtown Manhattan indoors.',
    details: [
      {
        heading: 'Rooms',
        content: '3 bed, open living/dining/kitchen space.',
      },
      {
        heading: 'Features',
        content: 'Modern furniture with a romantic feel.',
      },
    ],
  },
]

export { projects }
