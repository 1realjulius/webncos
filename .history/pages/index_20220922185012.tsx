import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ComingSoon from "../components/ComingSoon";
import MainHome from "../components/MainHome";
import NavigationBar from "../components/NavigationBar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen  font-ShpockMabryRegular flex-col bg-black">
      <Head>
        <title>Webncos Agency</title>
        <meta
          name="description"
          content="Professional Website Development And Management Agency."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webncos.com/" />
        <meta
          property="og:title"
          content="Webncos — Professional Website Development And Management Agency."
        />
        <meta
          property="og:description"
          content="Professional Website Development And Management Agency."
        />
        <meta property="og:image" content="/Assets/wLogo.png" />
        <meta property="twitter:card" content="/Assets/webncos-og-img-lg.png" />
        <meta property="twitter:url" content="https://www.webncos.com/" />
        <meta
          property="twitter:title"
          content="Webncos — Professional Website Development And Management Agency."
        />
        <meta
          property="twitter:description"
          content="Professional Website Development And Management Agency."
        />
        <meta
          property="twitter:image"
          content="/Assets/webncos-og-img-lg.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <meta name="google-site-verification" content="0HesePHVymRqGiL70HUKPIq0Zsap0uUIb_Ci0DpImRY" /> */}
        <meta
          name="theme-color"
          content="#2563eb"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#2563eb"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      {/* <NavigationBar /> */}
      <ComingSoon />
    </div>
  );
};

export default Home;
