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
            <WorkImage src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"/>
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
