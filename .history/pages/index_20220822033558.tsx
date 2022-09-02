import type { NextPage } from 'next'
import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  py-2 font-ApercuMedium">
      <Head>
      <title>Webncos</title>
        <meta name="description" content="Website and Software Development Agency." />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.webncos.com/"/>
        <meta property="og:title" content="Webncos — Website and Software Development Agency."/>
        <meta property="og:description" content="Website and Software Development Agency."/>
        {/* <meta property="og:image" content="/Assets/newmemoji.svg"/> */}
        {/* <meta property="twitter:card" content="/Assets/Julius_Eghan.jpg"/> */}
        <meta property="twitter:url" content="https://www.webncos.com/"/>
        <meta property="twitter:title" content="Webncos — Website and Software Development Agency."/>
        <meta property="twitter:description" content="Website and Software Development Agency."/>
        {/* <meta property="twitter:image" content="/Assets/Julius_Eghan.jpg"/> */}
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="google-site-verification" content="0HesePHVymRqGiL70HUKPIq0Zsap0uUIb_Ci0DpImRY" /> */}
        <meta name="theme-color" content="#f7f2f2"   media="(prefers-color-scheme: light)"/>
        <meta name="theme-color" content="#090c10"   media="(prefers-color-scheme: dark)"/>
      </Head>
      <NavigationBar/>

    </div>
  )
}

export default Home
