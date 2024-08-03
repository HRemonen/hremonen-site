import { Post } from '@/interfaces/post'
import CategoryFormatter from '@/app/_components/formatters/category-formatter'
import DateFormatter from '@/app/_components/formatters/date-formatter'
import { Interpunct } from '@/app/_components/ui/icons'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => (
  <div className='mb-16 w-full md:mb-12'>
    <Link
      href={`/blog/${post.slug}`}
      passHref
      className='group/recent-post outline-none'
    >
      <Image
        src={post.coverImage}
        alt='' // As the image is decorative, an empty alt attribute is appropriate
        width={580}
        height={420}
        className='mb-2 max-h-[420px] rounded-md object-cover outline-none ring-link ring-offset-4 ring-offset-[#fcfcfc] transition duration-700 ease-in-out group-hover/recent-post:ring-2 group-focus/recent-post:ring-2 dark:ring-link-dark dark:ring-offset-[#1f2028] md:mb-4 md:rounded-3xl'
      />
      <h3 className='4xl:text-2xl mb-4 text-center text-xl leading-tight tracking-tight group-hover/recent-post:text-link group-hover/recent-post:underline group-focus/recent-post:text-link group-focus/recent-post:underline dark:group-hover/recent-post:text-link-dark dark:group-focus/recent-post:text-link-dark xs:text-left xl:text-[2rem]'>
        {post.title}
      </h3>
      <div className='flex flex-col items-center space-x-2 space-y-1 text-sm font-medium text-accent-text dark:text-accent-text-dark xs:flex-row xs:space-y-0 lg:text-base'>
        <DateFormatter
          dateString={post.date}
          formatOptions={{ day: 'numeric', month: 'long', year: 'numeric' }}
        />
        <Interpunct />
        <div className='uppercase'>
          <CategoryFormatter categories={post.categories} />
        </div>
      </div>
    </Link>
  </div>
)

export default PostCard
