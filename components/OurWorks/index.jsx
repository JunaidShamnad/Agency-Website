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
            <WorkTitle>Aadiveda Ayurveda</WorkTitle>
            <WorkDescription>Ayurveda Clinic</WorkDescription>
            <WorkImage src="/images/MOCKUPS/aadiveda.jpg"/>
          </Work>

        </WorkOne>


        <WorkTwo>

          <Work>
            <WorkTitle>Neocart</WorkTitle>
            <WorkDescription>Ecommerce Website</WorkDescription>
            <WorkImage src="/images/MOCKUPS/neocart.jpg"/>
          </Work>

        </WorkTwo>


        <WorkThree>

          <Work>
            <WorkTitle>Corept Construction</WorkTitle>
            <WorkDescription>Web Landing Page</WorkDescription>
            <WorkImage src="/images/MOCKUPS/corept.png"/>
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
