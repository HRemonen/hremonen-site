import PageContainer from "@/app/_components/common/page-container";
import FeaturedSection from "@/app/_components/featured";
import AllPosts from "@/app/_components/post/posts";
import HeroSection from "./_components/hero";

const Index = () => (
  <PageContainer>
    <HeroSection />
    <FeaturedSection />
    <AllPosts />
  </PageContainer>
)


export default Index
