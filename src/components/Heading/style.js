import styled from "styled-components";

export const StyledHeading = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: ${(props) => props.fontSize + "px"};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "83px"};
  color: #4d4d4d;
  &.mt-41 {
    margin-top: 41px;
  }
  &.text-align {
    text-align: center;
  }
  ${(props) =>
    props.column === true &&
    `
    display:flex;
    flex-direction:column;
  `}
`;
export const ColouredHeading = styled.span`
  color: #f05b25;
`;
