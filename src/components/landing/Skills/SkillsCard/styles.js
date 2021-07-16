import styled from "styled-components"
export const StepCard = styled.div`
  padding: 20px;
  width: 32%;
  height: auto;
  background-color: #e3eefd;
  border-radius: 0px 40px;

  @media (max-width: 1280px) {
    width: 85%;
    height: auto;
    margin-bottom: 30px;
  }

  @media (max-width: 540px) {
    width: 98%;
  }
`
export const StepNum = styled.h4`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 30px;
  color: rgba(42, 48, 55, 0.8);
`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
export const Icon = styled.img`
  height: 125px;
`

export const Summary = styled.p`
  font-weight: normal;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
`

export const Title = styled.h3`
  font-weight: 600;
  font-size: 25px;
  color: #2a3037;
`
