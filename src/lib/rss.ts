import { formatDate } from 'date-fns/format'
import { getAllPosts } from './api'
import { BLOG_DESCRIPTION, BLOG_NAME, BLOG_URL } from './constants'

function cdata(markup: string) {
  return `<![CDATA[${markup}]]>`
}

export default function generateRssFeed() {
  const posts = getAllPosts()

  const blogUrl = `${BLOG_URL}/blog`

  return `
    <rss xmlns:blogChannel="${blogUrl}" version="2.0">
      <channel>
        <title>${BLOG_NAME} Blog</title>
        <link>${blogUrl}</link>
        <description>${BLOG_DESCRIPTION}</description>
        <language>en-us</language>
        <generator>Henri Remonen</generator>
        <webMaster>henri@remonen.fi</webMaster>
        <pubDate>${formatDate(new Date(), 'yyyy-MMMM-ii')}</pubDate>
        <ttl>40</ttl>
        ${posts
          .map((post) =>
            `
            <item>
              <title>${cdata(post.title ?? 'Untitled Post')}</title>
              <description>
                ${cdata(post.excerpt ?? 'No description available.')}
              </description>
              <pubDate>
                ${formatDate(post.date ?? new Date(), 'yyyy-MMMM-ii')}
                </pubDate>
              <link>${blogUrl}/${post.slug}</link>
              <guid>${blogUrl}/${post.slug}</guid>
            </item>
          `.trim()
          )
          .join('\n')}
      </channel>
    </rss>
  `.trim()
}
