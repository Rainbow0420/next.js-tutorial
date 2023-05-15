import '../styles/styles.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
   return (
   <>
    <Head>
      <meta name="author" content="John Doe"/>
    </Head>
    <Component {...pageProps} />
   </>
   )
}