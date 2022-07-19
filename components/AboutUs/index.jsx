import {
  AboutTitle,
  About,
  AboutBelow,
  AboutImage,
  AboutContent,
  AboutDescription,
  AboutQuote,
  AboutLink,
  Section,
  Container,
  AboutContentLowerContainer
} from "./AboutUs.styled";

const AboutUs = () => {
  return (
    <Section id="about-us">
      <Container>

        <About>
          <AboutTitle>About</AboutTitle>

          <AboutBelow>
            
            <AboutContent>

              <AboutDescription>
                TALA is an entirely new type of fruit snack based on a simple yet revolutionary idea: make fruits snacks with real fruit, period
              </AboutDescription>
          <AboutContentLowerContainer>
              <AboutQuote>
                ONE INGREDIENT <br />
                ONE UNBELIVABLE CRUNCH
              </AboutQuote>

              <AboutLink>SEE HOW ITS WORKS</AboutLink>
              </AboutContentLowerContainer>
            </AboutContent>
            <AboutImage src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          
          </AboutBelow>

        </About>

      </Container>
    </Section>
  );
};

export default AboutUs;
