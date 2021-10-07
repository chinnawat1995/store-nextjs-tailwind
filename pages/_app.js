import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

export default MyApp
