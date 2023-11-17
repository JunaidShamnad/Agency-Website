import React, { useRef } from 'react'
import data from './TestimonialData'
import { ArrowDiv, Avatar, Container, CustomNextArrow, CustomPrevArrow, MobileArrowDiv, Review, Reviewer, ReviewerDetails, ReviewerPosition, Section, StarDiv, TestimonialDiv, TestimonialHeader, Testimonials } from './Testimonial.styled'
//import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { theme } from '../Theme'
import { IconContext } from "react-icons";
import { AiFillStar } from 'react-icons/ai'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1, 
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    };


    const sliderRef = useRef(null);

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };
    return (
        <Section>
            <Container>
                <StarDiv aria-label="5 out of 5 stars" role="img">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </StarDiv>
                <TestimonialHeader>
                    Loved by Clients
                    <ArrowDiv>
                        <BsFillArrowLeftCircleFill onClick={handlePrev}  aria-label="Previous testimonial"
          role="button"></BsFillArrowLeftCircleFill>
                        <BsFillArrowRightCircleFill onClick={handleNext} aria-label="Next testimonial"
          role="button"></BsFillArrowRightCircleFill>
                    </ArrowDiv>
                </TestimonialHeader>
                <Testimonials>
                    <Slider {...settings} ref={sliderRef}>
                        {data.map((obj) => (
                            <div key={obj.key}>
                            <TestimonialDiv>
                                <Review>
                                    &quot;&nbsp;{obj.Descriptions}&nbsp;&quot;
                                </Review>
                                <ReviewerDetails>
                                    <Avatar src={obj.Image} alt={`${obj.Name}'s profile picture`}></Avatar>
                                    <div>
                                        <Reviewer>{obj.Name}</Reviewer>
                                        <ReviewerPosition>{obj.position}</ReviewerPosition>
                                    </div>
                                </ReviewerDetails>

                            </TestimonialDiv>
                            </div>
                        ))}
                    </Slider>
                </Testimonials>
                <MobileArrowDiv>
                    <IconContext.Provider value={{size: 40.8 }}>
                        <BsFillArrowLeftCircleFill onClick={handlePrev}></BsFillArrowLeftCircleFill>
                        <BsFillArrowRightCircleFill onClick={handleNext}></BsFillArrowRightCircleFill>
                    </IconContext.Provider>
                </MobileArrowDiv>
            </Container>
        </Section>
    )
}

export default Testimonial