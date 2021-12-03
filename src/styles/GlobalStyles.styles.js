import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-pallets-blue: #034AA6;
        --color-pallets-blue-light: #0A5DA6;
        --color-pallets-marine: #0AA689;
        --color-pallets-green: #9ABF4B;
        --color-pallets-orange: #F27F3D;
        --color-background : rgba(0,0,0,0.5);
        --color-white: #fff;
        --color-alert: red;
        font-size: 62.5%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
        background-color: var(--color-pallets-blue-light)
    }
`;