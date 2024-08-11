import { Metadata } from 'next'
import clsx from 'clsx'

import { BLOG_NAME, BLOG_URL, BLOG_LOCALE, BLOG_AUTHOR } from '@/lib/constants'
import { getCategories, getPostsBySearchOptions } from '@/lib/api'

import {
  PageMainTitle,
  PageMainSection,
  PageSubtitle,
} from '@/app/_components/ui/page-main'
import PostSection from '../_pages/blog/posts'
import StyledLink from '../_components/ui/styled-link'

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
    <StyledLink
      href={{
        pathname: '/blog',
        query: base ? {} : { category },
      }}
      className='group inline-flex items-end after:bg-text dark:after:bg-text-dark'
    >
      <p
        className={clsx(
          current
            ? 'text-text dark:text-text-dark'
            : 'text-gray-500 dark:text-gray-400',
          'text-balance font-sans text-[1.75rem] lowercase leading-tight tracking-tight transition group-hover:text-text group-focus:text-text dark:group-hover:text-text-dark dark:group-focus:text-text-dark xs:text-2xl md:text-4xl'
        )}
      >
        {category}
      </p>

      <span
        className={clsx(
          current
            ? 'text-text dark:text-text-dark'
            : 'text-gray-500 dark:text-gray-400',
          'mb-0 ml-2 text-sm group-hover:text-text group-focus:text-text dark:group-hover:text-text-dark dark:group-focus:text-text-dark xs:mb-1 md:mb-2'
        )}
      >
        {' '}
        {count} <span className='sr-only'>posts</span>
      </span>
    </StyledLink>
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
    <>
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
    </>
  )
}

export function generateMetadata(): Metadata {
  const title = `Browse Blog Posts | ${BLOG_NAME}`
  const description =
    'Browse posts by categories or just dive into the insigts around web development, user experience, and accessibility. A Web Development Blog written with passion.'
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
    robots: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: 'index, follow',
    },
  }
}

export default Blog
