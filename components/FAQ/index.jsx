import {
  Heading,
  Faq,
  FaqsSection,
  Container,
  LeftSection,
  RightSection,
  FaqIndex,
  FaqQuestion,
  FaqAnswer,
  Icon,
  Section,
} from "./FAQ.styled";
import FaqLayout from "./faqLayout";
import data from '../../data/faqData';

const FAQS = () => {
  return (
    // <Section>
    //   <Container>


    //     <FaqsSection>

    //       <LeftSection>

    //         <Faq>
    //           <FaqQuestion>Services can also be a more stable</FaqQuestion>
    //           <FaqAnswer>
    //             Table source of profits, as they tend not to be as exposed to
    //             fluctuating bussiness
    //           </FaqAnswer>
    //         </Faq>

    //       </LeftSection>

    //       <RightSection>
    //         <Icon>-</Icon>
    //       </RightSection>

    //     </FaqsSection>
        

    //   </Container>
    // </Section>

    <FaqLayout>
      <FaqLayout.Header>Frequently Asked Questions</FaqLayout.Header>
      {data.map((faqData)=>(
        <FaqLayout.Entity key={faqData.id}>
          <FaqLayout.Question>{faqData.question}</FaqLayout.Question>
          <FaqLayout.Answer>{faqData.answer}</FaqLayout.Answer>
        </FaqLayout.Entity>
      ))}
    </FaqLayout>
  );
};

export default FAQS;
