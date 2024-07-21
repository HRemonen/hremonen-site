import PostSectionPost from '@/app/_components/ui/post-section-post'
import PostSectionTitle from '@/app/_components/ui/post-section-title'
import { getRecentPosts } from '@/lib/api'

const RecentSection = () => {
  const posts = getRecentPosts()

  if (!posts) return null

  return (
    <section className='mx-auto mb-16 max-w-5xl'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full px-4 md:w-1/2'>
          <PostSectionTitle
            title='Take a look at the latest posts.'
            description='Recent blog posts'
          />
          {posts.slice(0, 2).map((post) => (
            <PostSectionPost key={post.slug} post={post} />
          ))}
        </div>
        <div className='w-full px-4 md:w-1/2'>
          {posts.slice(2, 5).map((post) => (
            <PostSectionPost key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentSection
