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
              <AboutImage src="/images/about.jpeg" alt="Two female team members discussing project"/>
            </AboutImageDiv>
            <AboutContent>
              <AboutTitle>About US</AboutTitle>
              <AboutDescription>
              We focus on developing solutions that can help you grow your business, 
              increase your sales, and improve your bottom line. We do this by understanding
              your specific needs and challenges, developing custom solutions, and being 
              passionate about our work.If you are looking for a web development agency that 
              can help you achieve your business goals, then Intelpik is the 
              solution for you.
              </AboutDescription>
              <Link href='#contact-us'>
                <AboutButton>Accelerate your growth</AboutButton>
                </Link>
            </AboutContent>
          </AboutBelow>
     
      </Container>
    </Section>
  );
};

export default AboutUs;
