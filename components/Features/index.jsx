import React from 'react'
import { BeginButton, Container, Left, LeftCaption, LeftDescription, LeftHeader, LeftHeading, LeftImg, LeftImgDiv, Numbers, Right, RightParagraph, RightSections, Section } from './Features.styled'
import Link from 'next/link'

function Features() {
  return (
    <Section>
        <Container>
            <Left>
                <LeftHeader>
                <LeftCaption>Why Us</LeftCaption>
                <LeftHeading>Still unsure?</LeftHeading>
                <LeftDescription>Here are 3 reasons you should partner with us!</LeftDescription>
                </LeftHeader>
                   

            </Left>
            <LeftImg >
            <Link href="#contact-form" passHref><BeginButton>Let&apos;s Begin</BeginButton></Link>
                    </LeftImg>
            <Right>
                <RightSections>
                    <Numbers>
                        <h2>100%</h2>
                        <p>Happy Clients</p>
                    </Numbers>
                    <RightParagraph>
                        We are proud to have a 100% satisfaction rating from our clients.
                    </RightParagraph>
                </RightSections>
                <RightSections>
                    <Numbers>
                        <h2>78%</h2>
                        <p>Increase in Leads</p>
                    </Numbers>
                    <RightParagraph>
                        Our clients have seen an average of 78% increase in leads within 6 months of working with us.
                    </RightParagraph>
                </RightSections>
                <RightSections>
                    <Numbers>
                        <h2>3x</h2>
                        <p>Growth for Clients</p>
                    </Numbers>
                    <RightParagraph>
                        Our clients have seen an average of 3x growth in traffic, leads, and sales after working with us.
                    </RightParagraph>
                </RightSections>
            </Right>
        </Container>
    </Section>
  )
}

export default Features