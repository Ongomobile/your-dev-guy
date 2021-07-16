import React from "react"
import { StepCard, StepNum, IconWrapper, Icon, Summary, Title } from "./styles"

export const SkillsCard = ({ num, icon, title, copyText, altText }) => {
  return (
    <StepCard>
      <StepNum>{num}</StepNum>
      <IconWrapper>
        <Icon src={icon} alt={altText} />
      </IconWrapper>
      <Title>{title}</Title>
      <Summary>{copyText}</Summary>
    </StepCard>
  )
}
