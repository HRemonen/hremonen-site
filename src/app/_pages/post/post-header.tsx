import CategoryFormatter from '@/app/_components/formatters/category-formatter'
import { Interpunct } from '@/app/_components/ui/icons'
import PostTitle from '@/app/_pages/post/post-title'
import Image from 'next/image'

type PostHeaderProps = {
  title: string
  date: string
  coverImage: string
  categories: string[]
}

const PostHeader = ({
  title,
  date,
  coverImage,
  categories,
}: PostHeaderProps) => {
  const localeDateString = new Date(date).toLocaleString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className='mb-16'>
      <Image
        src={coverImage}
        alt=''
        width={1240}
        height={640}
        className='mb-8 h-96 w-full rounded-3xl object-cover object-center'
      />

      <PostTitle>{title}</PostTitle>

      <div className='flex items-center space-x-3 text-sm font-[500] text-accent-text dark:text-accent-text-dark lg:text-base'>
        <div>{localeDateString}</div>
        <Interpunct />
        <div className='uppercase'>
          <CategoryFormatter categories={categories} />
        </div>
      </div>
    </div>
  )
}

export default PostHeader
