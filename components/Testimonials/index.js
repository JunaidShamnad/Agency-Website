import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  NextArrow,
  PrevArrow,
  Section,
  Slider,
  SliderContainer,
  SliderContent,
  SliderIconContainer,
  SliderImage,
  SliderLeft,
  SliderReview,
  SliderReviewer,
  SliderRight,
  SliderTitle,
} from "./Testimonials.styled";
import slides from "./TestimonialData";

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <>
      <Section>
        <Container>
          <SliderContainer>
            {slides.map((slide, index) => (
              <Slider key={index}>
                {index === current && (
                  <>
                    <SliderLeft>
                      <SliderTitle>Happiness Testimonial</SliderTitle>
                      <SliderContent>
                        <SliderReview>&quot;&nbsp;{slide.Descriptions}&nbsp;&quot;</SliderReview>
                        <SliderReviewer>{slide.Name}</SliderReviewer>
                      </SliderContent>
                      <SliderIconContainer>
                        <PrevArrow onClick={prevSlide} />
                        <NextArrow onClick={nextSlide} />
                      </SliderIconContainer>
                    </SliderLeft>
                    <SliderRight>
                      <SliderImage src={slide.Image} alt="Image" />
                    </SliderRight>
                  </>
                )}
              </Slider>
            ))}
          </SliderContainer>
        </Container>
      </Section>
    </>
  );
}

export default Testimonials;
