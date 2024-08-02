import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

const StyledLink = ({
  href,
  className,
  children,
}: Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps) => (
  <Link
    href={href}
    className={clsx(
      "relative block w-fit outline-none after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-link after:transition after:duration-700 after:content-[''] hover:text-link after:hover:scale-x-75 focus:text-link after:focus:scale-x-75 dark:after:bg-link-dark dark:hover:text-link-dark dark:focus:text-link-dark",
      className
    )}
  >
    {children}
  </Link>
)

export default StyledLink
