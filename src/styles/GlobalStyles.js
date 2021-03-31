import { createGlobalStyle } from 'styled-components';

const root = {
  backgroundColor: 'rgb(240, 242, 245)',
  textColor: '#1c1e21'
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${root.backgroundColor};
    color: ${root.textColor};
    font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;

    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle