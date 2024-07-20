import { getAllPosts } from '@/lib/api'
import { BLOG_URL } from '@/lib/constants'
import { parseISO } from 'date-fns'

export default async function sitemap() {
  const posts = getAllPosts()

  const sitemapPosts = posts.map(({ slug, date }) => ({
    url: `${BLOG_URL}/blog/${slug}`,
    lastModified: parseISO(date).toISOString(),
  }))

  const routes = ['/blog'].map((route) => ({
    url: `${BLOG_URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...sitemapPosts]
}
