import { type Post } from '@/interfaces/post'
import PostPreview from '../post/post-preview'

type Props = {
  posts: Post[]
}

type StoriesByMonth = {
  [monthYear: string]: Post[]
}

const MonthlyStories = ({stories}: {stories: StoriesByMonth}) => (
  <>
    {Object.entries(stories).map(([monthYear, posts]) => (
      <section key={monthYear} className='mb-16'>
        <dl className='flex gap-2 mb-12 text-primary-accent-2 text-lg'>
          <dt className='capitalize'>
            {monthYear} ・
          </dt>
          <dd>
            {posts.length} {posts.length > 1 ? 'turinaa' : 'turina'}
          </dd>
        </dl>
        <ol className='grid grid-cols-1 gap-y-10 md:gap-y-20'>
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

const Stories = ({ posts }: Props) => {
  const storiesByMonth = posts.reduce((acc, post) => {
    const date = new Date(post.date)

    const month = date.toLocaleString("fi", { month: 'long' })
    const year = date.getFullYear()
    const key = `${month} ${year}`

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(post)

    return acc
  }
  , {} as StoriesByMonth)

  return (
    <section className='max-w-3xl mx-auto'>
      <h2 className='mb-4 text-4xl font-normal font-display leading-tight tracking-tighter md:text-6xl'>
        Turinoita
      </h2>
      <MonthlyStories stories={storiesByMonth} />
    </section>
)}

export default Stories
