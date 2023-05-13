import Image from 'next/image'
import type { RenderPhotoProps } from 'react-photo-album'

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  console.log({ photo })
  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        width={photo.width}
        height={photo.height}
        src={photo.src}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  )
}
