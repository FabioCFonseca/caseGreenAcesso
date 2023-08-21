import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root{
    --primaryBlue: #043F47;
    --secondaryBlue: #0C7D85;

  }

  body {

    //RESETS
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

    //FONT
    font-family: 'Roboto', sans-serif;
    color: white;
    background-color: var(--primaryBlue);

    //LAYOUT
    margin: 130px auto 0;
    max-width: 1200px;
    padding: 0 40px;

 
  } 
  
`;

export default GlobalStyles;

//backgroung color: #043F47
//yellow: #C0D16D
//blue: #0C7D85