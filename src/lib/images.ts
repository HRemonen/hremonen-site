async function getBase64DataURL(imageURL: string) {
  const res = await fetch(imageURL)
  const arrayBuffer = await res.arrayBuffer()

  const base64 = Buffer.from(arrayBuffer).toString('base64')
  const mime = res.headers.get('Content-Type') ?? 'image/webp'

  return `data:${mime};base64,${base64}`
}

// eslint-disable-next-line import/prefer-default-export
export async function getBlurDataURL(imageId: string) {
  const transformations = ['f_auto', 'c_limit', 'w_10', 'q_auto']
  const cloudinaryURL = `https://res.cloudinary.com/daty4gssm/image/upload/${transformations.join(',')}${imageId}`

  const base64DataURL = await getBase64DataURL(cloudinaryURL)

  return base64DataURL
}
