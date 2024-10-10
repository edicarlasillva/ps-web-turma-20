import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'

import light from './themes/light'
// import dark from "./themes/dark";

import { router } from './routes'

export function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
