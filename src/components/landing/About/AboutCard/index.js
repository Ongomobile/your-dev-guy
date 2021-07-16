import React from "react"
import { TitleWrapper, Icon, CardWrapper, CardTitle, Details } from "./styles"

export const AboutCard = ({ icon, title, details, alt }) => {
  return (
    <CardWrapper>
      <TitleWrapper>
        <Icon src={icon} alt={alt} />
        <CardTitle>{title}</CardTitle>
      </TitleWrapper>
      <Details>{details}</Details>
    </CardWrapper>
  )
}
