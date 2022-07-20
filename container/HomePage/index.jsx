import AboutUs from "../../components/AboutUs"
import ContactUs from "../../components/ContactUs"
import FAQ from "../../components/FAQ"
import HeroSection from "../../components/HeroSection"
import OurWorks from "../../components/OurWorks"
import Services from "../../components/Services"
import Testimonials from "../../components/Testimonials"
import Values from "../../components/Values"


const HomePage = () => {
    return (
      <>
      <HeroSection/>
      <AboutUs />
      <Services/>
      <OurWorks/>
      <Values />
      <Testimonials/>
      <FAQ />
      <ContactUs/>
      </>
    )
  }
  
  export default HomePage