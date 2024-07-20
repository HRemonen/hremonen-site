'use client'

import { ArrowIcon } from '@/app/_components/ui/icons'
import SectionPost from '@/app/_components/ui/section-post'
import SectionTitle from '@/app/_components/ui/section-title'
import StyledLink from '@/app/_components/ui/styled-link'
import { Post } from '@/interfaces/post'
import { GITHUB_POST_URL } from '@/lib/constants'

interface PostFooterProps {
  slug: string
  recommendations: Post[]
}

const PostFooter = ({ slug, recommendations }: PostFooterProps) => (
  <footer className='mt-16 px-2'>
    <div className='mb-12 flex justify-between gap-2 border-b border-gray-600 pb-12 text-lg font-medium'>
      <StyledLink href='/blog'>
        <ArrowIcon /> Back to all posts
      </StyledLink>

      <StyledLink href={`${GITHUB_POST_URL}/${slug}.md`}>
        Edit on GitHub
      </StyledLink>
    </div>

    <section className='mx-auto mb-16'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full px-4 md:w-1/2'>
          <SectionTitle
            title='You will love these ones as well.'
            description='Did you enjoy this post?'
          />
          {recommendations.slice(0, 1).map((post) => (
            <SectionPost key={post.slug} post={post} />
          ))}
        </div>
        <div className='w-full px-4 md:w-1/2'>
          {recommendations.slice(1, 3).map((post) => (
            <SectionPost key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  </footer>
)

export default PostFooter
