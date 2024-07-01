import Container from "@/app/_components/common/container";
import FeaturedSection from "@/app/_components/featured";
import Stories from "@/app/_components/stories/stories";
import { getAllPosts } from "../lib/api";

const Index = () => {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <FeaturedSection />
        {allPosts.length > 0 && <Stories posts={allPosts} />}
      </Container>
    </main>
  );
}

export default Index;
