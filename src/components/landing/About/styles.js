import styled from "styled-components"

export const AboutImg = styled.img``

export const Wrapper = styled.div`
  padding-top: 180px;
`
export const AboutHeadline = styled.h2`
  font-size: 35px;
  font-weight: 600;
  color: rgba(42, 48, 55, 0.8);

  @media (max-width: 540px) {
    font-size: 25px;
  }
`
export const Subheadline = styled.h3`
  font-weight: 500;
  font-size: 28px;
  color: rgba(42, 48, 55, 0.7);
`

export const ImageWrapper = styled.div``

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: 1280px) {
    flex-direction: column;
    max-width: 680px;
  }
`
export const BtnWrapper = styled.div`
  margin-left: 18px;
`
