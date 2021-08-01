import React, { useContext } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { ThemeContext } from "providers/ThemeProvider"
import { Header } from "components/theme"
import { Container, Button, ScheduleCallBtn } from "components/common"
import buildApp from "assets/illustrations/buildApp.png"
import { Wrapper, IntroWrapper, Details, Thumbnail, CtaBtnsWrapper } from "./styles"

export const Intro = () => {
  const { theme } = useContext(ThemeContext)
  const myUrl = "https://calendly.com/mike_haslam"
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Developer Handyman</h1>
          <h2>
            I can help you <br />
            Launch more projects <br />
            So more customers are happy
          </h2>
          <CtaBtnsWrapper>
            <Button secondary as={AnchorLink} href="#skills">
              Learn more
            </Button>
            <ScheduleCallBtn url={myUrl} />
          </CtaBtnsWrapper>
        </Details>
        <Thumbnail>
          <img src={buildApp} alt="I’m mike and I’m a frontend engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
