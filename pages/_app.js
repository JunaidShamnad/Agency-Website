import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { ThemeProvider } from "styled-components";
import { theme } from "../components/Theme";
import Layout from "../components/layout";
import GlobalStyle from "../components/globalStyles";
import LoadingScreen from "../components/LoadingScreen";
// import Router from 'next/router';
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // setLoading(true);
  //   setTimeout(() => setLoading(true), 2000);
  // }, []);
  // Router.events.on('routeChangeStart', () => NProgress.start());
  //  Router.events.on('routeChangeComplete', () => NProgress.done()); 
  //  Router.events.on('routeChangeError', () => NProgress.done());
  const router = useRouter();
    const [pageLoading, setPageLoading] = useState(false);
    useEffect(() => {
        const handleStart = () => { setPageLoading(true); };
        const handleComplete = () => { setPageLoading(false); };
    
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
      }, [router]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {pageLoading ? (
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
