import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
    color: ${theme.textColor};
  }
  
  body {
    background-color: ${theme.backgroundColor};
  }
  
  a {
    color: unset;
    text-decoration: none;
  }
  
  input:focus {
    outline: none;
  }
  
  button {
    all: unset;
    box-sizing: border-box;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  input {
    font-family: inherit;
  }

  textarea {
    font-family: inherit;
    outline: none;
  }
`;

export default GlobalStyle;
