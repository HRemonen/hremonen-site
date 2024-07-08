import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedPost } from '@/lib/api'

const FeaturedSection = () => {
  const featured = getFeaturedPost()

  if (!featured) return null

  const { title, slug, coverImage } = featured

  return (
    <section className='mx-auto mb-16 max-w-5xl'>
      <article
        key={`featured-post-${title}`}
        className='duration-600 group relative mx-auto flex flex-row overflow-hidden transition-all ease-in-out'
      >
        <Link
          as={`/posts/${slug}`}
          href='/posts/[slug]'
          className='duration-600 w-3/5 rounded-md transition-all ease-in-out group-hover:w-full'
        >
          <Image
            src={coverImage}
            alt='' // As the image is decorative, an empty alt attribute is appropriate
            width={1024}
            height={420}
            className='max-w-3/5 duration-600 max-h-[420px] rounded-lg object-cover transition-all ease-in-out group-hover:scale-150'
          />
          <div className='absolute bottom-0 left-[380px] z-10 flex flex-col font-semibold'>
            <div className='duration-600 relative flex h-[420px] translate-y-0 transform items-center justify-center text-7xl transition-all ease-in-out group-hover:-translate-y-full'>
              <h2 className='text-right leading-tight'>
                <span className='rounded-2xl bg-[#fcfcfc] box-decoration-clone shadow-custom-light dark:bg-[#1f2028] dark:shadow-custom-dark'>
                  {title}
                </span>
              </h2>
            </div>
            <h2 className='duration-600 absolute top-0 flex h-[420px] translate-y-full transform items-center justify-center text-6xl transition-all ease-in-out group-hover:translate-y-0'>
              {title}
            </h2>
          </div>
        </Link>
      </article>
    </section>
  )
}

export default FeaturedSection
