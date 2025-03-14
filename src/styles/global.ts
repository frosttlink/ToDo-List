import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme["gray-600"]};
    color: ${props => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;

    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }
`