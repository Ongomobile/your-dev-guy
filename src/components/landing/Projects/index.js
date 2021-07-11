import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "components/common"
import { Wrapper, ProjectsWrapper } from "./styles"
import { ProjectCard } from "./ProjectCard"
import projects from "../../../data/projectData"

export const Projects = () => {
  return (
    <Wrapper as={Container} id="work">
      <h1>Projects</h1>
      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            img={project.img}
            codeUrl={project.codeUrl}
            siteUrl={project.siteUrl}
            projectText={project.projectText}
          />
        ))}
      </ProjectsWrapper>
    </Wrapper>
  )
}
