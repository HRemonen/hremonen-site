'use client'

import { useEffect, useId, useRef, useState } from 'react'

const Menu = () => {
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
        className='group h-10 w-10'
        onClick={handleMenuToggle}
      >
        <div className='relative flex h-full items-center justify-center'>
          <span className='absolute left-6 top-2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-text transition group-hover:left-1/2 group-hover:top-[11px] dark:bg-text-dark' />
          <span className='absolute left-1/2 top-1/2 h-[2px] w-6 -translate-x-1/2 -translate-y-1/3 rounded-full bg-text transition group-hover:-rotate-45 dark:bg-text-dark' />
          <span className='absolute left-4 top-3/4 h-[2px] w-4 -translate-x-1/2 rounded-full bg-text group-hover:left-7 group-hover:top-5 group-hover:rotate-90 dark:bg-text-dark' />
        </div>
      </button>

      <dialog
        className='relative z-10'
        aria-labelledby={modalId}
        ref={modalRef}
        aria-modal='true'
      >
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          aria-hidden='true'
        />
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
              {/* Modal header */}
              <div className='bg-gray-50 px-4 py-3 sm:flex sm:px-6'>
                <h2
                  className='text-base font-semibold leading-6 text-text'
                  id={modalId}
                >
                  Navigation
                </h2>
                <button
                  onClick={handleMenuToggle}
                  type='button'
                  className='absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 hover:ring-2 hover:ring-link focus:outline-none focus:ring-2 focus:ring-link disabled:pointer-events-none dark:hover:ring-link-dark dark:focus:ring-link-dark'
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
              <div className='bg-white px-4 pb-4 sm:px-6'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed urna nulla, vehicula nec nulla eget, fringilla
                        tincidunt velit. Nullam nec metus nec purus ultricies
                        fermentum. Nulla facilisi. Nullam sit amet purus
                        vestibulum, ultrices nunc sit amet, fermentum purus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Menu
