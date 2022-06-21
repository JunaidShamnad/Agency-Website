//globalStyles

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
    font-family: 'Inter', sans-serif;
    padding: 0;
    margin: 0;
    background-color:#fff;

}

html {
    scroll-behavior: smooth;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: all 0.2s ease-in-out ;
}

`;

export default GlobalStyle;
