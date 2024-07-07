import { type Author } from './author'

export type Post = {
  slug: string
  title: string
  date: string
  coverImage: string
  coverImageAttribute?: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  categories: string[]
  keywords: string[]
  content: string
  featured: boolean
  preview?: boolean
}
