import React, { useContext } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { ThemeContext } from "providers/ThemeProvider"
import { Wrapper } from "./styles"

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#work">Projects</AnchorLink>
      <AnchorLink href="#skills">Learn More</AnchorLink>
    </Wrapper>
  )
}

export default NavbarLinks
