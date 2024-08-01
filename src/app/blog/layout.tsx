import PageContainer from '../_components/ui/page-container'
import ScrollToTopButton from '../_components/ui/scroll-to-top'

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <PageContainer>
    {children}
    <ScrollToTopButton />
  </PageContainer>
)

export default BlogLayout
