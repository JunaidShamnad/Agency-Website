import React, { useEffect, useRef, useState } from "react";
import { Container, Section, SliderBox } from "./Slider.styled";

function CustomSliderComponent() {
  const [transformItem, setTransformItem] = useState(0); 
  const [index, setIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const SLIDER_ITEMS = [1, 2, 3, 4, 5]; 
  const CLONED_ITEMS = [
    SLIDER_ITEMS[SLIDER_ITEMS.length - 1],
    ...SLIDER_ITEMS,
    SLIDER_ITEMS[0], 
  ];
  useEffect(() => {
    centerItem(1); 
  }, []);
  function centerItem(newIndex) {
    const containerWidth = ref.current.offsetWidth; 
    const children = ref.current.children;
    const item = children[newIndex];
    if (!item) return; 
    const itemWidth = item.offsetWidth;
    const offsetLeft = item.offsetLeft;
    const transformValue = -(offsetLeft - (containerWidth - itemWidth) / 2);
    setTransformItem(transformValue);
    setIndex(newIndex);
  }
  function handleNext() {
    if (isAnimating) return; 
    setIsAnimating(true);
    const nextIndex = index + 1;
    centerItem(nextIndex);
    if (nextIndex === ref.current.children.length - 1) {
      setTimeout(() => {
        centerItem(1); 
      }, 300); 
    }
    setTimeout(() => setIsAnimating(false), 300); 
  }
  function handlePrevious() {
    if (isAnimating) return; 
    setIsAnimating(true);
    const prevIndex = index - 1;
    centerItem(prevIndex);
    if (prevIndex === 0) {
      setTimeout(() => {
        centerItem(ref.current.children.length - 2); 
      }, 300); 
    }
    setTimeout(() => setIsAnimating(false), 300);
  }
  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <Container>
        <Section
          style={{
            transform: `translateX(${transformItem}px)`,
            transition: isAnimating ? "transform 0.3s ease-in-out" : "none",
          }}
          ref={ref}
        >
          {CLONED_ITEMS.map((item, idx) => (
            <SliderBox key={idx}>{item}</SliderBox>
          ))}
        </Section>
      </Container>
    </div>
  );
}

export default CustomSliderComponent;
