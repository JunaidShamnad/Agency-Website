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
