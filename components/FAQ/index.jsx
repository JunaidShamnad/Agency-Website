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
} from "./FAQ.styled";

const FAQS = () => {
  return (
    <>
      <Container>
        <FaqsSection>
          <LeftSection>
            <Faq>
              <FaqIndex>01</FaqIndex>
              <FaqQuestion>Services can also be a more stable</FaqQuestion>
              <FaqAnswer>
                Table source of profits, as they tend not to be as exposed to
                fluctuating bussiness
              </FaqAnswer>
            </Faq>
          </LeftSection>
          <RightSection>
            <Icon>-</Icon>
          </RightSection>
        </FaqsSection>
        <FaqsSection>
          <LeftSection>
            <Faq>
              <FaqIndex>02</FaqIndex>
              <FaqQuestion>
                It brings together the notion of a product
              </FaqQuestion>
              <FaqAnswer>
                Table source of profits, as they tend not to be as exposed to
                fluctuating bussiness
              </FaqAnswer>
            </Faq>
          </LeftSection>
          <RightSection>
            <Icon>-</Icon>
          </RightSection>
        </FaqsSection>
        <FaqsSection>
          <LeftSection>
            <Faq>
              <FaqIndex>03</FaqIndex>
              <FaqQuestion>Selling your existing products</FaqQuestion>
              <FaqAnswer>
                Table source of profits, as they tend not to be as exposed to
                fluctuating bussiness
              </FaqAnswer>
            </Faq>
          </LeftSection>
          <RightSection>
            <Icon>-</Icon>
          </RightSection>
        </FaqsSection>
      </Container>
    </>
  );
};

export default FAQS;
