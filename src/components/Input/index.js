import { Form } from "react-bootstrap";
import Button from "../Button";
import { InputWrapper, StyledInput } from "./styles";

const Input = ({
  type,
  placeholder,
  formBtnText,
  variant,
  className,
  ...rest
}) => {
  return (
    <Form className={className} {...rest}>
      <InputWrapper>
        <StyledInput controlId="formBasicEmail">
          <Form.Control type={type} placeholder={placeholder} />
        </StyledInput>
        <Button className="mx-4" children={formBtnText} variant={variant} />
      </InputWrapper>
    </Form>
  );
};

export default Input;
