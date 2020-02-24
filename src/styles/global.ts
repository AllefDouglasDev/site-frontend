 
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-size: 14px;
        color: ${colors.primary};
    }

    #root {
        margin: 0 auto;
    }

`;
