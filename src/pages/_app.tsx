import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'

import GlobalStyle from '../design-system/global'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeContextProvider>
  )
}

export default MyApp
