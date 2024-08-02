import Link from 'next/link'

interface ButtonLinkProps {
  linkText: string
  href: string
}

const ButtonLink = ({ linkText, href }: ButtonLinkProps) => (
  <div className='group relative inline-flex items-center'>
    <svg
      width='0'
      height='0'
      className='absolute hidden'
      colorInterpolationFilters='sRGB'
    >
      <defs>
        <filter id='buttonFilter'>
          <feGaussianBlur in='SourceGraphic' stdDeviation='5' result='blur' />
          <feColorMatrix
            in='blur'
            mode='matrix'
            values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
            result='buttonFilter'
          />
          <feComposite in='SourceGraphic' in2='buttonFilter' operator='atop' />
          <feBlend in='SourceGraphic' in2='buttonFilter' />
        </filter>
      </defs>
    </svg>

    <Link
      href={href}
      className='group relative inline-flex'
      style={{ filter: 'url(#buttonFilter)' }}
    >
      <div className='relative inline-flex w-auto items-center justify-center overflow-hidden rounded-full bg-cta px-5 py-2 leading-tight text-text'>
        <p className='relative top-px inline-flex flex-shrink-0'>{linkText}</p>
      </div>
      <div className='-ml-1 flex h-9 w-9 flex-shrink-0 transform items-center justify-center overflow-hidden rounded-full bg-cta text-text transition-transform group-hover:translate-x-3 group-hover:rotate-45 group-focus:translate-x-3 group-focus:rotate-45'>
        <svg
          className='h-3 w-3 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 384 512'
        >
          <path d='M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z' />
        </svg>
      </div>
    </Link>
  </div>
)

export default ButtonLink
