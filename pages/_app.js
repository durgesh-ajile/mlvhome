import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";
import Header from "../src/layouts/headers/Header";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {loader && <PreLoader />}
      <Head>
        <title>MLV PG Services</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          // href="assets/images/favicon.png"
          href="assets/images/logo.png"
          type="image/x-icon"
        />
        <link rel="icon" href="assets/images/logo.png" type="image/x-icon" />
      </Head>
      <Header/>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
