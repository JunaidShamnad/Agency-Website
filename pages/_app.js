
import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router'
import { ThemeProvider } from "styled-components";
import { theme } from "../components/Theme";
import Layout from "../components/layout";
import GlobalStyle from "../components/globalStyles";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => setLoading(true), 2000);
  }, []);
  // const router = useRouter();

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
  //     const handleComplete = (url) => (url === router.asPath) && setLoading(false);

  //     router.events.on('routeChangeStart', handleStart)
  //     router.events.on('routeChangeComplete', handleComplete)
  //     router.events.on('routeChangeError', handleComplete)

  //     return () => {
  //         router.events.off('routeChangeStart', handleStart)
  //         router.events.off('routeChangeComplete', handleComplete)
  //         router.events.off('routeChangeError', handleComplete)
  //     }
  // })

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     url !== router.pathname ? setLoading(true) : setLoading(false);
  //   };
  //   const handleComplete = (url) => setLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);
  // }, [router]);

  // useEffect(() => {
  //   const handleStart = () => { setLoading(true); };
  //   const handleComplete = () => { setLoading(false); };

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);
  // }, [router]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {!loading ? (
           <LoadingScreen />
       ) : (
       
          <Layout>
          <Component {...pageProps} />
        </Layout>
        )} 
      </ThemeProvider>
    </>
  );
}

export default MyApp;
