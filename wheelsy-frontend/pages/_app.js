import Layout from '../components/Layout'
import '../styles/globals.css'
import React from "react";
import App from "next/app";
import withData from "../lib/apollo";

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default withData(MyApp)
