import { Container } from "../components/Container";
import { PostList } from "../components/PostList";

export interface PostProps {
  title: string;
  content: string;
}

const posts: PostProps[] = [
  {
    title: "Post 1",
    content: "Conteúdo do post 1",
  },
  {
    title: "Post 2",
    content: "Conteúdo do post 2",
  },
  {
    title: "Post 3",
    content: "Conteúdo do post 13",
  },
];

export function PostsPage() {
  return (
    <Container>
      <h1>Lista de Posts</h1>
      <PostList posts={posts} />
    </Container>
  );
}
