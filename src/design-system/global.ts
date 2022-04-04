import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  }

  body {
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.accentColor};
  }

`
