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

    <a
      href={href}
      className='group relative inline-flex'
      style={{ filter: 'url(#buttonFilter)' }}
    >
      <div className='relative inline-flex w-auto items-center justify-center overflow-hidden rounded-full bg-cta px-5 py-2 leading-tight text-text'>
        <p className='relative top-px inline-flex flex-shrink-0'>{linkText}</p>
      </div>
      <div className='-ml-1 flex h-9 w-9 flex-shrink-0 transform items-center justify-center overflow-hidden rounded-full bg-cta transition-transform group-hover:translate-x-3 group-hover:rotate-45 group-focus:translate-x-3 group-focus:rotate-45' />
    </a>
    <div className='absolute right-0 top-0 flex h-9 w-9 transform items-center justify-center transition-transform group-hover:translate-x-3 group-hover:rotate-45 group-focus:translate-x-3 group-focus:rotate-45'>
      <div className='relative overflow-hidden text-text'>
        <div className='relative left-0 top-0 transform transition-transform'>
          <svg
            className='h-3 w-3 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
          >
            <path d='M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z' />
          </svg>
        </div>
        <div className='absolute left-0 top-0 -translate-x-full translate-y-full transform transition-transform'>
          <svg
            className='h-3 w-3 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
          >
            <path d='M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z' />
          </svg>
        </div>
      </div>
    </div>
  </div>
)

export default ButtonLink
