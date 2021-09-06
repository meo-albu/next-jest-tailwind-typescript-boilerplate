import '@/styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
