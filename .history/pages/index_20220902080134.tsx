import type { NextPage } from "next";
import Head from "next/head";
import ComingSoon from "../components/ComingSoon";
import MainHome from "../components/MainHome";
import NavigationBar from "../components/NavigationBar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col font-parcel">
      <Head>
        <title>Webncos</title>
        <meta
          name="description"
          content="Website and Software Development Agency."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webncos.com/" />
        <meta
          property="og:title"
          content="Webncos — Website and Software Development Agency."
        />
        <meta
          property="og:description"
          content="Website and Software Development Agency."
        />
        {/* <meta property="og:image" content="/Assets/newmemoji.svg"/> */}
        {/* <meta property="twitter:card" content="/Assets/Julius_Eghan.jpg"/> */}
        <meta property="twitter:url" content="https://www.webncos.com/" />
        <meta
          property="twitter:title"
          content="Webncos — Website and Software Development Agency."
        />
        <meta
          property="twitter:description"
          content="Website and Software Development Agency."
        />
        {/* <meta property="twitter:image" content="/Assets/Julius_Eghan.jpg"/> */}
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
        <link rel="manifest" href="/site.webmanifest" />
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
      <NavigationBar />
      <MainHome />
    </div>
  );
};

export default Home;
