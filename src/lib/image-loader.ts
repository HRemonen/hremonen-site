'use client'

export default function cloudinaryLoader({ src, width, quality }: any) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return `https://res.cloudinary.com/daty4gssm/image/upload/${params.join(',')}${src}`
}
