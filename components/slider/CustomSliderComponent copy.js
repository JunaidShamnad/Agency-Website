import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Container, Section, SliderWrapper } from "./Slider.styled";

const Slider = ({ children, speed = 0.3, onSlideChange = () => {} }) => {
  const [transformItem, setTransformItem] = useState(0);
  const [index, setIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);

  const childrenArray = React.Children.toArray(children);

  if (childrenArray.length === 0) return null; // Return null if no children are passed

  const CLONED_CHILDREN = [
    React.cloneElement(childrenArray[childrenArray.length - 1]),
    ...childrenArray,
    React.cloneElement(childrenArray[0]),
  ];

  const centerItem = (newIndex) => {
    const containerWidth = ref.current.offsetWidth;
    const item = ref.current.children[newIndex];

    if (!item) return;

    const itemWidth = item.offsetWidth;
    const offsetLeft = item.offsetLeft;
    const transformValue = -(offsetLeft - (containerWidth - itemWidth) / 2);

    setTransformItem(transformValue);
    setIndex(newIndex);

    const realIndex =
      newIndex > 0 && newIndex < CLONED_CHILDREN.length - 1
        ? newIndex - 1
        : null;

    onSlideChange(realIndex);
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const nextIndex = index + 1;

    centerItem(nextIndex);

    if (nextIndex === ref.current.children.length - 1) {
      setTimeout(() => {
        centerItem(1);
      }, speed * 1000);
    }

    setTimeout(() => setIsAnimating(false), speed * 1000);
  };

  const handlePrevious = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const prevIndex = index - 1;

    centerItem(prevIndex);

    if (prevIndex === 0) {
      setTimeout(() => {
        centerItem(ref.current.children.length - 2);
      }, speed * 1000);
    }

    setTimeout(() => setIsAnimating(false), speed * 1000);
  };
  useEffect(() => {
    centerItem(1);
  }, []);


  return (
    <div>
      <button onClick={handlePrevious} disabled={isAnimating}>
        Previous
      </button>
      <button onClick={handleNext} disabled={isAnimating}>
        Next
      </button>
      <Container>
        <Section
          style={{
            transform: `translateX(${transformItem}px)`,
          }}
          ref={ref}
        >
          {CLONED_CHILDREN.map((child, idx) => (
            <SliderWrapper key={idx}>{child}</SliderWrapper>
          ))}
        </Section>
      </Container>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
  onSlideChange: PropTypes.func,
};

export default Slider;