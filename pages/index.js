import HomePage from "../container/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Intelpik</title>
        <meta name="title" content="Intelpik " />
        <meta
          name="description"
          content="Intelpik is a freelance team of industry experts  providing digital solutions like Web Development,App Development and Branding."
        />
        <meta
          name="keywords"
          content="Intelpik, intelpik,intelpik.com,web development,kerala,kollam,trivandrum,india,freelance,freelance developers,best developer intelpik,intelpik freelance team,intelpik web developers,intelpik,INTELPIK,WEB DEVELOPMENT,intelpik,intelpic"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="copyright"
          content="Intelpik . © Copyright 2022, All Rights Reserved."
        ></meta>
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Intelpik Junaid S" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Intelpik" />
        <meta
          property="og:description"
          content="Intelpik is a freelance team of industry experts  providing digital solutions like Web Development,App Development and Branding."
        />
        <meta property="og:image" content="/images/banner.jpeg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Intelpik" />
        <meta
          property="twitter:description"
          content="Intelpik is a freelance team of industry experts  providing digital solutions like Web Development,App Development and Branding."
        />
        <meta property="twitter:image" content="/images/banner.jpeg"></meta>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <HomePage />
    </>
  );
}
