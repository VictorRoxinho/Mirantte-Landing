import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #262626;
    background-color: #ffffff;
    overflow-x: hidden;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  input, textarea {
    font-family: inherit;
  }
  
  ::selection {
    background-color: #fef3c7;
    color: #b45309;
  }
`;
