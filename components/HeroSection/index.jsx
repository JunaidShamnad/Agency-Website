import { motion, useAnimation } from "framer-motion";

import Slider from "react-slick";

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
  Line,
  StarDiv,
  StarImg,
  ShowText,
  PeopleFaces,
  Clients,
  ClientLogo,
} from "./HeroSection.styled";
import styled from "styled-components";
import Link from "next/link";
import ContactUs1 from "../ContactUs/index1";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: 0;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
  font-size: 150px;
  line-height: 190px;
  letter-spacing: 1.2px;
  word-wrap: break-word;
  word-spacing: 1px;
`;

const HeroSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
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
    <>
    <Section id="hero-section">
      <Container>
        <Hero>
          <Heading
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >Innovative Web Solutions for Modern Brands</Heading>

          <HeroDescription
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5,delay:1 }}
          >
            Craft your website with our proffessional web development services 
          </HeroDescription>

          <HeroButtons>
            <Link href="#contact-form" passHref><a><HeaderButton>Lets Talk</HeaderButton></a></Link>
          </HeroButtons>

          <StarDiv>
            <StarImg src="/images/star svg.svg"></StarImg>
            <StarImg src="/images/star svg.svg"></StarImg>
            <StarImg src="/images/star svg.svg"></StarImg>
            <StarImg src="/images/star svg.svg"></StarImg>
            <StarImg src="/images/star svg.svg"></StarImg>
          </StarDiv>
          
          <ShowText>We're not just promising, we're proving.</ShowText>
          
          <PeopleFaces src="/images/peopleFacesCopy.png"></PeopleFaces>

        </Hero>
        <ContactUs1 />
      </Container>
      

    </Section>
    <Clients>
        <Slider {...settings}>
          <ClientLogo src="/images/CLIENTS/Client1.svg" />
          <ClientLogo src="/images/CLIENTS/Client2.svg" />
          <ClientLogo src="/images/CLIENTS/Client03.svg" />
          <ClientLogo src="/images/CLIENTS/Client04.svg" />
          <ClientLogo src="/images/CLIENTS/Client05.svg" />
          <ClientLogo src="/images/CLIENTS/Client06.svg" />
          <ClientLogo src="/images/CLIENTS/Client07.svg" />
          <ClientLogo src="/images/CLIENTS/Client08.svg" />
        </Slider>
      </Clients>
    </>
  );
};

export default HeroSection;
