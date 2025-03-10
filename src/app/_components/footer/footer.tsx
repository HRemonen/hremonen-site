import Link from 'next/link'
import { GithubIcon, LinkedInIcon, RSSIcon } from '../ui/icons'

const Footer = () => (
  <footer className='rounded-t-3xl bg-text px-8 pb-16 pt-48 text-white dark:bg-black'>
    <div className='flex flex-col justify-between sm:container xs:flex-row md:px-10'>
      <div>
        <p className='font-sans text-xl font-medium md:text-2xl'>
          Henri Remonen
        </p>
        <div className='mt-6 flex items-center gap-4'>
          <Link
            href='https://github.com/HRemonen'
            className='rounded-md outline-none ring-link-dark ring-offset-4 ring-offset-text transition duration-700 ease-in-out hover:text-link-dark hover:ring-2 focus:text-link-dark focus:ring-2 dark:ring-offset-black'
          >
            <GithubIcon /> <span className='sr-only'>Github profile</span>
          </Link>
          <Link
            href='https://www.linkedin.com/in/henri-remonen-310145158/'
            className='rounded-md outline-none ring-link-dark ring-offset-4 ring-offset-text transition duration-700 ease-in-out hover:text-link-dark hover:ring-2 focus:text-link-dark focus:ring-2 dark:ring-offset-black'
          >
            <LinkedInIcon /> <span className='sr-only'>LinkedIn profile</span>
          </Link>
          <Link
            href='/feed.xml'
            className='rounded-md outline-none ring-link-dark ring-offset-4 ring-offset-text transition duration-700 ease-in-out hover:text-link-dark hover:ring-2 focus:text-link-dark focus:ring-2 dark:ring-offset-black'
          >
            <RSSIcon /> <span className='sr-only'>RSS feed</span>
          </Link>
        </div>
      </div>
    </div>
    <div className='pt-16 md:px-10'>
      <p className='text-sm'>All rights reserved © Henri Remonen</p>
    </div>
  </footer>
)

export default Footer
