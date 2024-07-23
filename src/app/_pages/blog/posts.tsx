import PageSection from '@/app/_components/ui/page-section'
import SubSectionTitle from '@/app/_components/ui/page-sub-section-title'
import PostCard from '@/app/_components/ui/post-card'
import { type Post } from '@/interfaces/post'

type YearlyPostsProps = {
  [year: string]: Post[]
}

interface PostSectionProps {
  posts: Post[]
}

const PostSection = ({ posts }: PostSectionProps) => {
  const yearlyPosts = posts.reduce((acc, post) => {
    const date = new Date(post.date)

    const key = date.getFullYear()

    if (!acc[key]) acc[key] = []
    acc[key].push(post)

    return acc
  }, {} as YearlyPostsProps)

  return (
    <>
      {Object.entries(yearlyPosts).map(([year, posts]) => (
        <PageSection key={year}>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full px-4'>
              <SubSectionTitle
                title={`Posts from ${year}`}
                subtitle='These great posts were published this year.'
              />
            </div>
            {posts.map((post) => (
              <div key={post.slug} className='w-full px-4'>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </PageSection>
      ))}
    </>
  )
}

export default PostSection
