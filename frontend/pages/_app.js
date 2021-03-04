import Head from "next/head";
import Layout from "@components/layout";
import "../css/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js Starter Tailwind</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
