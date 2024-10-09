import { IPost } from "../PostList";
import { ContainerList } from "./styles";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  return (
    <ContainerList category={post.category}>
      <img src={post.image} />

      <p className="category">
        <span>in</span> {post.category}
      </p>

      <h2 className="title">{post.title}</h2>
      <div className="post-info">
        <img src={post.avatar} alt={post.author} />

        <div>
          <span className="author">{post.author}</span>
          <span>{post.createdAt}</span>
        </div>
      </div>

      <div className="description">{post.description}</div>
    </ContainerList>
  );
}
