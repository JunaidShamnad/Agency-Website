import { HeaderMobileImage, Heading } from "./HeroSection.styled";
import {
  Hero,
  HeroDescription,
  HeroButtons,
  ImageContainer,
  Image,
  ImageBelow,
  Container,
  Section,
  HeaderButton,
} from "./HeroSection.styled";

const HeroSection = () => {
  return (
    <Section  id="hero-section">
      <Container>
        <Hero>
          <Heading>Build,Grow and Manage Your Brand</Heading>
          <HeroDescription>
            We Provide financial planning, wealth managment and investment
            services
          </HeroDescription>

          <HeroButtons>
            <HeaderButton>Lets Talk</HeaderButton>
          </HeroButtons>

          <ImageContainer> 
            <HeaderMobileImage></HeaderMobileImage>
            <Image
              alt="image"
              src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              
            />
            <ImageBelow
              alt="image"
              src="https://images.unsplash.com/photo-1543269665-7821011040ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <Image
              alt="image"
              src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG9mZmljZSUyMHBlb3BsZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
            />
          </ImageContainer>

        </Hero>
      </Container>
    </Section>
  );
};

export default HeroSection;
