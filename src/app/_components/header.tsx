import Link from 'next/link'
import { BLOG_NAME } from '@/lib/constants'

const Header = () => (
    <h2 className='mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter'>
      <Link href='/' className='hover:underline'>
        {BLOG_NAME}
      </Link>
      .
    </h2>
  )

export default Header
