import PageContainer from "@/app/_components/common/page-container";
import FeaturedSection from "@/app/_components/featured";
import AllPosts from "@/app/_components/post/posts";
import { getAllPosts, getFeaturedPosts } from "../lib/api";
import HeroSection from "./_components/hero";

const Index = () => {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPosts();

  return (
    <PageContainer>
      <HeroSection />
      {featuredPost.length > 0 && <FeaturedSection posts={featuredPost} />}
      {allPosts.length > 0 && <AllPosts posts={allPosts} />}
    </PageContainer>
  );
}

export default Index;
