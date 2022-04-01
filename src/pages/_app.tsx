import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'
import { light } from '@/design-system/themes/light'

import GlobalStyle from '../design-system/global'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider initialTheme={light}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeContextProvider>
  )
}

export default MyApp
