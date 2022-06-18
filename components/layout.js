import {ThemeProvider} from 'styled-components'
import theme from './Theme'
import Footer from "./Footer"
import Navbar from "./Navbar"



const layout = ({children}) => {
  return (
   <ThemeProvider theme={theme}>
   <Navbar/>
   {children}
   <Footer/>
   </ThemeProvider>
  )
}

export default layout