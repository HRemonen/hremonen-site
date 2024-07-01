import Link from 'next/link'
import DateFormatter from '../formatters/date-formatter'
import CategoryFormatter from '../formatters/category-formatter'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
  categories: string[]
}

const PostPreview = ({
  title,
  date,
  excerpt,
  slug,
  categories
}: Props) => (
  <li>
    <article>
      <CategoryFormatter categories={categories} />
      <h3 className='mb-3 text-3xl font-normal font-display leading-snug text-gray-900'>
        <Link
          as={`/posts/${slug}`}
          href='/posts/[slug]'
          className='hover:underline hover:text-link focus:text-link focus:underline visited:text-visited'
        >
          {title}
        </Link>
      </h3>
      <blockquote className='mb-4 text-md font-light font-body leading-relaxed text-gray-700'>{excerpt}</blockquote>
      <div className='mb-4 text-md text-gray-500'>
        <DateFormatter dateString={date} />
      </div>
    </article>
  </li>
)

export default PostPreview
