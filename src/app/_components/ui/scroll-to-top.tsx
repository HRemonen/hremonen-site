'use client'

import clsx from 'clsx'
import { useState, useEffect } from 'react'

const ScrollToTopButton = () => {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY
      setShown(() => scrolledFromTop > 300)
    }

    window.addEventListener('scroll', scrollCallback)
    scrollCallback()

    return () => {
      window.removeEventListener('scroll', scrollCallback)
    }
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type='button'
      aria-label='scroll to top'
      onClick={scrollToTop}
      className={clsx(
        shown ? 'scale-100' : 'scale-0',
        'fixed bottom-10 right-10 flex flex-col items-center justify-center gap-2 rounded-3xl bg-cta px-1 pt-3 text-text outline-none ring-text transition-transform duration-700 hover:bg-transparent hover:ring-2 focus:bg-transparent focus:ring-2 dark:ring-text-dark dark:hover:text-text-dark dark:focus:text-text-dark'
      )}
    >
      <svg
        className='inline-flex h-3 w-3 -rotate-90 fill-current'
        width='14'
        height='16'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
      >
        <path d='M422.6 278.6l22.7-22.6-22.6-22.6-144-144L256 66.7 210.8 112l22.6 22.6 89.4 89.4H0v64h322.7l-89.4 89.4-22.5 22.6 45.2 45.3 22.6-22.6 144-144z' />
      </svg>
      <div
        className='inline-flex rotate-180 py-3 text-sm'
        style={{ writingMode: 'vertical-rl' }}
      >
        <span>TO TOP</span>
      </div>
    </button>
  )
}
export default ScrollToTopButton
