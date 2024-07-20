import { Post } from '@/interfaces/post'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import getRecommendedPosts from './recommendations'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...data, slug: realSlug, content } as Post
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getFeaturedPost(): Post | undefined {
  const slugs = getPostSlugs()
  let featuredPost: Post | undefined

  slugs.some((slug) => {
    const post = getPostBySlug(slug)

    if (post.featured) {
      featuredPost = post
      return true
    }

    return false
  })

  return featuredPost
}

export function getRecentPosts(): Post[] {
  const posts = getAllPosts().filter((post) => !post.featured)

  return posts
}

export function getRelatedPosts(currentPost: Post): Post[] {
  const posts = getAllPosts().filter((post) => post.slug !== currentPost.slug)
  const recommendedPosts = getRecommendedPosts(currentPost, posts)

  return recommendedPosts
}
