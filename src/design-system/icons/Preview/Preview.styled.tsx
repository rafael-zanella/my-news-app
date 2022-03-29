import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #f1f1f1;
    color: #212121;
    font-family: Open-Sans, Helvetica, sans-serif;
  }

  pre {
    background: #171717;
    padding: 1em;
    border-radius: 4px;
    margin: 2em 0;
    display: block;
    overflow-x: auto;
    color: #e5e5e5;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1em;
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  align-content: center;

  [data-selected] {
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  [data-selected="true"] {
    background: #ffffff;
    border-radius: 4px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;