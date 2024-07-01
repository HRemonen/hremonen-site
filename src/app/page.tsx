import Container from "@/app/_components/common/container";
import Intro from "@/app/_components/intro";
import Stories from "@/app/_components/stories/stories";
import { getAllPosts } from "../lib/api";

const Index = () => {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        {allPosts.length > 0 && <Stories posts={allPosts} />}
      </Container>
    </main>
  );
}

export default Index;
