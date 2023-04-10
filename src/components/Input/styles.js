import { FormGroup } from "react-bootstrap";
import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledInput = styled(FormGroup)`
  border: none;
  width: 100%;
  & input {
    border: none;
    border-bottom: 2px solid #f05b25;
    border-radius: 0;
    margin: 0 8px;

    &:focus {
      border-bottom: 2px solid #f05b25;
      box-shadow: none;
    }
  }
`;
