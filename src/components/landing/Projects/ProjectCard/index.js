import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import "./styles.css"
import { ProjectTitle, ViewBtnWrapper, ViewBtn, BtnImg, BtnText, ProjectText } from "../styles"
import computerIcon from "assets/icons/Computer-icon.svg"
import githubIcon from "assets/icons/Github-icon.svg"

export const ProjectCard = ({ img, title, codeUrl, siteUrl, projectText, alt }) => {
  return (
    <Accordion className="accordian">
      <Card className="projectCard">
        <Accordion.Toggle className="toggle" variant="link" eventKey="0">
          <Image className="image-style" src={img} alt={title} />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ProjectTitle>{title}</ProjectTitle>
            <ViewBtnWrapper>
              <ViewBtn href={siteUrl} target="_blank">
                <BtnImg src={computerIcon} alt="Computer icon in button" />
                <BtnText>View Site</BtnText>
              </ViewBtn>
              <ViewBtn href={codeUrl} target="_blank">
                <BtnImg src={githubIcon} alt="Computer icon in button" />
                <BtnText>View Code</BtnText>
              </ViewBtn>
            </ViewBtnWrapper>
            <ProjectText>{projectText}</ProjectText>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}
