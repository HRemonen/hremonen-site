'use client'

import type { ImageLoaderProps } from 'next/image'

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return `https://res.cloudinary.com/daty4gssm/image/upload/${params.join(',')}${src}`
}
