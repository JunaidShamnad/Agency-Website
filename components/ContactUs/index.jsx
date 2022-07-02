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
  MailIcon,
  LocationIcon,
} from "./ContactUs.styled";


const ContactUs = () => {
  return (
    <>
      <Container>
        <LeftSection>
          <TitleContact>
          Lets Discus Your Project
          </TitleContact>
          <ContactDetails>
            <Contact>
              <DetailIcons><MailIcon/></DetailIcons>
              <Detail>
                <DetailTitle>Email</DetailTitle>
                <DetailDescription>admin@intelpik.com</DetailDescription>
              </Detail>
            </Contact>
            <Contact>
              <DetailIcons><LocationIcon/></DetailIcons>
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
          <ContactLinkImage src="https://images.unsplash.com/photo-1656358828391-fac84b7db711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" alt=""/>
        </RightSection>
      </Container>
    </>
  );
};

export default ContactUs;
