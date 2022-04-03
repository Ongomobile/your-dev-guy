import React from 'react'
import { Container } from 'components/common'
import { Wrapper, SkillsWrapper, SkillsHeadline, BtnWrapper } from './styles'
import steps from '../../../data/steps'
import { SkillsCard } from './SkillsCard'
import { ScheduleCallBtn } from 'components/common'

export const Skills = () => {
  const myUrl = 'https://calendly.com/mike_haslam'
  const wobble = false
  return (
    <Wrapper as={Container} id='skills'>
      <SkillsHeadline>3 Step Plan For Customer Engagement</SkillsHeadline>
      <SkillsWrapper>
        {steps.map((step) => (
          <SkillsCard
            key={step.id}
            num={step.num}
            icon={step.icon}
            title={step.title}
            copyText={step.copy}
            altText={step.altText}
          />
        ))}
      </SkillsWrapper>
      <BtnWrapper>
        <ScheduleCallBtn url={myUrl} wobble={wobble} />
      </BtnWrapper>
    </Wrapper>
  )
}
