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
  AboutButton,
  AboutImageDiv,
} from "./AboutUs.styled";
import Link from 'next/link'

const AboutUs = () => {
  return (
    <Section id="about-us">
      <Container>

          <AboutBelow>
            <AboutImageDiv
            >
              <AboutImage src="/images/about.jpeg" />
            </AboutImageDiv>
            <AboutContent>
              <AboutTitle>About US</AboutTitle>
              <AboutDescription>
                We are a team of freelance web developers in the UK who create innovative and 
                bespoke websites for businesses of all sizes. Our websites are stunningly designed,
                seamlessly functional, and SEO-optimized to help our clients succeed. 
                Partner with us to transform your ideas into captivating online realities.
              </AboutDescription>
              <Link href='#contact-us'>
                <AboutButton>Try Us</AboutButton>
                </Link>
            </AboutContent>
          </AboutBelow>
     
      </Container>
    </Section>
  );
};

export default AboutUs;
