import { Post } from "../Post";

import { Posts, Title } from "./styles";

export interface IPost {
  title: string;
  description: string;
  author: string;
  avatar: string;
  createdAt: string;
  image: string;
  category: string;
}

interface PostListProps {
  posts: IPost[];
}

export function PostList({ posts }: PostListProps) {
  console.log(posts);
  return (
    <>
      <Title>
        <h1>Posts Recentes</h1>
        <span>Escolhemos a dedo nossos artigos favoritos</span>
      </Title>

      <Posts>
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </Posts>
    </>
  );
}
