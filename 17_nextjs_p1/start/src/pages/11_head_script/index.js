import Head from "next/head";
import Script from "next/script";
import {useState} from "react";

export default function Page() {
  const [load, setLoad] = useState();
  return (
    <>
      <Head>
        <title>Page's title</title>
        <meta property="og:title" content="page's title"/>
      </Head>
      <Script src="/jquery-3.2.1.min.js"
        /*strategy="beforeInteractive"*/
        onLoad={() => setLoad(true)}
        onError={e => console.error(e)}
      />
      <h3>jQuery loaded: {load ? "true" : "false"}</h3>
    </>
  );
}