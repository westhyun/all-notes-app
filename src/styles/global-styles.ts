import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  html,
  body {
    color: #373737;
    height: 100%;
    width: 100%;
    overflow: hidden;
    @supports(-webkit-touch-callout:none) {
      height: -webkit-fill-available;
    }
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  li,
  pre,
  label {
    line-height: 1.5em;
    font-size: 1rem;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
