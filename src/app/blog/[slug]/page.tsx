import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/api'
import {
  BLOG_NAME,
  BLOG_URL,
  BLOG_POST_TYPE,
  BLOG_LOCALE,
} from '@/lib/constants'
import markdownToHtml from '@/lib/markdown-to-html'
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
  const recommendations = getRelatedPosts(post)

  return (
    <article className='mx-auto mb-32'>
      <PostHeader
        title={post.title}
        date={post.date}
        coverImageId={post.coverImageId}
        categories={post.categories}
      />
      <PostBody content={content} />
      <PostFooter slug={post.slug} recommendations={recommendations} />
    </article>
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
  const url = `${BLOG_URL}/blog/${post.slug}`
  const keywords = post.keywords.join(', ') || ''

  return {
    title,
    description: excerpt,
    keywords,
    creator: post.author.name,
    authors: [
      {
        name: post.author.name,
      },
    ],
    openGraph: {
      title,
      description: excerpt,
      type,
      locale,
      url,
      siteName: BLOG_NAME,
      publishedTime: post.date,
      modifiedTime: post.date,
      images: [
        {
          url: post.ogImage.url,
          alt: post.title,
        },
      ],
    },
    robots: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: 'index, follow',
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
