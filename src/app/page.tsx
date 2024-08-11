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
  const description =
    'Discover the latest in web development, user experience, and accessibility. Explore featured content and stay updated with our newest posts, all crafted with passion.'
  const locale = BLOG_LOCALE
  const url = BLOG_URL
  const keywords =
    'web development, user experience, UX, accessibility, web dev, web dev blog, ux blog, accessibility blog, coding, programming, blog, hremonen, henri, remonen, henri remonen'

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

export default Index
