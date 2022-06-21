import { AboutTitle,About,AboutBelow,AboutImage,AboutContent,AboutDescription,AboutQuote,AboutLink } from "./AboutUs.styled"


const AboutUs = () => {
  return (
    <>
    <About>
      <AboutTitle>About</AboutTitle>
      <AboutBelow>
        <AboutContent>
          <AboutDescription>TALA is an entirely new type of fruit<br></br> snack based on a simple yet revolutionary idea: make fruits snacks with real fruit, period</AboutDescription>
          <AboutQuote>ONE INGREDIENT <br></br>ONE UNBELIVABLE CRUNCH</AboutQuote>
          <AboutLink>SEE HOW ITS WORKS</AboutLink>
        </AboutContent>
        <AboutImage src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"/>
      </AboutBelow>
    </About>
    
    </>
  )
}

export default AboutUs