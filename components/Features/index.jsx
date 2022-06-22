import {
  Container,
  Button,
  LeftSection,
  Form,
  RightSection,
  Feature,
  LeftSideHeading,
  Icon,
  FeatureTitle,
  FeatureDescription,
  LeftSectionParagraph,
  Span,
  Input,
  ParagraphSpan,
  SectionOne,
  AboveContainer,
  AboveContainerHeading,
  SectionOneDetails,
  SectionOneDetailsHead,
  SectionOneDetailsDescription,
  SectionOneImage,
  SectionOneImageDate,
  SectionOneImageImg,
  SectionTwo,
  BelowConatiner,
  SectionTwoImage,
  SectionTwoImageImg,
  SectionTwoDetails,
  SectionTwoDetail,
  SectionTwoContent,
  SectionTwoIndex,
  SectionTwoContentHead,
  SectionTwoContentDescription,
} from "./Features.styled";

const Features = () => {
  return (
    <>
      <Container>
        <AboveContainer>
          <AboveContainerHeading>
            Create <br/>presence in digital
          </AboveContainerHeading>

          <SectionOne>

            <SectionOneImage>
              <SectionOneImageDate>Since 2021</SectionOneImageDate>
              <SectionOneImageImg src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </SectionOneImage>

            <SectionOneDetails>
              <SectionOneDetailsHead>Years Of Experience</SectionOneDetailsHead>

              <SectionOneDetailsDescription>
                We turn great ideas into brilliant realities Got one?Lets talk.
              </SectionOneDetailsDescription>

              <SectionOneDetailsDescription>
                Our passion for impactful creative and more meaningful
                connections remains.
              </SectionOneDetailsDescription>
            </SectionOneDetails>
          </SectionOne>

          <SectionTwo>
            <SectionTwoImage>
              <SectionOneImageImg src="https://images.unsplash.com/flagged/photo-1569144654912-5f146d08b98b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            </SectionTwoImage>

            <SectionTwoDetails>
              <SectionTwoDetail>
                <SectionTwoIndex>01</SectionTwoIndex>
                <SectionTwoContent>
                  <SectionTwoContentHead>CASE STUDY</SectionTwoContentHead>
                  <SectionTwoContentDescription>
                    Everyone who worked at LeadR of committed to a share
                  </SectionTwoContentDescription>
                </SectionTwoContent>
              </SectionTwoDetail>

              <SectionTwoDetail>
                <SectionTwoIndex>02</SectionTwoIndex>
                <SectionTwoContent>
                  
                  <SectionTwoContent>
                    <SectionTwoContentHead>CASE STUDY</SectionTwoContentHead>
                    <SectionTwoContentDescription>
                      Everyone who worked at LeadR of committed to a share
                    </SectionTwoContentDescription>
                  </SectionTwoContent>
                </SectionTwoContent>
              </SectionTwoDetail>

              <SectionTwoDetail>
                <SectionTwoIndex>03</SectionTwoIndex>
                <SectionTwoContent>
                  <SectionTwoContent>
                    <SectionTwoContentHead>CASE STUDY</SectionTwoContentHead>
                    <SectionTwoContentDescription>
                      Everyone who worked at LeadR of committed to a share
                    </SectionTwoContentDescription>
                  </SectionTwoContent>
                </SectionTwoContent>
              </SectionTwoDetail>
            </SectionTwoDetails>
          </SectionTwo>
    
  {/* -------------------------------error code ---------------------------*/}
        </AboveContainer>
        <BelowConatiner>
          <LeftSection>
            <LeftSideHeading>
              <Span>Core values</Span>we always live by
            </LeftSideHeading>
            <LeftSectionParagraph>
              <strong> Dont missed it </strong>We will regularly update about
              our latest project and availability.
            </LeftSectionParagraph>
            <Form action="">
              <Input
                type="email"
                name=""
                id=""
                placeholder="your email please"
              />
              <Button type="submit">Subscribe</Button>
            </Form>
          </LeftSection>
          <RightSection>
            <Feature>
              <Icon></Icon>
              <FeatureTitle>Pixel Perfection</FeatureTitle>
              <FeatureDescription>
                With high dedication, our designs are always perfectly to the
                applied container which also pixel
              </FeatureDescription>
            </Feature>
            <Feature>
              <Icon></Icon>
              <FeatureTitle>Consistent Deadline</FeatureTitle>
              <FeatureDescription>
                We always update our design by daily basis.It is better if we
                know whats the problem faster
              </FeatureDescription>
            </Feature>
            <Feature>
              <Icon></Icon>
              <FeatureTitle>Updated Style</FeatureTitle>
              <FeatureDescription>
                with highly competent desginers will always update about the
                most recent design style
              </FeatureDescription>
            </Feature>
            <Feature>
              <Icon></Icon>
              <FeatureTitle>Transparency</FeatureTitle>
              <FeatureDescription>
                Keeping the relationship between us and the client as clear as
                possible to achieve clients goals
              </FeatureDescription>
            </Feature>
          </RightSection>
        </BelowConatiner>
      </Container>
    </>
  );
};

export default Features;
