type Props = {
  content: string
}

const PostBody = ({ content }: Props) => (
  <div
    className='prose prose-lg prose-stone dark:prose-invert prose-headings:text-primary prose-a:text-link prose-a:visited:text-visited dark:prose-headings:text-secondary dark:prose-a:text-link-dark dark:prose-a:visited:text-visited-dark'
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostBody
