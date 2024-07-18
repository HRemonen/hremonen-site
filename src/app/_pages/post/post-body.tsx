type Props = {
  content: string
}

const PostBody = ({ content }: Props) => (
  <div
    className='prose prose-lg prose-stone mx-8 max-w-[64ch] dark:prose-invert prose-a:text-link prose-a:no-underline prose-a:visited:text-visited hover:prose-a:underline dark:prose-a:text-link-dark dark:prose-a:visited:text-visited-dark'
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostBody
