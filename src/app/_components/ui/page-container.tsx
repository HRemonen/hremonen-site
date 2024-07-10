type Props = {
  children?: React.ReactNode
}

const PageContainer = ({ children }: Props) => (
  <div className='mx-auto sm:container md:px-5'>{children}</div>
)

export default PageContainer
