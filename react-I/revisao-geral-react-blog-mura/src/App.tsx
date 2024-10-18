import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import { router } from "./routes";

import light from "./themes/light";
import { RouterProvider } from "react-router-dom";
// import dark from "./themes/dark";

export function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
