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
        <meta name='theme-color' content='#FFF' />

        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <meta name='application-name' content='My News App' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='My News App' />
        <meta name='description' content='My News App' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/ms/browserconfig.xml' />
        <meta name='msapplication-TileColor' content="#fff" />
        <meta name='msapplication-tap-highlight' content='no' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://my-news-app-tcc.vercel.app/' />
        <meta name='twitter:title' content='My News App' />
        <meta name='twitter:description' content='App de Notícias' />
        <meta name='twitter:image' content='/icons/icon-192x192.png' />
        <meta name='twitter:creator' content='' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='My News App' />
        <meta property='og:description' content='My News App' />
        <meta property='og:site_name' content='My News App' />
        <meta property='og:url' content='https://my-news-app-tcc.vercel.app/' />
        <meta property='og:image' content='/icons/apple/apple-icon-180x180.png' />

        <title>My News App</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeContextProvider>
  )
}

export default MyApp
