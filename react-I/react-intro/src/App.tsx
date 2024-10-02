import { RouterProvider } from "react-router-dom";

// import { Container } from "./components/Container";
// import { Post } from "./components/Post";

import router from "./routes";

// export function App() {
//   return (
//     <>
//       <h1>Meu Blog</h1>
//       <PostList posts={posts} />
//     </>
//   );
// }

export function App() {
  return <RouterProvider router={router} />;
}
