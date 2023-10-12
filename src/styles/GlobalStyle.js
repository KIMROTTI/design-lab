import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0px;
    background-color: black;
    /* font-family: "Helvetica", "Arial", sans-serif; */
    /* line-height: 1.5; */
  }
`;

export default GlobalStyle;
