import "@/styles/globals.css";
import Layout from "@/components/layout/layout.js";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Fresh Token</title>
        <meta name="description" content="Crypto Listing Website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
