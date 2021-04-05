import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${props => props.theme.typography.fontFamily};
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle