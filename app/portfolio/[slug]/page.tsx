'use client'

import { useState } from 'react'
import { projects } from '@/lib/projects'
import { ArrowLeft } from 'lucide-react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import NextJsImage from '@/components/gallery-image'
import Link from 'next/link'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [index, setIndex] = useState(-1)

  const project = projects.find(({ slug }) => slug === params.slug)
  if (project) {
    const { name, description, images, details } = project

    return (
      <div className="w-full">
        <nav className="pb-8">
          <Link href="/portfolio" className="flex font-light">
            <ArrowLeft strokeWidth={1} />
            &nbsp;Back to all projects
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center gap-6 pb-10 text-center">
          <h1 className="mx-auto text-6xl tracking-wider text-pink-900">
            {name}
          </h1>
          <h2 className="pb-4">{description}</h2>
          <hr className="w-[40%] py-4" />
          {/* add icons */}
          {details && (
            <div className="pb-3 text-left">
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
