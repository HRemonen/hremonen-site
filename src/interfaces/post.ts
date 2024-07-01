import { type Author } from './author'

export type Post = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  description: string
  categories: string[]
  keywords: string[]
  content: string
  preview?: boolean
}
