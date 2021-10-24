import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import store from '@/redux/store'

import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
