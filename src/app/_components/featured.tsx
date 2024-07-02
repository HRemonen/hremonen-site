import { type Post } from '@/interfaces/post'
import Link from 'next/link'
import Image from 'next/image'
import DateFormatter from './formatters/date-formatter'

type FeaturedPostsProps = {
  posts: Post[]
}

const FeaturedSection = ({posts}: FeaturedPostsProps) => (
  <section className='max-w-3xl mx-auto'>
    <h2 className='mb-4 text-4xl font-normal font-display leading-tight tracking-tighter md:text-6xl'>
      Featured posts.
    </h2>

    <div className="mb-16">
      {posts.map(({title, coverImage, slug, date}) => (
        <article key={`featured-post-${title}`}>
          <Link
            as={`/posts/${slug}`}
            href='/posts/[slug]'
            className='hover:underline hover:text-link focus:text-link focus:underline visited:text-visited'
          >
            <Image
              src={coverImage}
              alt="" // As the image is decorative, an empty alt attribute is appropriate
              width={800}
              height={400}
              className='rounded-lg'
            />
              <h3 className='mb-3 text-3xl font-normal font-display leading-snug text-gray-900'>
                {title}
              </h3>
              <div className='mb-4 text-md text-gray-500'>
                <DateFormatter dateString={date} />
              </div>
            </Link>
          </article>
        ))}
    </div>
  </section>
)

export default FeaturedSection