interface SkipLinkProps {
  href: string
}

const SkipLink = ({ href }: SkipLinkProps) => (
  <a
    href={href}
    className='sr-only translate-y-[-150%] transform focus:not-sr-only focus:absolute focus:left-1/2 focus:translate-y-0 focus:transition-transform'
  >
    Skip to content
  </a>
)

export default SkipLink
