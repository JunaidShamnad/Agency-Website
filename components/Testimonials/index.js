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
import { AnimatePresence, usePresence } from "framer-motion";
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

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent, safeToRemove]);

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
                      <SliderTitle>Loved by Clients</SliderTitle>
                      <AnimatePresence exitBeforeEnter>
                        <SliderContent
                          key={slide.Name}
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <SliderReview>
                            &quot;&nbsp;{slide.Descriptions}&nbsp;&quot;
                          </SliderReview>
                          <SliderReviewer>{slide.Name}</SliderReviewer>
                        </SliderContent>
                      </AnimatePresence>
                      <SliderIconContainer>
                        <PrevArrow onClick={prevSlide} />
                        <NextArrow onClick={nextSlide} />
                      </SliderIconContainer>
                    </SliderLeft>
                    <AnimatePresence exitBeforeEnter>
                      <SliderRight
                        key={slide.Name}
                        layout
                        // initial={{ opacity: 0, scale: 0.5, x: 500 }}
                        // animate={{
                        //   opacity: 1,
                        //   scale: 1,
                        //   x: 0,
                        // }}
                        // transition={{
                        //   duration: 0.5,
                        //   ease: "easeInOut",
                        //   type: "spring",
                        //   stiffness: 200,
                        //   damping: 15,
                        // }}
                        // exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1}}
                      >
                        <SliderImage src={slide.Image} alt="Image" />
                      </SliderRight>
                    </AnimatePresence>
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
