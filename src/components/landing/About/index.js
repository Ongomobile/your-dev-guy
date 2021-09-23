import React from "react"
import {
  Wrapper,
  AboutHeadline,
  Subheadline,
  ImageWrapper,
  CardsWrapper,
  TestimonialWrapper,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  BtnWrapper,
} from "./styles"
import { Container } from "components/common"
import { AboutCard } from "./AboutCard"
import { StaticImage } from "gatsby-plugin-image"
import { ScheduleCallBtn } from "components/common"
import search from "../../../assets/icons/Search-icon.svg"
import satisfaction from "../../../assets/icons/Satisfaction-icon.svg"
import heart from "../../../assets/icons/Heart-icon.svg"
export const About = () => {
  const myUrl = "https://calendly.com/mike_haslam"
  const wobble = true
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
            "Accessibility is always in the design process. Iterating over designs, finding the best consistency, contrast, messaging and many other details makes an impressive design."
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
            "I care about what you think. I try my best to offer you the best service I can. I have a vested Interest in your happiness, with the service I provide. Happy customers tell their friends."
          }
          alt={"You are important to me"}
        />
      </CardsWrapper>
      <AboutHeadline>Testimonials</AboutHeadline>
      <TestimonialWrapper>
        <TestimonialCard>
          <TestimonialText>
            Mike is a great guy who puts all their efforts in getting the job done with fantastic results. He never
            gives up, and if he doesn't know how to do something he will move the earth to find out and solve it.
          </TestimonialText>
          <TestimonialAuthor>
            Bruno Saez Lopez<br></br> UX Designer
          </TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>
            Mike has been very supportive and great at helping to problem solve issues I was having with an app I'm been
            building. I highly recommend Mike as he is super responsive,easygoing and fun to work with!
          </TestimonialText>
          <TestimonialAuthor>
            R.J. Schodowski<br></br> Application Developer
          </TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>
            Mike helped us with a new web design. He always made us feel like we were on the same team. We knew we had
            made the right decision in choosing mike to re-brand our business. He went above and beyond.
          </TestimonialText>
          <TestimonialAuthor>
            Lora Spicer<br></br> Oceanfront Hacienda
          </TestimonialAuthor>
        </TestimonialCard>
      </TestimonialWrapper>
      <BtnWrapper>
        <ScheduleCallBtn url={myUrl} wobble={wobble} />
      </BtnWrapper>
    </Wrapper>
  )
}
