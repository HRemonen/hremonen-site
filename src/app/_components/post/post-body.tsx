import markdownStyles from "../markdown-styles.module.css"

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => (
  <div className='mx-auto max-w-2xl'>
    <div
      className={`prose ${markdownStyles.markdown}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
)

export default PostBody
