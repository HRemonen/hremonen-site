import Container from "@/app/_components/common/container";
import FeaturedSection from "@/app/_components/featured";
import AllPosts from "@/app/_components/post/posts";
import { getAllPosts } from "../lib/api";

const Index = () => {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <FeaturedSection />
        {allPosts.length > 0 && <AllPosts posts={allPosts} />}
      </Container>
    </main>
  );
}

export default Index;
