'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@/app/_components/ui/icons'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      type='button'
      aria-label={theme === 'light' ? 'Toggle dark mode' : 'Toggle light mode'}
      className='flex-col justify-center overflow-hidden rounded-full p-4'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <div className='relative h-8 w-8'>
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
