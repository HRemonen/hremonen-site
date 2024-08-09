import Image from 'next/image'
import cloudinaryLoader from '@/lib/image-loader'
import { use } from 'react'
import { getBlurDataURL } from '@/lib/images'

interface BlurrableImageProps {
  coverImageId: string
  alt: string
  width: number
  height: number
  sizes: string
  className: string
}

const BlurrableImage = ({
  coverImageId,
  alt,
  width,
  height,
  sizes,
  className,
}: BlurrableImageProps) => {
  const base64DataURL = use(getBlurDataURL(coverImageId))

  return (
    <Image
      src={coverImageId}
      loader={cloudinaryLoader}
      alt={alt}
      placeholder='blur'
      blurDataURL={base64DataURL}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
    />
  )
}

export default BlurrableImage
