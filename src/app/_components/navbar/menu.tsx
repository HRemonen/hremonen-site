'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'

const NAV_LINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

const QUICK_LINKS = [
  {
    name: 'RSS Feed',
    href: '/feed.xml',
  },
  {
    name: 'Sitemap',
    href: '/sitemap.xml',
  },
]

interface NavGroupProps {
  children: React.ReactNode
  title: string
}

const NavGroup = ({ children, title }: NavGroupProps) => {
  const navId = useId()

  return (
    <nav
      aria-labelledby={navId}
      className='border-t border-gray-200 bg-[#fcfcfc] px-2 py-2 dark:border-gray-700 dark:bg-[#1f2028]'
    >
      <div className='sm:flex sm:items-start'>
        <div className='mt-3 w-full text-center sm:mt-0 sm:text-left'>
          <h3
            id={navId}
            className='px-2 text-xs font-semibold uppercase text-accent-text dark:text-accent-text-dark'
          >
            {title}
          </h3>
          <ul className='mt-2'>{children}</ul>
        </div>
      </div>
    </nav>
  )
}

const Menu = () => {
  const pathname = usePathname()

  const modalId = useId()
  const modalRef = useRef<HTMLDialogElement>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalOpen(false)
        modalRef.current?.close()
      }
    }

    if (modalOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  })

  const handleMenuToggle = () => {
    setModalOpen((prev) => !prev)

    if (modalRef.current) {
      if (modalOpen) {
        modalRef.current.close()
      } else {
        modalRef.current.showModal()
      }
    }
  }

  return (
    <>
      <button
        aria-label='Open navigation menu'
        type='button'
        className='group/menu h-10 w-10 outline-none'
        onClick={handleMenuToggle}
      >
        <div className='relative flex h-full items-center justify-center'>
          <span className='absolute left-6 top-[12px] h-[2px] w-4 -translate-x-1/2 rounded-full bg-text transition group-hover/menu:left-1/2 group-hover/menu:top-[11px] group-focus/menu:bg-link dark:bg-text-dark dark:group-focus/menu:bg-link-dark' />
          <span className='absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/3 rounded-full bg-text transition group-hover/menu:-rotate-45 group-focus/menu:bg-link dark:bg-text-dark dark:group-focus/menu:bg-link-dark' />
          <span className='absolute left-4 top-[27px] h-[2px] w-4 -translate-x-1/2 rounded-full bg-text group-hover/menu:left-7 group-hover/menu:top-5 group-hover/menu:rotate-90 group-focus/menu:bg-link dark:bg-text-dark dark:group-focus/menu:bg-link-dark' />
        </div>
      </button>

      <dialog
        className='relative z-10'
        aria-labelledby={modalId}
        ref={modalRef}
        aria-modal='true'
      >
        <div
          className='fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity'
          aria-hidden='true'
        />
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <div className='relative w-full transform overflow-hidden rounded-lg bg-[#fcfcfc] text-left shadow-xl transition-all dark:bg-[#1f2028] sm:my-8 sm:max-w-lg'>
              {/* Modal header */}
              <div className='bg-[#fcfcfc] px-4 py-3 dark:bg-[#1f2028] sm:flex'>
                <h2
                  className='text-base font-semibold leading-6 text-text dark:text-text-dark'
                  id={modalId}
                >
                  Navigation
                </h2>
                <button
                  onClick={handleMenuToggle}
                  type='button'
                  className='absolute right-4 top-4 rounded-sm text-text opacity-70 transition-opacity hover:opacity-100 hover:ring-2 hover:ring-link focus:outline-none focus:ring-2 focus:ring-link disabled:pointer-events-none dark:text-text-dark dark:hover:ring-link-dark dark:focus:ring-link-dark'
                  aria-label='Close navigation menu'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-4 w-4'
                    aria-hidden
                  >
                    <path d='M18 6 6 18' />
                    <path d='m6 6 12 12' />
                  </svg>
                </button>
              </div>

              {/* Modal body */}
              <NavGroup title='Main navigation'>
                {NAV_LINKS.map((item) => {
                  const isActive = pathname === item.href

                  return (
                    <li
                      key={item.name}
                      className='w-full rounded-lg px-2 py-1.5 text-base font-normal text-text focus-within:ring-2 focus-within:ring-link hover:cursor-pointer hover:bg-gray-200 hover:text-accent-text dark:text-text-dark dark:focus-within:ring-link-dark dark:hover:bg-gray-800 dark:hover:text-accent-text-dark md:text-sm'
                    >
                      <Link
                        aria-current={isActive ? 'page' : 'false'}
                        href={item.href}
                        className='flex justify-between outline-none'
                        onClick={handleMenuToggle}
                      >
                        {item.name}{' '}
                        {isActive && (
                          <span className='rounded-full bg-cta px-2 py-0.5 text-xs font-semibold tracking-wide text-text'>
                            You&lsquo;re here!
                          </span>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </NavGroup>

              <NavGroup title='Quick links'>
                {QUICK_LINKS.map((item) => (
                  <li
                    key={item.name}
                    className='w-full rounded-lg px-2 py-1.5 text-base font-normal text-text focus-within:ring-2 focus-within:ring-link hover:cursor-pointer hover:bg-gray-200 hover:text-accent-text dark:text-text-dark dark:focus-within:ring-link-dark dark:hover:bg-gray-800 dark:hover:text-accent-text-dark md:text-sm'
                  >
                    <Link
                      href={item.href}
                      className='flex justify-between outline-none'
                      onClick={handleMenuToggle}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </NavGroup>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Menu
