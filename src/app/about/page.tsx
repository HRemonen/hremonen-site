import { Metadata } from 'next'
import { BLOG_NAME, BLOG_URL, BLOG_LOCALE, BLOG_AUTHOR } from '@/lib/constants'
import PageContainer from '@/app/_components/ui/page-container'

const About = async () => (
  <PageContainer>
    <article className='mx-auto mb-32'>asdfasdf</article>
  </PageContainer>
)

export function generateMetadata(): Metadata {
  const title = `About | ${BLOG_NAME}`
  const description = 'Get to know me'
  const locale = BLOG_LOCALE
  const url = `${BLOG_URL}/about`
  const keywords = 'about, hremonen, henri, remonen, henri remonen'

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
      type: 'profile',
      locale,
      url,
      siteName: BLOG_NAME,
      firstName: 'Henri',
      lastName: 'Remonen',
      username: 'hremonen',
      gender: 'male',
    },
  }
}

export default About
