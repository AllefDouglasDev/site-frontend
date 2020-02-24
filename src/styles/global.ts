import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, a, h1 {
    font-family: 'Montserrat', cursive;
    font-size: 14px;
  }

  #root {
    margin: 0 auto;
  }
`;
