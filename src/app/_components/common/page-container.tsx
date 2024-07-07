type Props = {
  children?: React.ReactNode
}

const PageContainer = ({ children }: Props) => (
  <div className='container mx-auto px-5'>{children}</div>
)

export default PageContainer
