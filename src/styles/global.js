import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        border: border-box;
        padding: 0;
        margin: 0; 
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    body{
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background: linear-gradient(to bottom, rgb(236, 236, 236) 15%, #318f53 100%);
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;