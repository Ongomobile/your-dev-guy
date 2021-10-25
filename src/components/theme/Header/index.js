import React, { useState } from "react"
import Navbar from "./Navbar"
import Hamburger from "./Hamburger"
import Sidebar from "./Sidebar"
import { Wrapper } from "./styles"

export const Header = () => {
  const [sidebar, toggle] = useState(false)

  return (
    <Wrapper>
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  )
}
