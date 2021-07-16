import styled from "styled-components"

export const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  border-radius: 3px;
  padding: 10px 20px;
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

  &:hover {
    color: #2d65ac;
    background: #fff;
    text-decoration: none;
    border: 1px solid #2d65ac;
  }

  &:disabled {
    background: gray;
  }

  ${({ wobble }) =>
    wobble &&
    `
    animation: wobble 10s ease-in-out;
    @keyframes wobble {
      0% { transform: translateX(0%); }
      15% { transform: translateX(-25%) rotate(-5deg); }
      30% { transform: translateX(20%) rotate(3deg); }
      45% { transform: translateX(-15%) rotate(-3deg); }
      60% { transform: translateX(10%) rotate(2deg); }
      75% { transform: translateX(-5%) rotate(-1deg); }
      100% { transform: translateX(0%); }
   }
    `}

  ${({ secondary }) =>
    secondary &&
    `
    left: 556px;
    top: 43px;
    color: #2D65AC;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    background: #FFFFFF;
    border: 1px solid #2D65AC;
    box-sizing: border-box;
    border-radius: 4px;

    &:hover {
    color: #fff;
    background: #2d65ac;
    text-decoration: none;
    border: 1px solid #2d65ac;
   }
	`}

  ${({ hidden }) =>
    hidden &&
    `
    display:none;
  `}
`
