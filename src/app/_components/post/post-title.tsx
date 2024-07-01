import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => (
    <h1 className='mb-4 text-left text-3xl font-[500] leading-tight tracking-tighter md:text-4xl md:leading-none'>
      {children}
    </h1>
  )

export default PostTitle