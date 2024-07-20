import generateRssFeed from '@/lib/rss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars, import/prefer-default-export
export async function GET(_req: Request) {
  const feed = generateRssFeed()

  return new Response(feed, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  })
}
