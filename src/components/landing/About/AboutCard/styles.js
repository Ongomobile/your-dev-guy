import styled from "styled-components"

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;

  @media (max-width: 1280px) {
    margin-left: 0;
    margin-right: 0;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
`

export const Icon = styled.img``

export const Details = styled.p`
  font-size: 20px;
  color: rgba(42, 48, 55, 0.7);
`

export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: #2a3037;
  margin-left: 15px;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`
