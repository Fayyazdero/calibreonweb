import styled from "styled-components";

export const Text = styled.p`
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #4d4d4d;
  width: ${(props) => props.width + "px"};
`;
