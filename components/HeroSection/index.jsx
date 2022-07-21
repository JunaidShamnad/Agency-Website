import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import {
  Hero,
  HeroDescription,
  HeroButtons,
  ImageContainer,
  Image,
  ImageBelow,
  Container,
  Section,
  HeaderButton,
  HeaderMobileImage,
  Heading,
} from "./HeroSection.styled";
import styled from "styled-components";
import Link from "next/link";

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: 0;
  font-family: "Archivo Black", sans-serif;
  font-weight: 800;
  font-size: 150px;
  line-height: 190px;
  letter-spacing: 1.2px;
  word-wrap: break-word;
  word-spacing: 1px;
`;

const HeroSection = () => {
  // const control = useAnimation();
  // const [ref, inView] = useInView();
  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   }
  // }, [control, inView]);

  // const titleVariant = {
  //   visible: { opacity: 1, scale: 1,transition: { duration: 1 } },
  //   hidden: { opacity: 0, scale: 0  },
  // };

  const text = "Build,Grow and Manage Your Brand"; // This would normally be passed into this component as a prop!

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.40em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <Section id="hero-section">
      <Container>
        <Hero>
          <Heading>Build,Grow and Manage your Brand</Heading>

          <HeroDescription>
            Make brand identities from scratch and help big brands stay mighty
          </HeroDescription>

          <HeroButtons>
            <Link href="#contact-form" passHref><a><HeaderButton>Lets Talk</HeaderButton></a></Link>
          </HeroButtons>

          <ImageContainer>
            <HeaderMobileImage></HeaderMobileImage>
            <Image
              alt="image"
              src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <ImageBelow
              alt="image"
              src="https://images.unsplash.com/photo-1543269665-7821011040ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <Image
              alt="image"
              src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG9mZmljZSUyMHBlb3BsZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
            />
          </ImageContainer>
        </Hero>
      </Container>
    </Section>
  );
};

export default HeroSection;
