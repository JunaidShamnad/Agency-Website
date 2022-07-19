import FaqLayout from "./faqLayout";
import data from '../../data/faqData';

const FAQS = () => {
  return (

    <FaqLayout id="faq">
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
