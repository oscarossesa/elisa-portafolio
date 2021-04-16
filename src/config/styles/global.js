import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${props => props.theme.typography.fontFamily};
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
  }
`

export default GlobalStyle