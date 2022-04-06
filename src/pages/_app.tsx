import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'

import GlobalStyle from '../design-system/global'
import Head from 'next/head'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Head>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeContextProvider>
  )
}

export default MyApp
