import { createBrowserRouter } from "react-router-dom";

import { UseEffectPage } from "../pages/UseEffectPage";
import { UseEffectApiPage } from "../pages/UseEffectApiPage";
import { UseCallbackPage } from "../pages/UseCallbackPage";
import { UseMemoPage } from "../pages/UseMemoPage";
import { UseRefPage } from "../pages/UseRefPage";
import { UseRefMutablePage } from "../pages/UseRefMutablePage";

export const router = createBrowserRouter([
  {
    path: "useeffect",
    element: <UseEffectPage />,
  },
  {
    path: "useeffectapi",
    element: <UseEffectApiPage />,
  },
  {
    path: "usecallback",
    element: <UseCallbackPage />,
  },
  {
    path: "usememo",
    element: <UseMemoPage />,
  },
  {
    path: "useref",
    element: <UseRefPage />,
  },
  {
    path: "userefmutable",
    element: <UseRefMutablePage />,
  },
]);
