import { Form } from "react-bootstrap";
import Button from "../Button";
import { InputWrapper, StyledInput } from "./styles";

const Input = ({ type, placeholder, formBtnText }) => {
  return (
    <Form>
      <InputWrapper>
        <StyledInput controlId="formBasicEmail">
          <Form.Control type={type} placeholder={placeholder} />
        </StyledInput>
        <Button text={formBtnText} />
      </InputWrapper>
    </Form>
  );
};

export default Input;
