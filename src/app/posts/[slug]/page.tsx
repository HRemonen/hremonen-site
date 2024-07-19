import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import {
  BLOG_NAME,
  BLOG_URL,
  BLOG_POST_TYPE,
  BLOG_LOCALE,
} from '@/lib/constants'
import markdownToHtml from '@/lib/markdownToHtml'
import PageContainer from '@/app/_components/ui/page-container'
import PostBody from '@/app/_pages/post/post-body'
import PostHeader from '@/app/_pages/post/post-header'
import PostFooter from '@/app/_pages/post/post-footer'

type Params = {
  params: {
    slug: string
  }
}

const Post = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || '')

  return (
    <PageContainer>
      <article className='mx-auto mb-32 max-w-3xl'>
        <PostHeader
          title={post.title}
          date={post.date}
          coverImage={post.coverImage}
          categories={post.categories}
        />
        <PostBody content={content} />
        <PostFooter slug={post.slug} />
      </article>
    </PageContainer>
  )
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const title = `${post.title} | ${BLOG_NAME}`
  const { excerpt } = post
  const type = BLOG_POST_TYPE
  const locale = BLOG_LOCALE
  const url = `${BLOG_URL}/posts/${post.slug}`
  const keywords = post.keywords.join(', ') || ''

  return {
    title,
    description: excerpt,
    keywords,
    openGraph: {
      title,
      description: excerpt,
      type,
      locale,
      url,
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default Post
