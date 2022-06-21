
import MainButton, { FourthButton, SecondButton, ThirdButton } from "../Button"
import { Heading } from "./HeroSection.styled"


const HeroSection = () => {
    return (
      <>
      <Heading>Main Heading</Heading>
      <MainButton>Main Button</MainButton>
      <SecondButton>Second Button</SecondButton>
      <ThirdButton>Third Button</ThirdButton>
      <FourthButton>Fourth Button</FourthButton>
      </>
    )
  }
  
  export default HeroSection