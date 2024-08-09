import Image, { ImageProps } from 'next/image'
import cloudinaryLoader from '@/lib/image-loader'
import { use } from 'react'
import { getBlurDataURL } from '@/lib/images'

interface BlurrableImageProps {
  src: string
  alt: string
  width: number
  height: number
  sizes?: string
  className: string
}

const BlurrableImage = ({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  ...rest
}: BlurrableImageProps & ImageProps) => {
  const base64DataURL = use(getBlurDataURL(src))

  return (
    <Image
      {...rest}
      src={src}
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
