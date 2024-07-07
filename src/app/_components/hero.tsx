import { BLOG_NAME } from '@/lib/constants'

const HeroSection = () => (
  <section className='mb-16 mt-16 flex flex-col items-center md:mb-12 md:justify-between'>
    <h1 className='text-4xl font-bold leading-tight tracking-tighter md:pr-8 md:text-6xl'>
      {BLOG_NAME}.
    </h1>
  </section>
)

export default HeroSection
