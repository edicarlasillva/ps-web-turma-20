import { useState } from "react";

import { PostList, Title } from "./styles";

import { IPost } from "../../types";
import { Form } from "../../components/Form";

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  function handleCreateNewPost(post: IPost) {
    setPosts((prevState) => [...prevState, post]);
  }

  console.log(posts);
  return (
    <>
      <Form createNewPost={handleCreateNewPost} />

      <Title>Mais lidas</Title>
      <PostList></PostList>
    </>
  );
}
