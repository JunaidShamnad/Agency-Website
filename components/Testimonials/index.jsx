import {
  Heading,
  TestimonialsDesigination,
  TestimonialsName,
  TestimonialsContent,
  TestimonialsImg,
  TestimonialsImage,
  LowerTestimonial,
  TestimonialsIcons,
  TestimonialsDescription,
  TestimonialDescription,
  TestimonialsTitle,
  UpperTestimonial,
  Container,
  Span,
  SpanTitle,
  TestimonialContentSection
} from "./Testimonials.styled";

import testimonials from './testimonials.png'


const Testimonials = () => {
  return (
    <>
      <Container>
        <UpperTestimonial>
          <TestimonialsTitle>
            <SpanTitle>Testimonial</SpanTitle>Clients Kind Word
          </TestimonialsTitle>

          <TestimonialsDescription>
            <Span> ―</Span>We help ambition business like your generate more
            profits by building owerness, driving web traffic, connecting with
            customers and growing overall sales
          </TestimonialsDescription>

          <TestimonialsIcons></TestimonialsIcons>
        </UpperTestimonial>

        <LowerTestimonial>

          <TestimonialsImage>
            <div>
            </div>
            <TestimonialsImg src={testimonials} alt="Testimonial Avatar"/>
          </TestimonialsImage>

          <TestimonialContentSection>
            
          <TestimonialsContent>
            <TestimonialDescription><strong>Ive Been Working</strong> With Casey Exclusively Since 2014 And It Has Been Great! He Works Fast And Consistently Delivers High-Quality Work. He Takes My Vision And Translates It Into A <strong>Professional Design</strong> That Functions For My Business Goals. Ive Really Appreciated How Hes Always Focused On The Function Of The Piece As Well As The <strong>Visual Design.</strong></TestimonialDescription>

            <TestimonialsName>Musthafa Rahman</TestimonialsName>
            <TestimonialsDesigination>― CEO, Toggle</TestimonialsDesigination>

          </TestimonialsContent>
          </TestimonialContentSection>

        </LowerTestimonial>

      </Container>
    </>
  );
};

export default Testimonials;
