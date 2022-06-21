import Button from "../Button"
import Paragraph from "../cssHelper"
import Heading from "./HeroSection.styled"


const HeroSection = () => {
    return (
      <>
      <Heading>It's Time to Pursue Better future</Heading>
      <Paragraph>We provide finacial planning, wealth management and investment services</Paragraph>
      <Button>LetsTalks</Button>
      <Button>Learn More</Button>
      <ImageContainer>
        <Image/>
        <ImageBelow/>
        <Image/>
      </ImageContainer>
      </>
    )
  }
  
  export default HeroSection