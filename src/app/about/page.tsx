import { Metadata } from 'next'
import { BLOG_NAME, BLOG_URL, BLOG_LOCALE, BLOG_AUTHOR } from '@/lib/constants'
import PageContainer from '@/app/_components/ui/page-container'
import PageSection from '@/app/_components/ui/page-section'
import SubSectionTitle from '@/app/_components/ui/page-sub-section-title'
import {
  PageMainTitle,
  PageMainSection,
  PageSubtitle,
} from '@/app/_components/ui/page-main'

const About = async () => (
  <PageContainer>
    <PageMainSection>
      <PageMainTitle title='About' />
      <PageSubtitle>
        <span className='pl-3 lg:pl-5'>
          Nice to meet ya!&nbsp;&nbsp;
          <br />
        </span>
        <span className='pl-3 lg:pl-5'>
          My name is&nbsp;&nbsp;
          <br />
        </span>
        <span className='pl-3 lg:pl-5'>
          Hene&nbsp;&nbsp;
          <br />
        </span>
      </PageSubtitle>
    </PageMainSection>

    <PageSection>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full px-4 md:w-1/2'>
          <p className='xl:text-md mb-6 text-pretty text-base font-light leading-7 text-text dark:text-text-dark'>
            This is my little corner of the internet where I explore the
            fascinating world of web development, frontend technologies,
            patterns, and accessibility.
          </p>
          <p className='xl:text-md mb-6 text-pretty text-base font-light leading-7 text-text dark:text-text-dark'>
            I like to think this website is more than just a blog; it&lsquo;s my
            digital journal where I share insights, discoveries, and the
            occasional “aha” moments on the journey to become a more proficient
            developer. I believe in keeping things real and down-to-earth, so
            expect a mix of personal experiences, industry trends, and anything
            that sparks my curiosity.
          </p>
        </div>
      </div>

      <div className='mt-16 flex flex-col md:flex-row'>
        <div className='w-full px-4 md:w-1/2'>
          <SubSectionTitle
            title='Who am I exactly?'
            description='A little bit about me'
          />
          <p className='xl:text-md mb-6 text-pretty text-base font-light leading-7 text-text dark:text-text-dark'>
            Great question! Lately, I&lsquo;ve been wearing many hats, including
            Software Developer. But above all, I&lsquo;m passionate about web
            development, especially frontend, UI design and UX, but also DevOps,
            integrations and API development.
          </p>
          <p className='xl:text-md mb-6 text-pretty text-base font-light leading-7 text-text dark:text-text-dark'>
            While studying electrical engineering from 2015 to 2019, I took a
            few computer science courses. That&lsquo;s when I first felt the
            spark for the field, although I also enjoyed the realm of electrical
            engineering. Fast forward to 2021, I was doing alright in my career,
            working as a project manager for an electrical contracting company.
            However, during the pandemic, I somehow grew fed up with that gig.
          </p>
        </div>
        <div className='w-full px-4 md:w-1/2'>
          <p className='xl:text-md mb-6 text-pretty text-base font-light leading-7 text-text dark:text-text-dark'>
            So, I made a decision to reignite my passion for computer science
            and pursue a career in that field. I studied after work in the
            evenings at the Open University of the University of Helsinki,
            eventually earning a permanent study right in 2022.
          </p>
          <p className='xl:text-md mb-6 text-pretty text-base font-light leading-7 text-text dark:text-text-dark'>
            Luckily (and perhaps fueled by ambition) in January 2023, I landed
            my first software development job in a startup within the University
            of Helsinki, led by one of our esteemed computer science professors.
            In this position I have been made the lead developer of a high
            profile project that is also in the midst of being taken to use by
            two other universities in Finland.
          </p>
          <p className='xl:text-md mb-6 text-pretty text-base font-light leading-7 text-text dark:text-text-dark'>
            I&lsquo;ve finished my BsC in Computer Science in 2024 taking 18
            months to do so. Regardless my time in field is rather short, do not
            be fooled. I&lsquo;ve been able to make a significant impact in the
            projects I&lsquo;ve been involved in and now I would like to share
            some of my knowledge and experiences with you. And to get a excuse
            to learn more and to keep up with the ever changing field.
          </p>
        </div>
      </div>
    </PageSection>
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
