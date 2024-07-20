import Link from 'next/link'
import DateFormatter from '@/app/_components/formatters/date-formatter'
import CategoryFormatter from '@/app/_components/formatters/category-formatter'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
  categories: string[]
}

const PostPreview = ({ title, date, excerpt, slug, categories }: Props) => (
  <li>
    <article>
      <CategoryFormatter categories={categories} />
      <h3 className='mb-3 font-display text-4xl font-normal leading-snug'>
        <Link
          as={`/blog/${slug}`}
          href='/blog/[slug]'
          className='visited:text-visited hover:text-link hover:underline focus:text-link focus:underline focus:visited:text-link dark:visited:text-visited-dark dark:hover:text-link-dark dark:focus:text-link-dark dark:focus:visited:text-link-dark'
        >
          {title}
        </Link>
      </h3>
      <blockquote className='prose prose-lg prose-stone mb-4 dark:prose-invert'>
        {excerpt}
      </blockquote>
      <div className='mb-4 text-accent-text dark:text-accent-text-dark'>
        <DateFormatter dateString={date} />
      </div>
    </article>
  </li>
)

export default PostPreview
