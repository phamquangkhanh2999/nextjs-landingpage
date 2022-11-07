import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --VeryLightGray: hsl(0, 0%, 98%);
    --White: hsl(0, 0%, 100%);
    --TitleText:#4F308D;
    --BackGroundHead:#011037;
    --BackGroundFooter:#0433AD;
}

*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

    body {   
      font-family: 'Inter', sans-serif;
    }
   
    
`;

export default GlobalStyle;
