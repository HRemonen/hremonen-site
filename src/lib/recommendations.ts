import { Post } from '@/interfaces/post'

function calculateJaccardIndex(set1: Set<string>, set2: Set<string>): number {
  const intersection = new Set([...set1].filter((x) => set2.has(x)))
  const union = new Set([...set1, ...set2])

  return intersection.size / union.size
}

function calculateTitleSimilarity(title1: string, title2: string): number {
  const set1 = new Set(title1.split(' ').map((word) => word.toLowerCase()))
  const set2 = new Set(title2.split(' ').map((word) => word.toLowerCase()))

  return calculateJaccardIndex(set1, set2)
}

function scorePost(basePost: Post, targetPost: Post): number {
  const titleSimilarity = calculateTitleSimilarity(
    basePost.title,
    targetPost.title
  )
  const categoriesSimilarity = calculateJaccardIndex(
    new Set(basePost.categories),
    new Set(targetPost.categories)
  )
  const keywordsSimilarity = calculateJaccardIndex(
    new Set(basePost.keywords),
    new Set(targetPost.keywords)
  )

  const titleWeight = 0.3
  const categoriesWeight = 0.4
  const keywordsWeight = 0.3

  return (
    titleSimilarity * titleWeight +
    categoriesSimilarity * categoriesWeight +
    keywordsSimilarity * keywordsWeight
  )
}

export default function getRecommendedPosts(
  basePost: Post,
  posts: Post[]
): Post[] {
  const scoredPosts = posts.map((post) => ({
    post,
    score: scorePost(basePost, post),
  }))

  const sortedPosts = scoredPosts.toSorted((a, b) => b.score - a.score)

  return sortedPosts.slice(0, 3).map((scoredPost) => scoredPost.post)
}
