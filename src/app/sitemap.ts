import { MetadataRoute } from 'next'

import { getAllPosts } from '@/lib/api'
import { BLOG_URL } from '@/lib/constants'
import { parseISO } from 'date-fns'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogPosts = posts.map(({ slug, date }) => ({
    url: `${BLOG_URL}/blog/${slug}`,
    lastModified: parseISO(date).toISOString(),
    changeFrequency: 'weekly',
  })) as unknown as MetadataRoute.Sitemap

  const siteRoutes = ['/blog', '/about'].map((route) => ({
    url: `${BLOG_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
  })) as unknown as MetadataRoute.Sitemap

  return [
    {
      url: BLOG_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
    },
    ...siteRoutes,
    ...blogPosts,
  ]
}
