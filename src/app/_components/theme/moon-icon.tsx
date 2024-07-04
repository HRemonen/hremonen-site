import React from 'react'

const MoonIcon = () => (
  <svg
    aria-hidden='true'
    tabIndex={-1}
    className='group h-10 w-10 fill-current transition duration-500 ease-in-out hover:rotate-12'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
  >
    <path
      className='text-stone-200 group-hover:text-stone-400'
      d='M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z'
    />
    <path
      className='text-yellow-500 group-hover:animate-pulse'
      d='M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z'
    />
  </svg>
)

export default MoonIcon
