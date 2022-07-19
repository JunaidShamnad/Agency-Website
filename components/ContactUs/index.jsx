import {
  Section,
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
  ContactForm,
  LocationIcon,
  EmailInput,
  NameInput,
  ServiceInput,
  GetaQuote,
  Form,
  ScheduleP,
  TermsCheckbox,
  SubmitForm,
  CheckboxTitle,
  Checkbox
} from "./ContactUs.styled";


const ContactUs = () => {
  return (
    <Section>
      <Container  id="contact-us">
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
          <Form >
            <GetaQuote>Get a quote</GetaQuote>
            <ScheduleP>Schedule an Appointment</ScheduleP>
            <ContactForm>Hey, my name is <NameInput type="text" placeholder="Type Here"/>and I&apos;m looking for <ServiceInput type="search" placeholder="Search Services"/>Ping me up at <EmailInput type="email" placeholder="Your Email Address"/>!</ContactForm>
            <TermsCheckbox>
              <Checkbox type="checkbox" required/>
              <CheckboxTitle>I have accepted all the terms and conditions</CheckboxTitle>
            </TermsCheckbox>
            <SubmitForm type="Submit">Send Enquiry</SubmitForm>
          </Form>
        </RightSection>
      </Container>
    </Section>
  );
};

export default ContactUs;
