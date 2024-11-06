import { RouterProvider } from "react-router-dom";

import { ContactContextProvider } from "./contexts/ContactContext";

import { router } from "./routes";

export function App() {
  return (
    <ContactContextProvider>
      <RouterProvider router={router} />
    </ContactContextProvider>
  );
}
