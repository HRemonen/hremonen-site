import { Metadata } from 'next'
import Link from 'next/link'

import { BLOG_NAME, BLOG_URL, BLOG_LOCALE, BLOG_AUTHOR } from '@/lib/constants'
import { getCategories } from '@/lib/api'

import PageContainer from '@/app/_components/ui/page-container'
import {
  PageMainTitle,
  PageMainSection,
  PageSubtitle,
} from '@/app/_components/ui/page-main'

const Blog = () => {
  const postCategories = getCategories()

  return (
    <PageContainer>
      <PageMainSection>
        <PageMainTitle title='The blog' />
        <PageSubtitle type='custom'>
          <ul className='flex flex-wrap'>
            {Object.entries(postCategories).map(([category, count]) => (
              <li key={category} className='mr-4 lg:mr-8'>
                <Link
                  href={{
                    pathname: '/blog',
                    query: { category },
                  }}
                  className='group inline-flex items-end outline-none duration-200'
                >
                  <p className='leading-tighter text-balance font-sans text-4xl lowercase tracking-tight text-gray-500 transition group-hover:text-text group-focus:text-text dark:text-gray-200 dark:group-hover:text-text-dark dark:group-focus:text-text-dark'>
                    {category}
                  </p>
                  <span className='mb-2 ml-1 text-sm text-gray-500 dark:text-gray-200'>
                    {count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </PageSubtitle>
      </PageMainSection>
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
