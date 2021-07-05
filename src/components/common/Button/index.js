import styled from "styled-components"

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 10px 20px;
  /* padding: 0.7rem 2.5rem; */
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #2d65ac;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
    left: 556px;
    top: 43px;
    color: #2D65AC;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    background: #FFFFFF;
    border: 1px solid #2D65AC;
    box-sizing: border-box;
    border-radius: 4px;
	`}

  ${({ hidden }) =>
    hidden &&
    `
    display:none;
  `}
`
