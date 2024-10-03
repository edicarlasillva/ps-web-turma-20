import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>Sobre</h1>
      </div>
    ),
  },
]);

export default router;
