import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    @media (max-width: 400px) {
    box-sizing: unset;
    overflow-x: hidden;
    max-width: 320px;
    margin: 0 auto;
    padding: 0;
  }
  }
  
  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px 50px;

    @media (max-width: 400px) {
    max-width: 320px;
    margin: 0 auto;
    padding: 0;
  }
  }

  button {
    cursor: pointer;
  }
`;
