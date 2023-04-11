import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: 400;
  font-size: 15.7812px;
  line-height: 22px;
  padding: 8px 25px;
  &:focus {
    box-shadow: none;
  }
  &.text-black {
    color: black;
  }
  &.add-padding {
    paddingleft: 40px;
    paddingright: 40px;
  }

  ${(props) =>
    props.variant === "outlined" &&
    ` 
    background: #ffffff;
    border: 1px solid #F05B25;
      color: #F05B25;

    &:hover {
      background: #F05B25;

      border: 1px solid #F05B25;
        color: #ffffff;
    }
  `}

  ${(props) =>
    props.variant === "contained" &&
    ` 
    background: #F05B25;

    border: 1px solid #F05B25;
      color: #ffffff;

      &:hover {
        background: #ffffff;
    border: 1px solid #F05B25;
      color: #F05B25;
      }
  `}
  ${(props) =>
    props.variant === "formButton" &&
    ` 
    background: #FFFFFF;
    font-weight:600;
    border: 1px solid #FFFFFF;
      color: #F05B25;
      &:hover {
        background: transparent;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
      }
      &:focus {
       box-shadow:none
      }
  `}
`;
