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
          <ContactLinkImage />
        </RightSection>
      </Container>
    </>
  );
};

export default ContactUs;
