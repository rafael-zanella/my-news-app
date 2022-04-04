// import { ThemeContextProvider } from "../src/Contexts/ThemeContext/ThemeContext"

import { light } from '../src/design-system/themes/light'
import { dark } from '../src/design-system/themes/dark'
import { ThemeProvider } from "styled-components";



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

const getTheme = (themeName) => {
  return themeName === 'light' ? light : dark 
}


const withThemeProvider=(Story, context)=>{
  const theme = getTheme(context.globals.theme)
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <Story {...context.globals} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];