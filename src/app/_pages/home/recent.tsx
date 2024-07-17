import CategoryFormatter from '@/app/_components/formatters/category-formatter'
import DateFormatter from '@/app/_components/formatters/date-formatter'
import { Post } from '@/interfaces/post'
import { getRecentPosts } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'

const RecentSectionTitle = () => (
  <div className='mb-12 w-full justify-center lg:mb-16'>
    <div className='flex flex-col items-start space-y-3 lg:space-y-5'>
      <div className='inline-flex items-center space-x-2'>
        <div className='h-1.5 w-1.5 rounded-full bg-accent-text dark:bg-accent-text-dark' />
        <div className='text-sm font-light text-accent-text dark:text-accent-text-dark lg:text-base'>
          Recent blog posts
        </div>
      </div>
      <h2 className='4xl:text-7xl 4xl:max-w-lg max-w-sm text-balance font-display text-2xl leading-none tracking-tight text-gray-600 dark:text-gray-100 md:text-3xl lg:text-4xl xl:max-w-md 2xl:text-6xl'>
        Take a look at the latest posts.
      </h2>
    </div>
  </div>
)

const RecentSectionPost = ({ post }: { post: Post }) => (
  <div className='mb-8 w-full lg:mb-12'>
    <Link
      href={`/posts/${post.slug}`}
      passHref
      className='group/recent-post outline-none'
    >
      <Image
        src={post.coverImage}
        alt='' // As the image is decorative, an empty alt attribute is appropriate
        width={580}
        height={420}
        className='mb-2 max-h-[420px] rounded-md object-cover outline-none ring-link ring-offset-2 group-hover/recent-post:ring-2 group-focus/recent-post:ring-2 dark:ring-link-dark md:mb-4 md:rounded-3xl'
      />
      <div className='lg:text-md mb-2 flex items-center space-x-3 text-sm'>
        <div className='font-light text-accent-text dark:text-accent-text-dark'>
          <DateFormatter dateString={post.date} />
        </div>
        <div className='h-1.5 w-1.5 rounded-full bg-accent-text dark:bg-accent-text-dark' />
        <div className='font-light uppercase text-accent-text dark:text-accent-text-dark'>
          <CategoryFormatter categories={post.categories} />
        </div>
      </div>
      <h3 className='4xl:text-2xl text-xl leading-tight tracking-tight group-hover/recent-post:text-link group-hover/recent-post:underline group-focus/recent-post:text-link group-focus/recent-post:underline dark:group-hover/recent-post:text-link-dark dark:group-focus/recent-post:text-link-dark xl:text-[2rem]'>
        {post.title}
      </h3>
    </Link>
  </div>
)

const RecentSection = () => {
  const posts = getRecentPosts()

  if (!posts) return null

  return (
    <section className='mx-auto mb-16 max-w-5xl'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full px-4 md:w-1/2'>
          <RecentSectionTitle />
          {posts.slice(0, 2).map((post) => (
            <RecentSectionPost key={post.slug} post={post} />
          ))}
        </div>
        <div className='w-full px-4 md:w-1/2'>
          {posts.slice(2, 5).map((post) => (
            <RecentSectionPost key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentSection
