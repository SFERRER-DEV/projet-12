import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
      font-size: 16px;
      font-family: sans-serif;
    }

    main {
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      flex-grow: 1;
      justify-content: start;
      align-items: center;
      padding: 0 1em;
      @media (max-width:767px) {
        font-size: 0.85em;
      }
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
