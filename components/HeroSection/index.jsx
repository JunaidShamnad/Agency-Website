import { motion, useAnimation } from "framer-motion";

import Slider from "react-slick";

import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
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
  ClientSection,
  ClientsContainer,
  ClientLogoDiv,
} from "./HeroSection.styled";
import styled from "styled-components";
import Link from "next/link";
import ContactUs1 from "../ContactUs/index1";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from "../Theme";

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
 // const inputRef = useRef(null)
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.smallestMobile, // Change this to your desired breakpoint
        settings: {
          slidesToShow: 2, // Adjust the number of slides to show at this breakpoint
        },
      },
      {
        breakpoint: theme.breakpoints.tablet, // Change this to your desired breakpoint
        settings: {
          slidesToShow: 3, // Adjust the number of slides to show at this breakpoint
        },
      },
      {
        breakpoint: theme.breakpoints.laptop, // Change this to your desired breakpoint
        settings: {
          slidesToShow: 4, // Adjust the number of slides to show at this breakpoint
        },
      },
      // Add more responsive breakpoints as needed
    ],
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
            >We Build Solutions, Not Just Websites</Heading>

            <HeroDescription
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              We build solutions that get results, not just a pretty website
            </HeroDescription>

            
              <Link href="#heroContact" passHref><a><HeaderButton onClick={()=>inputRef.current.focus()}>Lets Talk</HeaderButton></a></Link>
            

            <StarDiv role="img" aria-label="5 out of 5 stars">
              <StarImg src="/images/star svg.svg" alt="" aria-hidden="true"></StarImg>
              <StarImg src="/images/star svg.svg" alt="" aria-hidden="true"></StarImg>
              <StarImg src="/images/star svg.svg" alt="" aria-hidden="true"></StarImg>
              <StarImg src="/images/star svg.svg" alt="" aria-hidden="true"></StarImg>
              <StarImg src="/images/star svg.svg" alt="" aria-hidden="true"></StarImg>
            </StarDiv>

            <ShowText>We&apos;re not just promising, we&apos;re proving.</ShowText>

            <PeopleFaces src="/images/clients-intelpik.png" alt="clients prfoile images"></PeopleFaces>

          </Hero>
          <ContactUs1 />
        </Container>


      </Section>
      <ClientSection>
        <ClientsContainer>
          <Slider {...settings}>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/Client1.svg" alt="Innovgrab logo" tabIndex={-1}/>
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client2.svg" alt="Dowl logo" tabIndex={-1}/>
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client03.svg" alt="Hitoq logo" tabIndex={-1}/>
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client04.svg" alt="Bellkare logo" tabIndex={-1}/>
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client05.svg" alt="Aadiveda logo" tabIndex={-1}/>
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/Client06.svg" alt="Neocart logo" tabIndex={-1}/>
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client07.svg" alt="Neha group logo" tabIndex={-1}/>
            </ClientLogoDiv>
            <ClientLogoDiv aria-hidden="true">
              <ClientLogo src="/images/CLIENTS/client08.svg" alt="Neotech logo" tabIndex={-1}/>
            </ClientLogoDiv>


          </Slider>
        </ClientsContainer>
      </ClientSection>
    </>
  );
};

export default HeroSection;
