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
        className='group relative mx-auto flex flex-row'
      >
        <Link
          as={`/posts/${slug}`}
          href='/posts/[slug]'
          className='rounded-md md:w-4/5 lg:w-4/5'
        >
          <Image
            src={coverImage}
            alt='' // As the image is decorative, an empty alt attribute is appropriate
            width={1024}
            height={420}
            className='md:max-w-4/5 lg:max-w-4/6 max-h-[420px] rounded-lg border-4 border-transparent object-cover group-hover:border-primary dark:group-hover:border-secondary'
          />
          <div className='right-0 top-0 flex flex-col items-end sm:absolute sm:left-[30%] lg:left-[380px]'>
            <div className='relative flex h-auto justify-end text-2xl sm:text-6xl lg:text-7xl'>
              <h2 className='w-full font-light leading-tight sm:text-right sm:font-semibold'>
                <span className='sm:rounded-bl-2xl sm:bg-[#fcfcfc] sm:box-decoration-clone sm:shadow-custom-light sm:dark:bg-[#1f2028] sm:dark:shadow-custom-dark'>
                  {title}
                </span>
              </h2>
            </div>
          </div>
        </Link>
      </article>
    </section>
  )
}

export default FeaturedSection
