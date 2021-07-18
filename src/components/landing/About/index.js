import React from "react"
import { Wrapper, AboutHeadline, Subheadline, ImageWrapper, CardsWrapper, BtnWrapper } from "./styles"
import { Container } from "components/common"
import { AboutCard } from "./AboutCard"
import { StaticImage } from "gatsby-plugin-image"
import { ScheduleCallBtn } from "components/common"
import search from "../../../assets/icons/Search-icon.svg"
import satisfaction from "../../../assets/icons/Satisfaction-icon.svg"
import heart from "../../../assets/icons/Heart-icon.svg"
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
        <AboutCard
          icon={search}
          title={"Attention To Detail"}
          details={
            "Accessibility is always in the design process. Iterating over designs finding the best consistency, contrast, messaging and many other details makes an impressive design."
          }
          alt={"The details are important to me"}
        />
        <AboutCard
          icon={satisfaction}
          title={"Satisfaction Guaranteed"}
          details={
            "Listening to your concerns is critical. I want you to be totally happy with the service I provide. I don’t expect you to pay, not even 1 cent, unless you’re satisfied."
          }
          alt={"Your satisfaction important to me"}
        />
        <AboutCard
          icon={heart}
          title={"I Care About You!"}
          details={
            "I care about what you think. I try my best to offer you the best service I can. I have a Vested Interest in your happiness, with the service I provide. Happy customers tell their friends."
          }
          alt={"You are important to me"}
        />
      </CardsWrapper>
      <BtnWrapper>
        <ScheduleCallBtn url={myUrl} />
      </BtnWrapper>
    </Wrapper>
  )
}
