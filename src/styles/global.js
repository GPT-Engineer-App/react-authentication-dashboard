import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #1A1A1A;
    color: #FFFFFF;
  }

  a {
    color: #FF6600;
    text-decoration: none;
    &:hover {
      color: #FF9900;
    }
  }
`;

export default GlobalStyle;