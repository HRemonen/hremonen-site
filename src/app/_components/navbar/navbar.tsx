import dynamic from 'next/dynamic'
import Image from 'next/image'
import SkipLink from '@/app/_components/ui/skip-link'
import Link from 'next/link'

const DarkModeToggle = dynamic(() => import('../theme/dark-mode-toggle'), {
  ssr: false,
})
const Menu = dynamic(() => import('./menu'))

const Navbar = () => (
  <header
    role='banner'
    className='mx-auto flex items-center justify-between px-4 py-4 md:px-8 md:py-8 lg:px-12 lg:py-8'
  >
    <SkipLink href='#main-content' />

    <Link href='/'>
      <Image src='/misc/logo.svg' alt='Go to home' width={100} height={50} />
    </Link>

    <div className='flex items-center justify-center'>
      <DarkModeToggle />
      <Menu />
    </div>
  </header>
)

export default Navbar
