import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
  main {
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: start;
    align-items: center;
    padding: 0 1em;
    border: 3px red solid;
  }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
