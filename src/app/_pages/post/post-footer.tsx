import { ArrowIcon } from '@/app/_components/ui/icons'
import StyledLink from '@/app/_components/ui/styled-link'
import { GITHUB_POST_URL } from '@/lib/constants'

interface PostFooterProps {
  slug: string
}

const PostFooter = ({ slug }: PostFooterProps) => (
  <footer className='mt-16 px-2 xs:px-8'>
    <div className='mb-12 flex justify-between gap-2 border-b border-gray-600 pb-12 text-lg font-medium'>
      <StyledLink href='/posts'>
        <ArrowIcon /> Back to all posts
      </StyledLink>

      <StyledLink href={`${GITHUB_POST_URL}/${slug}.md`}>
        Edit on GitHub
      </StyledLink>
    </div>
  </footer>
)

export default PostFooter
