import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "components/common"
import { Wrapper } from "./styles"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  return (
    <Wrapper as={Container} id="work">
      <h1>Projects</h1>
      <ProjectCard img="https://res.cloudinary.com/dnpje4e34/image/upload/v1625876463/winProLP_izpzhh.png" />
    </Wrapper>
  )
}
