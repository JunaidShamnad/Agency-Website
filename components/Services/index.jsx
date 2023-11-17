import Link from "next/link";
import { motion } from "framer-motion";
import {
  ServiceContent,
  ServicesText,
  ServiceNavImage,
  ServiceHeading,
  ServiceList,
  ServiceDetails,
  HorizontalLine,
  Span,
  ServiceTitle,
  ServiceLink,
  Service,
  ServiceIndex,
  ServiceDescription,
  Section,
  Container,
  ServiceLinkContainer,
  ServiceTextMainContainer,
  ArrowIcon,
  ServiceImage,
  WhatWeDo,
  ServiceHeader,
  ServiceHeadingDiv,
  ContactButton,
} from "./Services.styled";

const Services = () => {
  return (
    <Section id="services">
      <Container>
        <ServiceHeader>
          <WhatWeDo>What We do</WhatWeDo>
          <ServiceHeadingDiv>
            <ServiceHeading>Services We Offer</ServiceHeading>
            <Link href='#contact-us'>
             <ContactButton>Contact Us</ContactButton>
            </Link>
          </ServiceHeadingDiv>
        </ServiceHeader>

        <ServiceContent>
          <ServiceList>

            <Service
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.5}}
              viewport={{ once: true}}
            >
              <ServiceImage
               alt="Web Development Icon"
                initial={{ opacity: 0 ,x:-130}}
                whileInView={{ opacity: 1,x:0 }}
                transition={{duration:0.7,delay:0.8}}
                viewport={{ once: true}}
                src="/images/website development.svg"></ServiceImage>
           
                <ServiceTitle>
                  Web Development
                </ServiceTitle>
              
              <ServiceDetails>
              Get the most out of web development and grow your business.
              </ServiceDetails>
              

            </Service>

            <Service
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.6}}
              viewport={{ once: true}}
            >
              <ServiceImage
              alt="App Development Icon"
                initial={{ opacity: 0 ,x:-130}}
                              whileInView={{ opacity: 1,x:0 }}
                              transition={{duration:0.7,delay:0.8}}
                              viewport={{ once: true}}
                src="/images/app development.svg"></ServiceImage>
              
                <ServiceTitle>
                  App Development
                </ServiceTitle>
              
              <ServiceDetails>
                Mobile app development solutions that help you reach your target audience.
              </ServiceDetails>             
              
            </Service>

            <Service
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:0.7}}
              viewport={{ once: true}}
            >
              <ServiceImage
              alt="Digital Marketing Icon"
                initial={{ opacity: 0 ,x:-130}}
                whileInView={{ opacity: 1,x:0 }}
                transition={{duration:0.7,delay:0.8}}
                viewport={{ once: true}}
                src="/images/digital marketing.svg"></ServiceImage>
              
                <ServiceTitle>
                Digital Marketing
                </ServiceTitle>
              
              <ServiceDetails>
                <p>Strategic Digital Marketing Solutions for Business Growth</p>   
              </ServiceDetails>
              
            </Service>

          </ServiceList>

        </ServiceContent>

      </Container>
    </Section>
  );
};

export default Services;
