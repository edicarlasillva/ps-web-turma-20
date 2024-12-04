import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

import { CounterProvider } from "./CounterContext";

export function App() {
  return (
    <CounterProvider>
      <RouterProvider router={router} />
    </CounterProvider>
  );
}
