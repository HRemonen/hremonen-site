import { Children } from 'react'

import { Interpunct } from './icons'
import PageSection from './page-section'
import PageSectionSeparator from './page-section-separator'

interface PageMainTitleProps {
  title: string
}

interface PageSubtitleProps {
  children: React.ReactNode
  type?: 'default' | 'custom'
}

interface PageMainSectionProps {
  children: React.ReactNode
}

export const PageMainTitle = ({ title }: PageMainTitleProps) => (
  <h1 className='font-display text-xl font-light text-accent-text dark:text-accent-text-dark sm:text-2xl lg:px-6'>
    {title}
  </h1>
)

export const PageSubtitle = ({
  type = 'default',
  children,
}: PageSubtitleProps) => {
  if (type === 'custom') return children

  return (
    <h2 className='bg-[#fcfcfc] pb-3 font-sans text-4xl leading-none tracking-tight text-text dark:bg-[#1f2028] dark:text-text-dark sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
      {children}
    </h2>
  )
}

export const PageMainSection = ({ children }: PageMainSectionProps) => {
  const [mainTitleContent, subTitleContent] = Children.toArray(children)

  return (
    <>
      <PageSection>
        <div className='w-auto px-4 pb-8'>
          <div className='mb-2 flex w-full items-center space-x-2 bg-[#fcfcfc] px-3 dark:bg-[#1f2028] xs:mb-4 lg:space-x-0'>
            <Interpunct />
            {mainTitleContent}
          </div>
          <div className='w-auto'>{subTitleContent}</div>
        </div>
      </PageSection>

      <PageSectionSeparator />
    </>
  )
}
