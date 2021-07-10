import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import "./styles.css"

export const ProjectCard = ({ img }) => {
  return (
    <Accordion className="accordian">
      <Card className="projectCard">
        <Accordion.Toggle className="toggle" variant="link" eventKey="0">
          <Image className="image-style" src={img} />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}
