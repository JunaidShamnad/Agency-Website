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
  WorkHeading
} from "./OurWorks.styled";

const OurWorks = () => {
  return (
    <>
      <Container>
        <WorkOne>
          <WorkHeading>Latest Projects</WorkHeading>
          <Work>
            <WorkTitle>Plantshop Landing Page design</WorkTitle>
            <WorkDescription>Web/Landing Page</WorkDescription>
            <WorkImage src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
          </Work>
        </WorkOne>
        <WorkTwo>
          <Work>
            <WorkTitle>Plantshop Landing Page design</WorkTitle>
            <WorkDescription>Web/Landing Page</WorkDescription>
            <WorkImage src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          </Work>
        </WorkTwo>
        <WorkThree>
          <Work>
            <WorkTitle>Plantshop Landing Page design</WorkTitle>
            <WorkDescription>Web/Landing Page</WorkDescription>
            <WorkImage src="https://images.unsplash.com/photo-1512499312141-b239712c0a3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          </Work>
          <WorkLinkImage/>
        </WorkThree>
      </Container>
    </>
  );
};

export default OurWorks;
