import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PostList } from "../../components/PostList";

import { Container, Wrapper } from "./styles";

import { posts } from "../../posts";

export function HomePage() {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <PostList posts={posts} />
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}
