import 'styled-components'

import light from '../themes/light'

type Theme = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

// export interface DefaultTheme {
//   title: string
//   colors: {
//     primary: string
//     secondary: string
//     backgroundColor: string
//     inputColor: string
//     cardColor: string
//     textColor: string
//     title: string
//   }
// }
