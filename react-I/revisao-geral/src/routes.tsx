import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./DefaultLayout";
import { Home } from "./Home";
import { About } from "./About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
