import {ThemeProvider} from 'styled-components';
import {theme} from '../components/Theme';
import Layout from '../components/layout';
import GlobalStyle from '../components/globalStyles';

function MyApp({ Component, pageProps }) {

  return(
   <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
    <Layout>
     
      
      <Component {...pageProps} />
      
    </Layout>
    </ThemeProvider>
    </>
 
  ) 
}


export default MyApp
