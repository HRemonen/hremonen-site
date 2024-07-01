import PostTitle from '@/app/_components/post/post-title'
import DateFormatter from '../formatters/date-formatter'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className='mb-4 text-md text-primary-accent-2'>
      <DateFormatter dateString={date} />
    </div>
  </>
)

export default PostHeader
