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
            <WorkTitle>Plantshop Landing Page design</WorkTitle>
            <WorkDescription>Web/Landing Page</WorkDescription>
            <WorkImage src="/images/WhatsApp Image 2022-07-23 at 3.53.53 AM.jpeg"/>
          </Work>

        </WorkOne>


        <WorkTwo>

          <Work>
            <WorkTitle>Plantshop Landing Page design</WorkTitle>
            <WorkDescription>Web/Landing Page</WorkDescription>
            <WorkImage src="https://images.unsplash.com/photo-1546967900-1bea5f16b69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
          </Work>

        </WorkTwo>


        <WorkThree>

          <Work>
            <WorkTitle>Plantshop Landing Page design</WorkTitle>
            <WorkDescription>Web/Landing Page</WorkDescription>
            <WorkImage src="https://images.unsplash.com/photo-1558468820-c14c3bdb0c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
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
