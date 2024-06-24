import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #101FF8;
    color: #FFFFFF;
  }

  a {
    color: #FCE63B;
    text-decoration: none;
    &:hover {
      color: #FC2427;
    }
  }
`;

export default GlobalStyle;