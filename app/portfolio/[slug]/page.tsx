'use client'

import { useState } from 'react'
import { projects } from '@/lib/projects'
import Image from 'next/image'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import NextJsImage from '@/components/gallery-image'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [index, setIndex] = useState(-1)

  const project = projects.find(({ slug }) => slug === params.slug)
  if (project) {
    const { name, description, images, details } = project

    return (
      <div className="w-full">
        {/* <breadcrumbs */}
        <div className="flex flex-col items-center justify-center gap-6 pb-10 text-center">
          <h1 className="mx-auto text-6xl tracking-wider text-pink-900">
            {name}
          </h1>
          <h2>{description}</h2>
          <hr className="w-[40%]" />
          {details && (
            <div className="text-left">
              <h3 className="pb-2 text-lg text-green-900">Project Details</h3>
              <ul>
                {details.map(({ heading, content }) => (
                  <li key={heading}>
                    <p className="font-light">
                      <strong>{heading}:&nbsp;</strong>
                      <span>{content}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <PhotoAlbum
          layout="rows"
          renderPhoto={NextJsImage}
          photos={images}
          onClick={({ index }) => setIndex(index)}
          defaultContainerWidth={1200}
          sizes={{ size: 'calc(100vw - 240px)' }}
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
