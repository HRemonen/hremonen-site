import CategoryFormatter from '@/app/_components/formatters/category-formatter'
import { Interpunct } from '@/app/_components/ui/icons'
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
    <div className='mb-16 px-2 xs:px-8'>
      <Image
        src={coverImage}
        alt=''
        width={1240}
        height={640}
        className='mb-8 h-96 w-full rounded-3xl object-cover object-center'
      />

      <h1 className='4xl:text-8xl mb-4 text-center text-2xl font-[500] leading-tight tracking-tighter text-text dark:text-text-dark xs:text-left sm:text-4xl md:text-5xl md:leading-none xl:text-6xl'>
        {title}
      </h1>

      <div className='flex flex-col items-center space-x-3 space-y-2 text-sm font-[500] text-accent-text dark:text-accent-text-dark xs:flex-row xs:space-y-0 lg:text-base'>
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
