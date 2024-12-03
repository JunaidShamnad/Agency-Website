import React from "react";
import Slider from "./CustomSliderComponent";
import CustomSliderComponent from "./CustomSliderComponent";

const TestimonialSlider = () => {
  const handleSlideChange = (currentIndex) => {
    console.log("Current Slide:", currentIndex);
  };

  return (
    <Slider speed={0.5} onSlideChange={handleSlideChange}>
      <div style={{ background: "#f00", padding: "50px", color: "#fff" }}>Slide 1</div>
      <div style={{ background: "#0f0", padding: "50px", color: "#fff" }}>Slide 2</div>
      <div style={{ background: "#00f", padding: "50px", color: "#fff" }}>Slide 3</div>
      <div style={{ background: "#ff0", padding: "50px", color: "#000" }}>Slide 4</div>
      <div style={{ background: "#f0f", padding: "50px", color: "#fff" }}>Slide 5</div>
    </Slider>
  );
};

export default TestimonialSlider;

