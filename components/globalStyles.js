//globalStyles

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Grifter-bold';
    src: url('/fonts/grifterbold-webfont.woff2') format('woff2'),
         url('/fonts/grifterbold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

html,
body {
    font-family: 'Grifter-bold', sans-serif;
    padding: 0;
    margin: 0;
    background-color:#fff2f2;
    color:#0D0A19;;
}

html {
    scroll-behavior: smooth;
    height:100%;
}

body{
    min-height:100vh;
   /* overflow-x:hidden; */
}
a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    letter-spacing:0.8;
    user-select:none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    letter-spacing:0.8;
    /* transition: all 0.2s ease-in-out ; */
    font-family: 'Plus Jakarta Sans', sans-serif;
    /* overflow-x:hidden; */
    /* background-color:rgba(27, 245, 49, 0.12);*/
     /* outline: 1px solid red;  */
}

img{
    height:100%;
    border-radius:10px;
    width:100%;
}

section{
    margin: 0 auto;
}
@media(max-width: 785px){
    img{
        width:90%;
    }
}

`;

export default GlobalStyle;
