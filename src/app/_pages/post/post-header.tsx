import PostTitle from '@/app/_pages/post/post-title'
import DateFormatter from '@/app/_components/formatters/date-formatter'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className='text-md text-primary-accent-2 mb-4'>
      <DateFormatter dateString={date} />
    </div>
  </>
)

export default PostHeader
