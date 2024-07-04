import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedPosts } from '@/lib/api'
import DateFormatter from './formatters/date-formatter'

const FeaturedSection = () => {
  const posts = getFeaturedPosts()

  if (!posts) return null
  
  return (
  <section className='mx-auto'>
    <h2 className='mb-4 text-4xl font-normal font-display leading-tight tracking-tighter md:text-6xl'>
      Featured posts.
    </h2>

    <div className="mb-16 md:grid md:grid-cols-2 md:gap-4">
      {posts.map(({title, coverImage, slug, date}) => (
        <article key={`featured-post-${title}`} className='first:col-span-2'>
          <Link
            as={`/posts/${slug}`}
            href='/posts/[slug]'
            className='group'
          >
            <Image
              src={coverImage}
              alt="" // As the image is decorative, an empty alt attribute is appropriate
              width={1024}
              height={480}
              className='rounded-lg'
            />
            <div className=''>
              <h3 className='mb-3 text-3xl font-normal font-display leading-snug group-focus:text-link group-focus:underline'>
                {title}
              </h3>
              <div className='mb-4 text-md dark:text-gray-200 text-gray-500'>
                <DateFormatter dateString={date} />
              </div>
            </div>
            </Link>
          </article>
        ))}
    </div>
  </section>
)}

export default FeaturedSection