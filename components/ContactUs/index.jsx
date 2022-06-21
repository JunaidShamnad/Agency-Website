import { Container,Detail,DetailIcons,LeftSection,RightSection,Span,Contact,ContactDetails,Title } from "./ContactUs.styled"


const ContactUs = () => {
    return (
      <>
      <Container>
        <LeftSection>
          <Title><Span>Contact</Span>Lets Discus Your Project</Title>
          <ContactDetails>
            <Contact>
              <DetailIcons></DetailIcons>
              <Detail>
                <DetailTitle>Email</DetailTitle>
                <DetailDescription>admin@intelpik.com</DetailDescription>
              </Detail>
            </Contact>
            <Contact>
              <DetailIcons><DetialIcons>
                <Detail>
                  <DetailTitle>Location</DetailTitle>
                  <DetailDescription>loreum ipsum is a text generator </DetailDescription>
                </Detail>
            </Contact>
          </ContactDetails>
        </LeftSection>
        <RightSection>
          <ContactLinkImage/>
        </RightSection>
      </Container>
      </>
    )
  }
  
  export default ContactUs