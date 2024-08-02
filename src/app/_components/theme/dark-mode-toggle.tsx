'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@/app/_components/ui/icons'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <button
      type='button'
      aria-label={theme === 'light' ? 'Toggle dark mode' : 'Toggle light mode'}
      className='group/toggle h-10 w-10 flex-col justify-center overflow-hidden rounded-full p-2 outline-none ring-link ring-offset-4 ring-offset-[#fcfcfc] transition duration-700 ease-in-out hover:ring-2 focus:ring-2 dark:ring-link-dark dark:ring-offset-[#1f2028]'
      onClick={handleThemeToggle}
    >
      <div className='relative h-6 w-6'>
        <span
          style={{ transformOrigin: '50% 100px' }}
          className={`absolute inset-0 transform transition-transform duration-700 motion-reduce:duration-[0s] ${theme === 'dark' ? 'rotate-0' : 'rotate-90'}`}
        >
          <MoonIcon />
        </span>
        <span
          style={{ transformOrigin: '50% 100px' }}
          className={`absolute inset-0 transform transition-transform duration-700 motion-reduce:duration-[0s] ${theme === 'light' ? 'rotate-0' : '-rotate-90'}`}
        >
          <SunIcon />
        </span>
      </div>
    </button>
  )
}

export default DarkModeToggle
