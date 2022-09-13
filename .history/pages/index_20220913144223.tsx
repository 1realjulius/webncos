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
      <div>
        <Link href="https://www.iamjulius.com/">
          <div>
            <span> Made with</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
              </svg>
            </span>
            <span>By Julius Eghan</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
