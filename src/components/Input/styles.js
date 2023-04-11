import { FormGroup } from "react-bootstrap";
import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-left: ${({ mLeft }) => (mLeft ? `${mLeft}px` : "")};
`;

export const StyledInput = styled(FormGroup)`
  border: none;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  & input {
    color: ${({ textColor }) =>
      textColor ? `${textColor} !important` : "black"};
    border: none;
    border-bottom: ${({ borderBottom }) =>
      borderBottom ? "2px solid #FFFF " : " 2px solid #f05b25"};
    border-radius: 0;
    background: transparent;
    &:active {
      background: transparent;
    }
    &:focus {
      border-bottom: ${({ borderBottom }) =>
        borderBottom ? "2px solid #FFFF " : "2px solid #f05b25"};
      box-shadow: none;
      background: transparent;
    }
    ::placeholder {
      color: ${({ placeholderTextColor }) =>
        placeholderTextColor ? placeholderTextColor : "#999999"};
    }
  }
`;
