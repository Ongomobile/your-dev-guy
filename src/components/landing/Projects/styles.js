import styled from "styled-components"

export const Wrapper = styled.div``

export const ProjectHeadline = styled.h2`
  font-size: 35px;
  font-weight: 600;
  color: rgba(42, 48, 55, 0.8);

  @media (max-width: 540px) {
    font-size: 25px;
  }
`
export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 980px;

  @media (max-width: 540px) {
    justify-content: center;
  }
`
export const ProjectTitle = styled.h3`
  font-size: 23px;
  font-weight: 400;
  color: #2a3037;
  margin-top: 10px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 17px;
    font-weight: 700;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
export const ViewBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 45px;
  margin-top: 10px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`
export const ViewBtn = styled.a`
  display: flex;
  padding-top: 10px;
  padding-left: 15px;
  height: 45px;
  width: 160px;
  background-color: #15589d;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 1024px) {
    width: 300px;
    margin-bottom: 10px;

    &:hover {
      transform: scale(1);
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const BtnImg = styled.img`
  height: 28px;
  width: 28px;
  margin-right: 10px;
`
export const BtnText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: 100;
`
export const ProjectText = styled.p`
  margin-top: 30px;
  font-size: 18px;
  color: #2a3037;
  font-weight: 400;
  opacity: 0.8;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`
