import { ArrowIcon } from '@/app/_components/ui/icons'
import SectionTitle from '@/app/_components/ui/section-title'
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

    <section>
      <SectionTitle
        title='You will love these ones as well.'
        description='Did you enjoy this article?'
      />
    </section>
  </footer>
)

export default PostFooter
