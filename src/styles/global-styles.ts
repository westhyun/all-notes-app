import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    color: #373737;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
