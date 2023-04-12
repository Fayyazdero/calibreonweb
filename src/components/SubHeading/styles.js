import styled from "styled-components";

export const SubHeadingWrapper = styled.div`
  border-bottom: 3px solid #f05b25;
  width: 250px;
  height: fit-content;
`;

export const SecHeading = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 39px;
  line-height: 48px;
  color: ${(props) => (props.color ? props.color : "#f05b25")};
  margin: 0;
`;
