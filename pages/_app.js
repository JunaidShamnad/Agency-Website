import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/Theme";
import Layout from "../components/layout";
import GlobalStyle from "../components/globalStyles";
import LoadingScreen from "../components/LoadingScreen";
// import Router from 'next/router';
// import NProgress from 'nprogress'; //nprogress module
// import 'nprogress/nprogress.css'; //styles of nprogress


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => setLoading(true), 1500);
  }, []);


  // Router.events.on('routeChangeStart', () => NProgress.start());
  //  Router.events.on('routeChangeComplete', () => NProgress.done()); 
  //  Router.events.on('routeChangeError', () => NProgress.done());
  
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
