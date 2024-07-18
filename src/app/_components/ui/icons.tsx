import React from 'react'

export const MoonIcon = () => (
  <svg
    aria-hidden='true'
    tabIndex={-1}
    className='fill-current transition duration-500 ease-in-out hover:rotate-12'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
  >
    <path
      className='text-stone-200 group-hover/toggle:text-stone-400 group-focus/toggle:text-link-dark'
      d='M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z'
    />
    <path
      className='text-yellow-500 group-hover/toggle:animate-pulse group-focus/toggle:text-link-dark'
      d='M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z'
    />
  </svg>
)

export const SunIcon = () => (
  <svg
    aria-hidden='true'
    tabIndex={-1}
    className='transition-colors ease-in-out group-hover/focus:fill-link group-hover/toggle:fill-yellow-300 group-hover/toggle:text-yellow-400 group-focus/toggle:text-link'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path
      d='M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z'
      stroke='currentColor'
    />
    <path
      d='M12 2C11.6227 2.33333 11.0945 3.2 12 4M12 20C12.3773 20.3333 12.9055 21.2 12 22M19.5 4.50271C18.9685 4.46982 17.9253 4.72293 18.0042 5.99847M5.49576 17.5C5.52865 18.0315 5.27555 19.0747 4 18.9958M5.00271 4.5C4.96979 5.03202 5.22315 6.0763 6.5 5.99729M18 17.5026C18.5315 17.4715 19.5747 17.7108 19.4958 18.9168M22 12C21.6667 11.6227 20.8 11.0945 20 12M4 11.5C3.66667 11.8773 2.8 12.4055 2 11.5'
      stroke='currentColor'
    />
  </svg>
)

export const Interpunct = () => (
  <div className='h-1.5 w-1.5 rounded-full bg-accent-text dark:bg-accent-text-dark' />
)
