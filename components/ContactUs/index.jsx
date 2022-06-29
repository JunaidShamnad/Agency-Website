import {
  Container,
  Detail,
  DetailIcons,
  ContactLinkImage,
  DetailDescription,
  DetailTitle,
  LeftSection,
  RightSection,
  Span,
  Contact,
  ContactDetails,
  Title,
  TitleContact,
} from "./ContactUs.styled";

const ContactUs = () => {
  return (
    <>
      <Container>
        <LeftSection>
          <TitleContact>
            <Span>Contact</Span>Lets Discus Your Project
          </TitleContact>
          <ContactDetails>
            <Contact>
              <DetailIcons></DetailIcons>
              <Detail>
                <DetailTitle>Email</DetailTitle>
                <DetailDescription>admin@intelpik.com</DetailDescription>
              </Detail>
            </Contact>
            <Contact>
              <DetailIcons></DetailIcons>
              <Detail>
                <DetailTitle>Location</DetailTitle>
                <DetailDescription>
                  Kerala, India
                </DetailDescription>
              </Detail>
            </Contact>
          </ContactDetails>
        </LeftSection>
        <RightSection>
          <ContactLinkImage src="https://images.unsplash.com/photo-1656275035513-e1d2f094b034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        </RightSection>
      </Container>
    </>
  );
};

export default ContactUs;
