import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import App from './App';
import GlobalStyle from './config/styles/global';
import theme from './config/styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </StyledThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
