import PageSection from '@/app/_components/ui/page-section'
import SubSectionTitle from '@/app/_components/ui/page-sub-section-title'
import PostCard from '@/app/_components/ui/post-card'
import { getRecentPosts } from '@/lib/api'

const RecentSection = () => {
  const posts = getRecentPosts()

  if (!posts) return null

  return (
    <PageSection>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full px-4 md:w-1/2'>
          <SubSectionTitle
            title='Take a look at the latest posts.'
            description='Recent blog posts'
          />
          {posts.slice(0, 2).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className='w-full px-4 md:w-1/2'>
          {posts.slice(2, 5).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </PageSection>
  )
}

export default RecentSection
