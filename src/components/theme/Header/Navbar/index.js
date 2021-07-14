import React, { useContext } from "react"
import { Link } from "gatsby"
import { ThemeContext } from "providers/ThemeProvider"
import { Container, ScheduleCallBtn } from "components/common"
import NavbarLinks from "../NavbarLinks"
import { Wrapper, Brand } from "./styles"
import { Logo } from "../Logo"

const Navbar = () => {
  const { theme } = useContext(ThemeContext)
  const myUrl = "https://calendly.com/mike_haslam"
  const wobble = true

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        <Logo />
      </Brand>
      <NavbarLinks desktop />
      <ScheduleCallBtn wobble={wobble} url={myUrl} />
    </Wrapper>
  )
}

export default Navbar
