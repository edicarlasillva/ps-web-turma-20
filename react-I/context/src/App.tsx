import { RouterProvider } from "react-router-dom";

import { GlobalStyles } from "./styles/global";

import { ThemeContextProvider } from "./contexts/ThemeContext";
import { UserContextProvider } from "./contexts/UserContext";

import { router } from "./routes";

export function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}
