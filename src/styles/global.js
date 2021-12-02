import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: none;
}

body {
    background: #f5f5f5;    
}

button {
    cursor: pointer;
}

a{
    text-decoration:none;
}

`;
