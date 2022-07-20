import dataOne, { dataTwo } from "./TestimonialData";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import {
  Section,
  Container,
  LeftContainer,
  LeftContainerContent,
  RightContainer,
  TestimonialFirstContent,
  Testimonial,
  TestimonialAvatar,
  TestimonialAvatarImage,
  TestimonialAvatarName,
  TestimonialDescription,
  TesimonialSecondContent,
  LeftContainerTitle,
  LeftContainerMainHeading,
  LeftContainerButton,
} from "./Testimonials.styled";

function Testimonials() {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce:true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const upAnimation = {
    hidden: {
      opacity: 1,
      y: `5rem`,
    },
    visible: {
      opacity: 0,
      y: `-70rem`,
      transition: {
        // duration:8,
        repeat: Infinity,
        repeatType: "loop",
        ease: [0.2, 0.65, 0.3, 0.9],
        y: { type: "spring", stiffness:2 },
        default: { duration: 10 },
      },
    },
  };

  const downAnimation = {
    hidden: {
      opacity: 1,
      y: `-5rem`,
    },
    visible: {
      opacity: 0,
      y: `70rem`,
      transition: {
        // duration:8,
        ease: [0.2, 0.65, 0.3, 0.9],
        y: { type: "spring", stiffness: 2, mass: 0.5 },
        default: { duration: 10 },
      },
      transitionEnd: { display: "none" }
    },
  };



  return (
    <>
      <Section id="testimonials">
        <Container>
          <LeftContainer>
            <LeftContainerContent>
              <LeftContainerTitle>Over 5 million</LeftContainerTitle>
              <LeftContainerMainHeading>
                Proffesionals Worldwide Trust Us
              </LeftContainerMainHeading>
              <LeftContainerButton>See more Testimonials</LeftContainerButton>
            </LeftContainerContent>
          </LeftContainer>
          <RightContainer>
            <TestimonialFirstContent layout>
              {dataOne.map((item, index) => (
                <Testimonial
                  key={index}
                  ref={ref}
                  aria-hidden="true"
                  initial="hidden"
                  animate={ctrls}
                  variants={upAnimation}
                >
                  <TestimonialAvatar>
                    <TestimonialAvatarImage src={item.Image} />
                    <TestimonialAvatarName>{item.Name}</TestimonialAvatarName>
                  </TestimonialAvatar>
                  <TestimonialDescription>
                    {item.Descriptions}
                  </TestimonialDescription>
                </Testimonial>
              ))}
            </TestimonialFirstContent>

            <TesimonialSecondContent>
              {dataTwo.map((item, index) => (
                <Testimonial key={index}
                ref={ref}
                aria-hidden="true"
                initial="hidden"
                animate={ctrls}
                variants={downAnimation}>
                  <TestimonialAvatar>
                    <TestimonialAvatarImage src={item.Image} />
                    <TestimonialAvatarName>{item.Name}</TestimonialAvatarName>
                  </TestimonialAvatar>
                  <TestimonialDescription>
                    {item.Descriptions}
                  </TestimonialDescription>
                </Testimonial>
              ))}
            </TesimonialSecondContent>
          </RightContainer>
        </Container>
      </Section>
    </>
  );
}

export default Testimonials;
