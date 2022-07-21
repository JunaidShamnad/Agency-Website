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
  AboutContentLowerContainer,
} from "./AboutUs.styled";
import Link from 'next/link'

const AboutUs = () => {
  return (
    <Section id="about-us">
      <Container>
        <About>
          <AboutTitle>About</AboutTitle>

          <AboutBelow>
            <AboutContent>
              <AboutDescription>
                Make brand identities from scratch and help big brands stay
                mighty.Efficient and high perfoming team to execute all the
                work.
              </AboutDescription>
              <AboutContentLowerContainer>
                <AboutQuote>
                  We collaborate, we create <br />
                  We think outside the box
                </AboutQuote>

               <Link href="#contact-form" passHref><a><AboutLink>SEE HOW ITS WORKS</AboutLink></a></Link> 
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
