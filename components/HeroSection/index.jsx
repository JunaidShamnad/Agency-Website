import { Heading } from "./HeroSection.styled"
import { FourthButton, SecondButton } from "../Button"
import { Hero,HeroDescription,HeroButtons,ImageContainer,Image ,ImageBelow } from "./HeroSection.styled"



const HeroSection = () => {
    return (
      <>
      <Hero>
        <Heading>ITS TIME TO PURSUR BETTER FUTURE</Heading>
        <HeroDescription>We Provide financial planning, wealth managment and investment services</HeroDescription>
        
        <HeroButtons>
          <SecondButton>Lets Talk</SecondButton>
          <FourthButton>Learn More</FourthButton>
        </HeroButtons>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
          <ImageBelow src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/>
          <Image src="https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"/>
        </ImageContainer> 
      </Hero>
      </>
    )
  }
  
  export default HeroSection