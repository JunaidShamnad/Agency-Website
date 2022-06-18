import {ThemeProvider} from 'styled-components';
import {theme} from '../components/Theme';
import Layout from '../components/layout';
import GlobalStyle from '../components/globalStyles';

function MyApp({ Component, pageProps }) {

  return(
   
    <Layout>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
 
 
  ) 
}


export default MyApp
