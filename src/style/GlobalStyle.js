import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalSylte = createGlobalStyle`
  ${reset}
  
  
  
  
  * {
    box-sizing: border-box;
    font-family: 'Nanum Pen Script', cursive;
  }
  body {
    font-family: 'Nanum Pen Script', cursive;
  }

  h2 {
    font-family: 'Gaegu', cursive;
  }
`;

export default GlobalSylte;
