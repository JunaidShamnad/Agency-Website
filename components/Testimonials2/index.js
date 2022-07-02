import data from "./TestimonialData";
import {
  Section,
  Container,
  LeftContainer,
  LeftContainerContent,
  RightContainer,
  TestimonialFirstContent,
  Testimonial,
  TestimonialAvatar,
  TestimonialAvatarImage,
  TestimonialAvatarName,
  TestimonialDescription,
  TesimonialSecondContent,
  LeftContainerTitle,
  LeftContainerMainHeading,
  LeftContainerButton
  
} from "./Testimonials.styled";

function index() {
  return (
    <>
      <Section>
        <Container>
          <LeftContainer>
            <LeftContainerContent>
              <LeftContainerTitle>Over 5 million</LeftContainerTitle>
              <LeftContainerMainHeading>Proffesionals Worldwide Trust Us</LeftContainerMainHeading>
              <LeftContainerButton>See more Testimonials</LeftContainerButton>
            </LeftContainerContent>
          </LeftContainer>
          <RightContainer>
            <TestimonialFirstContent>
            
              <Testimonial className="AboveContainer">
                <TestimonialAvatar>
                  <TestimonialAvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbiUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                  <TestimonialAvatarName>Demo</TestimonialAvatarName>
                </TestimonialAvatar>
                <TestimonialDescription> ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator </TestimonialDescription>
              </Testimonial>
              <Testimonial className="AboveContainer">
                <TestimonialAvatar>
                  <TestimonialAvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbiUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                  <TestimonialAvatarName>Demo</TestimonialAvatarName>
                </TestimonialAvatar>
                <TestimonialDescription> ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator </TestimonialDescription>
              </Testimonial>
              <Testimonial className="AboveContainer">
                <TestimonialAvatar>
                  <TestimonialAvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbiUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                  <TestimonialAvatarName>Demo</TestimonialAvatarName>
                </TestimonialAvatar>
                <TestimonialDescription> ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator </TestimonialDescription>
              </Testimonial>
              
            </TestimonialFirstContent>
            <TesimonialSecondContent>

            <Testimonial className="BelowContainer">
                <TestimonialAvatar>
                  <TestimonialAvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbiUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                  <TestimonialAvatarName>Demo</TestimonialAvatarName>
                </TestimonialAvatar>
                <TestimonialDescription> ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator </TestimonialDescription>
              </Testimonial>
              <Testimonial className="BelowContainer">
                <TestimonialAvatar>
                  <TestimonialAvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbiUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                  <TestimonialAvatarName>Demo</TestimonialAvatarName>
                </TestimonialAvatar>
                <TestimonialDescription> ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator </TestimonialDescription>
              </Testimonial>
              <Testimonial className="BelowContainer">
                <TestimonialAvatar>
                  <TestimonialAvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbiUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                  <TestimonialAvatarName>Demo</TestimonialAvatarName>
                </TestimonialAvatar>
                <TestimonialDescription> ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator Lorem ipsum is a text generator </TestimonialDescription>
              </Testimonial>
            
            </TesimonialSecondContent>
          </RightContainer>
        </Container>
      </Section>
    </>
  );
}

export default index;
