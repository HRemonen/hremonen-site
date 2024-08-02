import React from 'react'

export const MoonIcon = () => (
  <svg
    aria-hidden
    className='fill-current transition duration-500 ease-in-out hover:rotate-12 group-focus/toggle:rotate-12'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
  >
    <path
      className='text-stone-200 group-hover/toggle:text-stone-400 group-focus/toggle:text-stone-400'
      d='M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z'
    />
    <path
      className='text-yellow-500 group-hover/toggle:animate-pulse group-focus/toggle:animate-pulse group-focus/toggle:text-yellow-400'
      d='M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z'
    />
  </svg>
)

export const SunIcon = () => (
  <svg
    aria-hidden
    className='transition-colors ease-in-out group-hover/focus:fill-yellow-300 group-hover/toggle:fill-yellow-300 group-hover/toggle:text-yellow-400 group-focus/toggle:fill-yellow-300 group-focus/toggle:text-yellow-400'
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

export const ArrowIcon = ({ rotation = 90 }: { rotation?: number }) => {
  const className = `transform rotate-${rotation}`

  return (
    <svg
      aria-hidden
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z'
        fill='currentColor'
      />
    </svg>
  )
}

export const GithubIcon = () => (
  <svg
    aria-hidden
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <path
      fill='currentColor'
      d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    />
  </svg>
)

export const RSSIcon = () => (
  <svg
    aria-hidden
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <path
      fill='currentColor'
      d='M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z'
    />
  </svg>
)

export const LinkedInIcon = () => (
  <svg
    aria-hidden
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <path
      fill='currentColor'
      d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    />
  </svg>
)
