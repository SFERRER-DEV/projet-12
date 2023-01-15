import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
  main {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 3px blue solid;
  }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
