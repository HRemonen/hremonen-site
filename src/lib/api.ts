import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { Post } from '@/interfaces/post'

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
  const posts = slugs.map((slug) => getPostBySlug(slug))
  return posts
}

interface QueryOptions {
  offset?: number
  limit?: number
}

export function getAllPostSortedByDate(options: QueryOptions = {}): Post[] {
  const posts = getAllPosts().sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  )

  if (options.offset && options.limit) {
    return posts.slice(options.offset, options.offset + options.limit)
  }

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
  const posts = getAllPostSortedByDate().filter((post) => !post.featured)

  return posts
}

export function getRelatedPosts(currentPost: Post): Post[] {
  const slugs = getPostSlugs()
  const posts: Post[] = []

  slugs.forEach((slug) => {
    const post = getPostBySlug(slug)

    if (post.slug === currentPost.slug) return

    posts.push(post)
  })

  const recommendedPosts = getRecommendedPosts(currentPost, posts)

  return recommendedPosts
}

interface SearchOptions {
  category?: string
}
export function getPostsBySearchOptions(
  searchOptions: SearchOptions = {}
): Post[] {
  const { category } = searchOptions
  const allPosts = getAllPostSortedByDate()

  if (!category) return allPosts

  const posts = allPosts.filter((post) =>
    post.categories.includes(category as string)
  )

  return posts
}

export function getCategories() {
  const categories: string[] = []

  const slugs = getPostSlugs()

  slugs.forEach((slug) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data } = matter(fileContents)

    const postCategories: string[] = data.categories ?? ['uncategorized']
    categories.push(...postCategories)
  })

  const categoriesAndCounts = categories.reduce(
    (acc, category) => {
      acc[category] ??= 0
      acc[category] += 1

      return acc
    },
    {} as Record<string, number>
  )

  return {
    baseCategory: {
      name: 'explore all',
      count: slugs.length,
    },
    categories: categoriesAndCounts,
  }
}
