import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store, persister } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react';

import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <PersistGate persistor={persister}>
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
        </PersistGate>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
