import Image from 'next/image'
import { getFeaturedPost } from '@/lib/api'
import ButtonLink from '@/app/_components/ui/button-link'
import PageSection from '@/app/_components/ui/page-section'

const FeaturedSection = () => {
  const featured = getFeaturedPost()

  if (!featured) return null

  const { title, slug, coverImage } = featured

  return (
    <PageSection>
      <article
        key={`featured-post-${title}`}
        className='relative flex flex-col px-4 sm:mx-auto sm:px-0'
      >
        <Image
          src={coverImage}
          alt='' // As the image is decorative, an empty alt attribute is appropriate
          width={1024}
          height={780}
          className='aspect-[3/4] max-h-[780px] rounded-2xl object-cover xs:aspect-auto'
        />
        <div className='z-1 absolute left-0 top-0 h-20 w-20 bg-[#fcfcfc] dark:bg-[#1f2028] lg:w-44' />
        <div className='absolute left-0 top-20 h-20 w-20 overflow-hidden'>
          <div className='h-20 w-20 translate-y-1/2 transform rounded-full shadow-[0_0_0_500px_#fcfcfc] dark:shadow-[0_0_0_500px_#1f2028]' />
        </div>
        <div className='z-1 absolute left-0 top-0 w-auto pb-8 sm:-left-4 lg:left-20'>
          <div className='w-full bg-[#fcfcfc] dark:bg-[#1f2028]'>
            <h2 className='relative mb-2 inline-flex space-x-2 px-3 font-display text-xl font-light text-accent-text dark:text-accent-text-dark xs:mb-4 xs:text-[2rem] sm:text-2xl lg:px-6'>
              Featured
            </h2>
          </div>
          <div className='relative w-auto overflow-hidden rounded-bl-none rounded-br-2xl lg:rounded-br-3xl'>
            <div className='gooey-content-filter'>
              <h3 className='4xl:text-8xl gooey-content bg-[#fcfcfc] pb-3 pt-16 text-2xl leading-none tracking-tight text-text dark:bg-[#1f2028] dark:text-text-dark sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'>
                <span className='relative z-30 inline flex-shrink-0 truncate pl-3 lg:pl-5'>
                  Side Effects of&nbsp;&nbsp;
                  <br />
                </span>
                <span className='relative z-20 inline flex-shrink-0 truncate pl-3 lg:pl-5'>
                  Accessibility&nbsp;&nbsp;
                  <br />
                </span>
                <div className='relative inline-flex w-auto bg-[#fcfcfc] dark:bg-[#1f2028]' />
              </h3>
            </div>
            <svg
              width='0'
              height='0'
              className='absolute'
              colorInterpolationFilters='sRGB'
            >
              <defs>
                <filter id='goo'>
                  <feGaussianBlur
                    in='SourceGraphic'
                    stdDeviation='6'
                    result='blur'
                  />
                  <feColorMatrix
                    in='blur'
                    mode='matrix'
                    values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                    result='goo'
                  />
                  <feComposite in='SourceGraphic' in2='goo' operator='atop' />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className='mx-auto bg-[#fcfcfc] px-2 pt-4 dark:bg-[#1f2028] sm:absolute sm:bottom-0 sm:right-0 sm:rounded-tl-2xl sm:pt-2 lg:rounded-tl-3xl'>
          <ButtonLink linkText='Read featured post' href={`blog/${slug}`} />
        </div>
      </article>
    </PageSection>
  )
}

export default FeaturedSection
