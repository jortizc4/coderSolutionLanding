import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito Sans', sans-serif;

    color: var(--DarkText);
  }

  :root {

    --Light: #FFFBFF;
    --LightBlue: #47B5FF;
    --DarkText: #06283D;
  }

  body {
    background-color: var(--LightBg);

  }

 
`