import styled from "styled-components"

export const Wrapper = styled.div`
  padding-top: 180px;
`
export const SkillsHeadline = styled.h2`
  font-size: 35px;
  font-weight: 600;
  color: rgba(42, 48, 55, 0.8);

  @media (max-width: 540px) {
    font-size: 25px;
  }
`
export const SkillsWrapper = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 540px) {
    align-items: center;
  }
`
export const BtnWrapper = styled.div`
  margin-top: 50px;
  margin-left: 18px;
`
