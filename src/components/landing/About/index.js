import React from "react"
import { Wrapper, AboutHeadline, Subheadline, ImageWrapper, CardsWrapper, BtnWrapper } from "./styles"
import { Container } from "components/common"
import { AboutCard } from "./AboutCard"
import { StaticImage } from "gatsby-plugin-image"
import data from "../../../data/aboutData"
import { ScheduleCallBtn } from "components/common"

export const About = () => {
  const myUrl = "https://calendly.com/mike_haslam"
  return (
    <Wrapper as={Container} id="about">
      <ImageWrapper>
        <StaticImage src="../../../images/My-pic.jpg" width={200} height={200} alt="Hi Im mike I am your dev guy" />
      </ImageWrapper>
      <AboutHeadline>Hi I’m Mike, I Want To Be Your Dev Guy</AboutHeadline>
      <Subheadline>Why Hire Me?</Subheadline>
      <CardsWrapper>
        {data.map((item) => (
          <AboutCard key={item.id} icon={item.icon} title={item.title} details={item.details} alt={item.altText} />
        ))}
      </CardsWrapper>
      <BtnWrapper>
        <ScheduleCallBtn url={myUrl} />
      </BtnWrapper>
    </Wrapper>
  )
}
