import dynamic from 'next/dynamic'
import Image from 'next/image'
import SkipLink from '../ui/skip-link'

const DarkModeToggle = dynamic(() => import('../theme/dark-mode-toggle'), {
  ssr: false,
})

const Navbar = () => (
  <header
    role='banner'
    className='mx-auto flex items-center justify-between px-4 py-4 md:px-8 md:py-8 lg:px-12 lg:py-8'
  >
    <SkipLink href='#main-content' />

    <div id='logo' className='flex justify-center gap-4 align-middle'>
      <Image src='/misc/logo.svg' alt='hremonen logo' width={100} height={50} />
    </div>

    <div className='flex items-center justify-center'>
      <DarkModeToggle />
      <button type='button' className='group h-10 w-10'>
        <div className='relative flex h-full items-center justify-center'>
          <span className='absolute left-6 top-2 h-[3px] w-4 -translate-x-1/2 rounded-full bg-text transition group-hover:left-1/2 group-hover:top-1/2 group-hover:rotate-45 dark:bg-text-dark' />
          <span className='absolute left-1/2 top-1/2 h-[3px] w-6 -translate-x-1/2 -translate-y-1/3 rounded-full bg-text transition group-hover:scale-x-0 dark:bg-text-dark' />
          <span className='absolute left-4 top-3/4 h-[3px] w-4 -translate-x-1/2 rounded-full bg-text group-hover:left-1/2 group-hover:top-1/2 group-hover:-rotate-45 dark:bg-text-dark' />
        </div>
      </button>
    </div>
  </header>
)

export default Navbar
