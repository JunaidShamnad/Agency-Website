import React, { useState, createContext, useContext } from "react";
import {
  Container,
  Faq,
  FaqAnswer,
  FaqHeader,
  FaqQuestion,
  FaqsSection,
  LeftSection,
  MinusIcon,
  PlusIcon,
  Section,
} from "./FAQ.styled";

const QuestionContext = createContext();

const FaqLayout = ({ children, ...restProps }) => {
  return (
    <Section {...restProps}>
      <Container>{children}</Container>
    </Section>
  );
};

FaqLayout.Header = function FaqLayoutHeader({ children, ...restProps }) {
  return <FaqHeader {...restProps}>{children}</FaqHeader>;
};

FaqLayout.Entity = function FaqLayoutEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <FaqsSection {...restProps}>
        <LeftSection>
          <Faq>{children}</Faq>
        </LeftSection>
      </FaqsSection>
    </QuestionContext.Provider>
  );
};

FaqLayout.Question = function FaqLayoutQuestion({ children, ...restProps }) {
  const { open, setOpen } = useContext(QuestionContext);

  return (
    <FaqQuestion onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
      {open ? <MinusIcon /> : <PlusIcon />}
    </FaqQuestion>
  );
};

FaqLayout.Answer = function FaqLayoutAnswer({ children, ...restProps }) {
  const { open } = useContext(QuestionContext);
  return open ? <FaqAnswer {...restProps}>{children}</FaqAnswer> : null;
};

export default FaqLayout;
