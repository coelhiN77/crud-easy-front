import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
`;

export default Global;
