import {
  Container,
  WorkTitle,
  Work,
  WorkOne,
  WorkLinkImage,
  WorkTwo,
  WorkThree,
} from "./OurWorks.styled";

const OurWorks = () => {
  return (
    <>
      <Container>
        <WorkOne>
          <WorkHeading>Latest Projects</WorkHeading>
          <Work>
            <WorkTitle></WorkTitle>
          </Work>
        </WorkOne>
        <WorkTwo>
          <Work></Work>
        </WorkTwo>
        <WorkThree>
          <Work></Work>
          <WorkLinkImage></WorkLinkImage>
        </WorkThree>
      </Container>
    </>
  );
};

export default OurWorks;
