import { Post } from '@/interfaces/post'
import CategoryFormatter from '@/app/_components/formatters/category-formatter'
import DateFormatter from '@/app/_components/formatters/date-formatter'
import { Interpunct } from '@/app/_components/ui/icons'
import Image from 'next/image'
import Link from 'next/link'

interface SectionPostProps {
  post: Post
}

const SectionPost = ({ post }: SectionPostProps) => (
  <div className='mb-8 w-full lg:mb-12'>
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
      <div className='lg:text-md mb-2 flex items-center space-x-3 text-sm'>
        <div className='font-light text-accent-text dark:text-accent-text-dark'>
          <DateFormatter dateString={post.date} />
        </div>
        <Interpunct />
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

export default SectionPost
