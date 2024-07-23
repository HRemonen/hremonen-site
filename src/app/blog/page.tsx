import { Metadata } from 'next'
import Link from 'next/link'
import clsx from 'clsx'

import { BLOG_NAME, BLOG_URL, BLOG_LOCALE, BLOG_AUTHOR } from '@/lib/constants'
import { getCategories, getPostsBySearchOptions } from '@/lib/api'

import PageContainer from '@/app/_components/ui/page-container'
import {
  PageMainTitle,
  PageMainSection,
  PageSubtitle,
} from '@/app/_components/ui/page-main'
import PostSection from '../_pages/blog/posts'

interface CategoryLinkProps {
  category: string
  count: number
  current?: boolean
  base?: boolean
}

const CategoryLink = ({
  category,
  count,
  current = false,
  base = false,
}: CategoryLinkProps) => (
  <li className='mr-4 lg:mr-8'>
    <Link
      href={{
        pathname: '/blog',
        query: base ? {} : { category },
      }}
      className='group inline-flex items-end outline-none duration-200'
    >
      <p
        className={clsx(
          current && 'text-text dark:text-text-dark',
          'leading-tighter text-balance font-sans text-4xl lowercase tracking-tight text-gray-500 transition group-hover:text-text group-focus:text-text dark:text-gray-200 dark:group-hover:text-text-dark dark:group-focus:text-text-dark'
        )}
      >
        {category}
      </p>
      <span
        className={clsx(
          current && 'text-text dark:text-text-dark',
          'mb-2 ml-1 text-sm text-gray-500 dark:text-gray-200'
        )}
      >
        {' '}
        {count} <span className='sr-only'>posts</span>
      </span>
    </Link>
  </li>
)

interface PageProps {
  searchParams: Record<string, string>
}

const Blog = ({ searchParams }: PageProps) => {
  const { category: searchCategory } = searchParams

  const { baseCategory, categories } = getCategories()
  const posts = getPostsBySearchOptions({ category: searchCategory })

  return (
    <PageContainer>
      <PageMainSection>
        <PageMainTitle title='The blog' />
        <PageSubtitle type='custom'>
          <ul aria-label='Categories' className='flex flex-wrap'>
            <CategoryLink
              base
              current={!searchCategory}
              category={baseCategory.name}
              count={baseCategory.count}
            />
            {Object.entries(categories).map(([category, count]) => (
              <CategoryLink
                key={category}
                current={category === searchCategory}
                category={category}
                count={count}
              />
            ))}
          </ul>
        </PageSubtitle>
      </PageMainSection>

      <PostSection posts={posts} />
    </PageContainer>
  )
}

export function generateMetadata(): Metadata {
  const title = `Blog | ${BLOG_NAME}`
  const description =
    'Blog posts about web development, frontend technologies, devops, and accessibility.'
  const locale = BLOG_LOCALE
  const url = `${BLOG_URL}/blog`
  const keywords =
    'blog, hremonen, henri, remonen, henri remonen, web development, frontend, accessibility, UI design, UX, DevOps'

  return {
    title,
    description,
    keywords,
    creator: BLOG_AUTHOR,
    authors: [
      {
        name: BLOG_AUTHOR,
      },
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      locale,
      url,
      siteName: BLOG_NAME,
    },
  }
}

export default Blog
