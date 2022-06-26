import React from "react";
import {
  Container,
  FirstIcon,
  Section,
  ValuesLeftBottomWrapper,
  ValuesLeftHeadline,
  ValuesLeftHeadlineItalic,
  ValuesLeftInput,
  ValuesLeftInputButton,
  ValuesLeftInputContainer,
  ValuesLeftParagraph,
  ValuesLeftParagraphBold,
  ValuesLeftSection,
  ValuesParentWrapper,
  ValuesRightCard,
  ValuesRightCardContainer,
  ValuesRightCardDescription,
  ValuesRightTextContiner,
  ValuesRightIconContiner,
  ValuesRightCardTitle,
  ValuesRightSection,
} from "./Values.styled";

const Values = () => {
  return (
    <Section>
      <Container>
        <ValuesParentWrapper>

        <ValuesLeftSection>
          <ValuesLeftHeadline><ValuesLeftHeadlineItalic>Core Values</ValuesLeftHeadlineItalic> we always live by</ValuesLeftHeadline>
          <ValuesLeftBottomWrapper>
            <ValuesLeftParagraph><ValuesLeftParagraphBold>Don&apos;t missed it.</ValuesLeftParagraphBold> We will regularly update about our latest project&apos;s and our availability</ValuesLeftParagraph>
            <ValuesLeftInputContainer>
              <ValuesLeftInput placeholder="Your email"/><ValuesLeftInputButton>Subscribe</ValuesLeftInputButton>
            </ValuesLeftInputContainer>
          </ValuesLeftBottomWrapper>
        </ValuesLeftSection>


          {/* =========================== Values Right Section *start============================== */}
          <ValuesRightSection>
            <ValuesRightCardContainer>
              {/* =========================== Values Right Section Cards *start============================== */}

              {/*-------------------------* 1st Card --------------------------*/}
              <ValuesRightCard>
                <ValuesRightIconContiner>
              <FirstIcon/>
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Pixel Perfection</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                With high dedication, our designs are always perfectly to the applied container which also pixel
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/*-------------------------* 2nd Card --------------------------*/}
              <ValuesRightCard>
              <ValuesRightIconContiner>
              <FirstIcon/>
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Consistent Deadline</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                We always update our design by daily basis.It is better if we know whats the problem faster
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/*-------------------------* 3rd Card --------------------------*/}
              <ValuesRightCard>
              <ValuesRightIconContiner>
              <FirstIcon/>
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Updated Style</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                with highly competent desginers will always update about the most recent design style
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/*-------------------------* 4th Card --------------------------*/}
              <ValuesRightCard>
              <ValuesRightIconContiner>
              <FirstIcon/>
              </ValuesRightIconContiner>
                <ValuesRightTextContiner>
                <ValuesRightCardTitle>Transparency</ValuesRightCardTitle>
                <ValuesRightCardDescription>
                Keeping the relationship between us and the client as clear as possible to achieve clients goals
                </ValuesRightCardDescription>
                </ValuesRightTextContiner>
              </ValuesRightCard>

              {/* =========================== Values Right Section Cards *end============================== */}
            </ValuesRightCardContainer>
          </ValuesRightSection>
          {/* =========================== Values Right Section *end============================== */}
        </ValuesParentWrapper>
      </Container>
    </Section>
  );
};

export default Values;
