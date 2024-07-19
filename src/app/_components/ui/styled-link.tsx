import Link from 'next/link'

interface StyledLinkProps {
  href: string
  children: React.ReactNode
}

const StyledLink = ({ href, children }: StyledLinkProps) => (
  <Link
    href={href}
    className="after:duration-400 relative block w-fit after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-link after:transition after:content-[''] hover:text-link after:hover:scale-x-75 dark:after:bg-link-dark dark:hover:text-link-dark"
  >
    <span className='flex items-center'>{children}</span>
  </Link>
)

export default StyledLink
