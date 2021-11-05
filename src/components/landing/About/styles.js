import styled from "styled-components"

export const AboutImg = styled.img``

export const Wrapper = styled.div`
  padding-top: 180px;
`
export const AboutHeadline = styled.h2`
  font-size: 35px;
  font-weight: 600;
  color: rgba(42, 48, 55, 0.8);
  margin-bottom: 80px;

  @media (max-width: 540px) {
    font-size: 25px;
  }
`
export const Subheadline = styled.h3`
  font-weight: 500;
  font-size: 28px;
  color: rgba(42, 48, 55, 0.7);
`

export const ImageWrapper = styled.div`
  margin-bottom: 20px;
`

export const CardsWrapper = styled.div`
  margin-left: -20px;
  margin-bottom: 13px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-direction: column;
    max-width: 680px;
    margin-left: 0;
  }
`
export const TestimonialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-bottom: 50px;

  @media (max-width: 1280px) {
    flex-direction: column;
    max-width: 680px;
    margin-left: 0;
  }
`
export const TestimonialCard = styled.div`
  padding: 40px 20px 17px;
  width: 32%;
  display: flex;
  flex-direction: column;
  background-color: #e3eefd;
  border-radius: 0px 40px;
  margin-bottom: 40px;

  @media (max-width: 1280px) {
    width: 85%;
    margin-bottom: 30px;
  }

  @media (max-width: 540px) {
    width: 98%;
  }
`
export const TestimonialText = styled.p`
  font-size: 20px;
  color: rgba(42, 48, 55, 0.8);
`
export const TestimonialAuthor = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #2a3037;
`
export const BtnWrapper = styled.div``
