import AboutUs from "../../components/AboutUs"
import ContactUs from "../../components/ContactUs"
import FAQ from "../../components/FAQ"
import Features from "../../components/Features"
import HeroSection from "../../components/HeroSection"
import OurWorks from "../../components/OurWorks"
import Services from "../../components/Services"
import Testimonials from "../../components/Testimonials"


const HomePage = () => {
    return (
      <>
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <OurWorks/>
      <Features/>
      <Testimonials/>
      <FAQ/>
      <ContactUs/>
      </>
    )
  }
  
  export default HomePage