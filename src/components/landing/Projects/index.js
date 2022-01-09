import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'components/common'
import { Wrapper, ProjectsWrapper, ProjectHeadline } from './styles'
import { ProjectCard } from './ProjectCard'
import { useStaticQuery, graphql } from 'gatsby'
import projects from '../../../data/projectData'

export const Projects = () => {
  const images = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            gatsbyImageData(
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return (
    <Wrapper as={Container} id='work'>
      <ProjectHeadline>Recent Projects</ProjectHeadline>
      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            img={images.allImageSharp.edges[project.imgNum].node}
            codeUrl={project.codeUrl}
            siteUrl={project.siteUrl}
            projectText={project.projectText}
          />
        ))}
      </ProjectsWrapper>
    </Wrapper>
  )
}
//fix
