import { PostProps } from "../pages/PostsPage";

export function Post({ title, content }: PostProps) {
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
      <button>Leia mais</button>
    </>
  );
}
