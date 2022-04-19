import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '@/Contexts/ThemeContext/ThemeContext'
import GlobalStyle from '../design-system/global'
import Head from 'next/head'

import '../../public/nprogress.css'
import NProgress from 'nprogress'
import Router from 'next/router'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
