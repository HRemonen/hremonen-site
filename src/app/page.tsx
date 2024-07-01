import PageContainer from "@/app/_components/common/page-container";
import FeaturedSection from "@/app/_components/featured";
import AllPosts from "@/app/_components/post/posts";
import { getAllPosts } from "../lib/api";

const Index = () => {
  const allPosts = getAllPosts();

  return (
    <main id="main-content">
      <PageContainer>
        <FeaturedSection />
        {allPosts.length > 0 && <AllPosts posts={allPosts} />}
      </PageContainer>
    </main>
  );
}

export default Index;
