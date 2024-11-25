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
  PhoneIcon,
  EmailInput,
  NameInput,
  ServiceInput,
  GetaQuote,
  Form,
  ScheduleP,
  TermsCheckbox,
  SubmitForm,
  CheckboxTitle,
  Checkbox,
  UpperSection,
  BottomSection,
  Dropdowns,
  PhoneInput,
  SocialIcon,
  SocialDiv,
} from "./ContactUs.styled";

import { useState, useEffect } from "react";
import axios from "axios";
import { send } from "emailjs-com";
import Link from "next/link";
const ContactUs = () => {

  const [sender_email, set_sender_email] = useState("");
  const [sender_phone, set_sender_phone] = useState("");
  const [sender_name, set_sender_name] = useState("");
  const Newdate = new Date();
  const date = Newdate.getDate();
  const month = Newdate.getMonth();
  const CurrentMonth = month + 1;
  const year = Newdate.getFullYear();
  const hour = Newdate.getHours();
  const minute = Newdate.getMinutes();
  const [sender_service, set_sender_service] = useState("");
  const [senderDate, setSenderDate] = useState(
    date + "-" + CurrentMonth + "-" + year
  );
  const [check, setCheck] = useState(false);
  const [senderTime, setSenderTime] = useState(hour + ":" + minute);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("")

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_p2zntyf",
      "template_f4vbnzh",
      { sender_name, sender_email, sender_service, senderDate, senderTime },
      "HiwseFxtuDnSuFCo_"
    )
      .then((response) => {
        console.log("message sent succesfully", response.status, response.text);
      })
      .catch((err) => {
        console.log("Failed", err);
      });
    set_sender_name("");
    set_sender_email("");
    set_sender_service("");
    set_sender_phone("");
    setSenderDate("");
    setSenderTime("");
    setService("");
    setEmail("");
    setName("");
    setPhone("");
    setCheck(false);
  };

  const SheetSubmit = (e) => {
    e.preventDefault();
    // console.log(name,email,message)
    const data = {
      Name: sender_name,
      Email: sender_email,
      Phone: sender_phone,
      Service: sender_service,
      Date: senderDate,
      Time: senderTime,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/69f079ba-8f87-4135-a184-a6709080c738",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setPhone("");
        set_sender_name("");
        set_sender_email("");
        set_sender_service("");
        set_sender_phone("");
        setService("");
        set_sender_service("");
        setSenderTime("");
        setSenderDate("");
        setCheck(false);
      });
  };
  const submit = (e) => {
    SheetSubmit(e);
    sendMail(e);
  };
  var Services = [
    "App Development",
    "Web Development",
    "UI/UX Desgin",
    "Web Hosting",
    "SEO ",
  ];
  const options = [
    { key: "angular", text: "Angular", value: "angular" },
    { key: "css", text: "CSS", value: "css" },
    { key: "design", text: "Graphic Design", value: "design" },
    { key: "ember", text: "Ember", value: "ember" },
    { key: "html", text: "HTML", value: "html" },
    { key: "ia", text: "Information Architecture", value: "ia" },
    { key: "javascript", text: "Javascript", value: "javascript" },
    { key: "mech", text: "Mechanical Engineering", value: "mech" },
    { key: "meteor", text: "Meteor", value: "meteor" },
    { key: "node", text: "NodeJS", value: "node" },
    { key: "plumbing", text: "Plumbing", value: "plumbing" },
    { key: "python", text: "Python", value: "python" },
    { key: "rails", text: "Rails", value: "rails" },
    { key: "react", text: "React", value: "react" },
    { key: "repair", text: "Kitchen Repair", value: "repair" },
    { key: "ruby", text: "Ruby", value: "ruby" },
    { key: "ui", text: "UI Design", value: "ui" },
    { key: "ux", text: "User Experience", value: "ux" },
  ];
  const defaultOption = "Select Service";
  return (
    <Section id="contact-us">
      <Container>
        <UpperSection>
          <TitleContact>Lets Discuss Your Project</TitleContact>
        </UpperSection>
        <BottomSection>
          <LeftSection>
            <ContactDetails>
              <Contact>
                <DetailIcons>
                  <MailIcon aria-label="Send us an email"/>
                </DetailIcons>
                <Detail>
                  <DetailTitle>Email</DetailTitle>
                  <Link href="mailto:hello@intelpik.com" passHref>
                    <a aria-label="Send an email to intelpik@gmail.com">
                      {" "}
                      <DetailDescription>hello@intelpik.com</DetailDescription>
                    </a>
                  </Link>
                </Detail>
              </Contact>
              <Contact>
                <DetailIcons>
                  <PhoneIcon aria-label="Call us"/>
                </DetailIcons>
                <Detail>
                  <DetailTitle>Phone</DetailTitle>
                  <Link href="tel:+918590302905" passHref>
                    <a aria-label="Call +91 8590302905">
                      <DetailDescription>+91 8590302905</DetailDescription>
                    </a>
                  </Link>
                </Detail>
              </Contact>
              <Contact>
                <DetailIcons>
                  <SocialIcon aria-label="Follow us on social media"/>
                </DetailIcons>
                <Detail>
                  <DetailTitle>Social</DetailTitle>
                  <SocialDiv>
                  <Link href="https://www.linkedin.com/company/intelpik/" passHref>
                  <a aria-label="Visit Intelpik LinkedIn page" target="_blank" rel="noopener noreferrer">
                      <DetailDescription>LinkedIn</DetailDescription>
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/intelpik.official/" passHref>
                  <a aria-label="Visit Intelpik Instagram page" target="_blank" rel="noopener noreferrer">
                      <DetailDescription>Instagram</DetailDescription>
                    </a>
                  </Link>
                  </SocialDiv>
                </Detail>
                
              </Contact>
            </ContactDetails>
          </LeftSection>
          <RightSection>
            <Form onSubmit={submit} id="contact-form">
              <GetaQuote>Get a quote</GetaQuote>
              {/* <ScheduleP>Schedule an Appointment</ScheduleP> */}
              <ContactForm>
              <label htmlFor="contact-name"> Hey👋my name is</label> &nbsp;
                <NameInput
                 id="contact-name"
                  type="text"
                  value={sender_name}
                  placeholder="&nbsp; Your name"
                  onChange={(e) => {
                    set_sender_name(e.target.value);
                    setName(e.target.value);
                  }}
                  required
                />

                &nbsp;<label htmlFor="contact-service"> and I&apos;m looking for </label>&nbsp;
                <Dropdowns
                  id="contact-service"
                  value={sender_service}
                  placeholder="&nbsp; Select a service"
                  onChange={(e) => {
                    set_sender_service(e.target.value);
                  }}
                  required
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="App Developement">App Development</option>
                </Dropdowns>
                <br />
                <label htmlFor="contact-email">Ping us at 😉</label>&nbsp;
                <EmailInput
                  id="contact-email"
                  type="email"
                  value={sender_email}
                  placeholder="&nbsp; Your Email Address"
                  onChange={(e) => {
                    set_sender_email(e.target.value);
                    setEmail(e.target.value);
                  }}
                  required
                />
                <label htmlFor="contact-phone">Contact number📞</label>&nbsp;
                <PhoneInput
                  id="contact-phone"
                  type="tel"
                  value={sender_phone}
                  placeholder="Your Phone Number"
                  onChange={(e) => {
                    set_sender_phone(e.target.value);
                    setPhone(e.target.value);
                  }}
                  required
                />
              </ContactForm>
              <TermsCheckbox>
                <label  style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  type="checkbox"
                  required
                  onChange={(e) => {
                    setCheck(e.target.checked);
                  }}
                 
                />
                <CheckboxTitle>
                  I have accepted all the terms and conditions
                </CheckboxTitle>
                </label>
              </TermsCheckbox>
              <SubmitForm type="Submit">Send Enquiry</SubmitForm>
            </Form>
          </RightSection>
        </BottomSection>
      </Container>
    </Section>
  );
};

export default ContactUs;
