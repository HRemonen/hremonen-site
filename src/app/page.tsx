import PageContainer from '@/app/_components/ui/page-container'
import FeaturedSection from '@/app/_pages/home/featured'
import RecentSection from '@/app/_pages/home/recent'
import BrowseSection from './_pages/home/browse'

const Index = () => (
  <PageContainer>
    <FeaturedSection />
    <RecentSection />
    <BrowseSection />
  </PageContainer>
)

export default Index
