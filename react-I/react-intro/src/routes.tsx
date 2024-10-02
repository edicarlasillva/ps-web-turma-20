import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { PostsPage } from "./pages/PostsPage";
import { About } from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
