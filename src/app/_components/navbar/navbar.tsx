import dynamic from 'next/dynamic'
import Image from 'next/image'
import SkipLink from '@/app/_components/ui/skip-link'

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

    <div id='logo' className='flex justify-center gap-4 align-middle'>
      <Image src='/misc/logo.svg' alt='hremonen logo' width={100} height={50} />
    </div>

    <div className='flex items-center justify-center'>
      <DarkModeToggle />
      <Menu />
    </div>
  </header>
)

export default Navbar
