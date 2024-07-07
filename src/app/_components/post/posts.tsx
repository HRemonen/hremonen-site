import { type Post } from '@/interfaces/post'
import { getAllPosts } from '@/lib/api'
import PostPreview from './post-preview'

type PostsByMonth = {
  [monthYear: string]: Post[]
}

const MonthlyPosts = ({ posts }: { posts: PostsByMonth }) => (
  <>
    {Object.entries(posts).map(([monthYear, posts]) => (
      <section key={monthYear} className='mb-16'>
        <dl className='mb-4 flex gap-2 text-lg text-primary dark:text-secondary'>
          <dt className='capitalize'>{monthYear} ・</dt>
          <dd>
            {posts.length} {posts.length > 1 ? 'posts' : 'post'}
          </dd>
        </dl>
        <ol className='grid grid-cols-1 gap-y-4 md:gap-y-8'>
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              categories={post.categories}
            />
          ))}
        </ol>
      </section>
    ))}
  </>
)

const AllPosts = () => {
  const posts = getAllPosts()
  if (!posts) return null

  const postsByMonth = posts.reduce((acc, post) => {
    const date = new Date(post.date)

    const month = date.toLocaleString('en', { month: 'long' })
    const year = date.getFullYear()
    const key = `${month} ${year}`

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(post)

    return acc
  }, {} as PostsByMonth)

  return (
    <section className='mx-auto max-w-3xl'>
      <h2 className='mb-4 font-display text-4xl font-normal leading-tight tracking-tighter md:text-6xl'>
        All posts.
      </h2>
      <MonthlyPosts posts={postsByMonth} />
    </section>
  )
}

export default AllPosts
