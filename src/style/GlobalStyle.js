import reset from "styled-reset"
import { createGlobalStyle } from "styled-components"

const GlobalSylte = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
`;

export default GlobalSylte;