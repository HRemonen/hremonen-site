import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedPost } from '@/lib/api'

const FeaturedSection = () => {
  const featured = getFeaturedPost()

  if (!featured) return null
  
  const { title, slug, coverImage } = featured
  
  return (
<section className='max-w-5xl mx-auto mb-16'>
  <article key={`featured-post-${title}`} className='group relative flex flex-row mx-auto overflow-hidden'>
    <Link
      as={`/posts/${slug}`}
      href='/posts/[slug]'
      className='w-3/5 rounded-md transition-all duration-300 ease-in-out group-hover:w-full'
    >
      <Image
        src={coverImage}
        alt="" // As the image is decorative, an empty alt attribute is appropriate
        width={1024}
        height={420}
        className='rounded-lg max-h-[420px] max-w-3/5 object-cover transition-all duration-500 ease-in-out group-hover:scale-150'
      />
      <div className='z-10 flex flex-col absolute left-[380px] bottom-0'>
        <h2 className='relative h-[420px] flex items-center justify-center text-6xl transition-all duration-500 ease-in-out transform translate-y-0 group-hover:-translate-y-full'>
          {title}
        </h2>
        <h2 className='absolute top-0 h-[420px] flex items-center justify-center text-6xl transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0'>
          {title}
        </h2>
      </div>
    </Link>
  </article>
</section>


)}

export default FeaturedSection