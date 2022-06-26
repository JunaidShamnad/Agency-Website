//globalStyles

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html,
body {
    font-family: 'Syne', sans-serif;
    padding: 0;
    margin: 0;
    background-color:#fff;

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
    /* transition: all 0.2s ease-in-out ; */
    font-family: 'Syne', sans-serif;
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
