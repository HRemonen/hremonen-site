import { Interpunct } from './icons'

interface SubSectionTitleProps {
  title: string
  description: string
}

const SubSectionTitle = ({ title, description }: SubSectionTitleProps) => (
  <div className='mb-12 w-full justify-center lg:mb-16'>
    <div className='flex flex-col items-start space-y-3 lg:space-y-5'>
      <div className='inline-flex items-center space-x-2'>
        <Interpunct />
        <div className='text-sm font-light text-accent-text dark:text-accent-text-dark lg:text-base'>
          {description}
        </div>
      </div>
      <h2 className='4xl:text-7xl 4xl:max-w-lg max-w-sm text-balance font-display text-2xl leading-none tracking-tight text-gray-600 dark:text-gray-100 md:text-3xl lg:text-4xl xl:max-w-md 2xl:text-6xl'>
        {title}
      </h2>
    </div>
  </div>
)

export default SubSectionTitle
