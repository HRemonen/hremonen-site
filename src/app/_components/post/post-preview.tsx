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
      <h3 className='mb-3 text-3xl font-normal font-display leading-snug'>
        <Link
          as={`/posts/${slug}`}
          href='/posts/[slug]'
          className='hover:underline hover:text-link dark:hover:text-link-dark focus:underline focus:text-link dark:focus:text-link-dark focus:visited:text-link dark:focus:visited:text-link-dark visited:text-visited dark:visited:text-visited-dark'
        >
          {title}
        </Link>
      </h3>
      <blockquote className='mb-4 text-md font-light font-body leading-relaxed text-text dark:text-text-dark'>{excerpt}</blockquote>
      <div className='mb-4 text-md text-accent-text dark:text-accent-text-dark'>
        <DateFormatter dateString={date} />
      </div>
    </article>
  </li>
)

export default PostPreview
