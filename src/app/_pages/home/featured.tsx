import Image from 'next/image'
import { getFeaturedPost } from '@/lib/api'

const FeaturedSection = () => {
  const featured = getFeaturedPost()

  if (!featured) return null

  const { title, coverImage } = featured

  return (
    <section className='mx-auto mb-16 max-w-5xl'>
      <article
        key={`featured-post-${title}`}
        className='group relative flex flex-row px-4 sm:mx-auto sm:px-0'
      >
        <Image
          src={coverImage}
          alt='' // As the image is decorative, an empty alt attribute is appropriate
          width={1280}
          height={780}
          className='max-h-[780px] rounded-2xl object-cover'
        />
        <div className='absolute left-0 top-0 z-10 h-20 w-20 bg-[#fcfcfc] dark:bg-[#1f2028] lg:w-44' />
        <div className='absolute left-0 top-20 h-20 w-20 overflow-hidden'>
          <div className='h-20 w-20 translate-y-1/2 transform rounded-full shadow-[0_0_0_500px_#fcfcfc]' />
        </div>
        <div className='absolute left-0 top-0 z-20 w-auto pb-8 sm:-left-4 lg:left-20 xl:left-40 xl:px-4'>
          <div className='w-full bg-[#fcfcfc] dark:bg-[#1f2028]'>
            <h2 className='relative mb-2 inline-flex space-x-2 px-3 font-display text-xl font-light text-accent-text dark:text-accent-text-dark xs:mb-4 xs:text-[2rem] sm:text-2xl lg:px-6'>
              Featured
            </h2>
          </div>
          <div className='relative w-auto overflow-hidden rounded-bl-none rounded-br-2xl lg:rounded-br-3xl'>
            <h3 className='4xl:text-8xl gooey-content bg-[#fcfcfc] pb-3 pt-16 text-2xl leading-none tracking-tight text-text dark:bg-[#1f2028] dark:text-text-dark sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl'>
              <span className='relative inline flex-shrink-0 truncate pl-3 lg:pl-5'>
                Migrating from&nbsp;&nbsp;
                <br />
              </span>
              <span className='relative inline flex-shrink-0 truncate pl-3 lg:pl-5'>
                Wordpress to&nbsp;&nbsp;
                <br />
              </span>
              <span className='relative inline flex-shrink-0 truncate pl-3 lg:pl-5'>
                Next.js&nbsp;&nbsp;
                <br />
              </span>
              <div className='relative inline-flex w-auto bg-[#fcfcfc] dark:bg-[#1f2028]' />
            </h3>
            <svg
              width='0'
              height='0'
              className='absolute hidden'
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
      </article>
    </section>
  )
}

export default FeaturedSection
