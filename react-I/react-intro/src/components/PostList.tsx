import { PostProps } from "../pages/PostsPage";
import { Post } from "./Post";

interface PostListProps {
  posts: PostProps[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <>
      <h2>Lista de posts</h2>

      {posts.map((post) => (
        <Post key={post.title} title={post.title} content={post.content} />
      ))}
    </>
  );
}
