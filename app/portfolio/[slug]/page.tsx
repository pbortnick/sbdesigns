'use client'

import { useState } from 'react'
import { projects } from '@/lib/projects'
import Image from 'next/image'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [index, setIndex] = useState(-1)

  const project = projects.find(({ slug }) => slug === params.slug)
  if (project) {
    const { name, description, images } = project
    return (
      <div>
        <div className="flex flex-col items-center justify-center gap-6 pb-10 text-center">
          <h1 className="mx-auto text-6xl tracking-wider text-pink-900">
            {name}
          </h1>
          <hr />
          <h2>{description}</h2>
        </div>
        <PhotoAlbum
          layout="columns"
          targetRowHeight={300}
          photos={images}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images}
        />
      </div>
    )
  }

  return null
}

export async function generateStaticParams(): Promise<
  {
    slug: string
  }[]
> {
  return projects.map(({ slug }) => ({
    slug,
  }))
}
