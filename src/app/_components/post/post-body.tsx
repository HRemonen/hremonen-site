type Props = {
  content: string
}

const PostBody = ({ content }: Props) => (
  <div className='mx-auto max-w-2xl'>
    <div
      className='prose prose-lg prose-stone dark:prose-invert prose-headings:text-primary dark:prose-headings:text-secondary prose-a:text-link prose-a:visited:text-visited dark:prose-a:text-link-dark dark:prose-a:visited:text-visited-dark'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
)

export default PostBody
