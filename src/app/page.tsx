import { Metadata } from 'next'

import PageContainer from '@/app/_components/ui/page-container'
import FeaturedSection from '@/app/_pages/home/featured'
import RecentSection from '@/app/_pages/home/recent'

import { BLOG_AUTHOR, BLOG_LOCALE, BLOG_NAME, BLOG_URL } from '@/lib/constants'

import BrowseSection from './_pages/home/browse'

const Index = () => (
  <PageContainer>
    <FeaturedSection />
    <RecentSection />
    <BrowseSection />
  </PageContainer>
)

export function generateMetadata(): Metadata {
  const title = `A Web Development Blog | ${BLOG_NAME}`
  const description = 'A web development blog written with passion by Hremonen.'
  const locale = BLOG_LOCALE
  const url = BLOG_URL
  const keywords =
    'web development, blog, web dev, web dev blog, ux blog, accessibility blog, js blog, hremonen, henri, remonen, henri remonen'

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
      type: 'website',
      locale,
      url,
      siteName: BLOG_NAME,
    },
  }
}

export default Index
