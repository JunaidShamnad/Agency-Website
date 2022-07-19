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
                <HorizontalLine>―</HorizontalLine>We help ambitious business
                like your generate more profits by building owerness, driving,
                web traffic, connecting with customers and growing overall
                sales.
              </ServiceDescription>

            </ServicesText>


            {/* <ServiceNavImage></ServiceNavImage> */}
          </ServiceDetails>


          <ServiceList>

            <Service>

              <ServiceTextMainContainer>
              <ServiceIndex>01/</ServiceIndex>
              <ServiceTitle>
                Web UI/UX Design
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
                Mobile App UI/ UX Design
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
                Dashboard and Saas Design
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
