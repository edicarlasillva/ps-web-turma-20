interface PostProps {
  title: string;
  content: string;
  autor: string;
}

export function Post(props: PostProps) {
  console.log(props.title);
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.content}</h2>
      <p>{props.autor}</p>
    </>
  );
}
