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
} from "./Services.styled";

const Services = () => {
  return (
    <Section id="services">
      <Container>

        <ServiceContent>

          <ServiceDetails>


            <ServicesText>

              <ServiceHeading>
                Services We Offer
              </ServiceHeading>

              <ServiceDescription>
                <HorizontalLine>―</HorizontalLine>Let&apos;s create a fully integrated digital product to solve your problem
              </ServiceDescription>

            </ServicesText>


            {/* <ServiceNavImage></ServiceNavImage> */}
          </ServiceDetails>


          <ServiceList>

            <Service>

              <ServiceTextMainContainer>
              <ServiceIndex>01/</ServiceIndex>
              <ServiceTitle>
                Web Development
              </ServiceTitle>
              </ServiceTextMainContainer>
              <ServiceLinkContainer>
              <ServiceLink>Explore</ServiceLink><ArrowIcon/>
              </ServiceLinkContainer>

            </Service>

            <Service>
            <ServiceTextMainContainer>
              <ServiceIndex>02/</ServiceIndex>
              <ServiceTitle>
               App Development
              </ServiceTitle>
              </ServiceTextMainContainer>
              <ServiceLinkContainer>
              <ServiceLink>Explore</ServiceLink><ArrowIcon/>
              </ServiceLinkContainer>
            </Service>

            <Service>
            <ServiceTextMainContainer>
              <ServiceIndex>03/</ServiceIndex>
              <ServiceTitle>
                Brand Design
              </ServiceTitle>
              </ServiceTextMainContainer>
              <ServiceLinkContainer>
              <ServiceLink>Explore</ServiceLink><ArrowIcon/>
              </ServiceLinkContainer>
            </Service>
            
          </ServiceList>

        </ServiceContent>

      </Container>
    </Section>
  );
};

export default Services;
