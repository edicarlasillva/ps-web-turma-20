import { createGlobalStyle }  from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }

  h1 {
    margin-top: 20px;
    font-size: 2rem;
  }
`