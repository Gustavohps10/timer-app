import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${({theme}) => theme["green-500"]};;
    }

    body {
        background-color: ${({theme}) => theme["gray-900"]};
        color: ${({theme}) => theme["gray-300"]};;
    }
    
    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
`;