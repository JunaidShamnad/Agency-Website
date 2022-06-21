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
} from "./Services.styled";

const Services = () => {
  return (
    <ServiceContent>
      <ServiceDetails>
        <ServicesText>
          <ServiceHeading>
            <Span>Service</Span>
            Services I Offer
          </ServiceHeading>
          <ServiceDescription>
            <HorizontalLine>―</HorizontalLine>We help ambitious business like
            your generate more profits by building owerness, driving, web
            traffic, connecting with customers and growing overall sales.
          </ServiceDescription>
        </ServicesText>
        <ServiceNavImage></ServiceNavImage>
      </ServiceDetails>
      <ServiceList>
        <Service>
          <ServiceIndex>01/</ServiceIndex>
          <ServiceTitle>
            Web UI/UX Design<ServiceLink>Explore</ServiceLink>
          </ServiceTitle>
        </Service>
        <Service>
          <ServiceIndex>02/</ServiceIndex>
          <ServiceTitle>
            Mobile App UI/ UX Design<ServiceLink>Explore</ServiceLink>
          </ServiceTitle>
        </Service>
        <Service>
          <ServiceIndex>03/</ServiceIndex>
          <ServiceTitle>
            Dashboard & Saas Design<ServiceLink>Explore</ServiceLink>
          </ServiceTitle>
        </Service>
      </ServiceList>
    </ServiceContent>
  );
};

export default Services;
