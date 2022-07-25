import {
  Container,
  WorkTitle,
  Work,
  WorkOne,
  WorkLinkImage,
  WorkTwo,
  WorkThree,
  WorkDescription,
  WorkImage,
  WorkHeading,
  Section,
  WorkInnerContainer,

} from "./OurWorks.styled";

const OurWorks = () => {
  return (
    <Section id="our-works">
      <Container>

      

      <WorkInnerContainer>
        <WorkOne>
          
        <WorkHeading>Latest Projects</WorkHeading>
          <Work>
            <WorkTitle>Orix Store</WorkTitle>
            <WorkDescription>Ecommerce App</WorkDescription>
            <WorkImage src="/images/MOCKUPS/Mockup-15.png"/>
          </Work>

        </WorkOne>


        <WorkTwo>

          <Work>
            <WorkTitle>Kupit Plants</WorkTitle>
            <WorkDescription>Ecommerce App</WorkDescription>
            <WorkImage src="/images/MOCKUPS/Mockup-3(2)-2.png"/>
          </Work>

        </WorkTwo>


        <WorkThree>

          <Work>
            <WorkTitle>Corept Construction</WorkTitle>
            <WorkDescription>Web Landing Page</WorkDescription>
            <WorkImage src="/images/MOCKUPS/Mockup-2.png"/>
          </Work>
{/* 
         <WorkLinkImage/> */}
        </WorkThree>

        </WorkInnerContainer>
  
      </Container>
    </Section>
  );
};

export default OurWorks;
