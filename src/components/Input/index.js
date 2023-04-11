import { Form, InputGroup } from "react-bootstrap";
import Button from "../Button";
import { InputWrapper, StyledInput } from "./styles";

const Input = ({
  type,
  placeholder,
  formBtnText,
  variant,
  showBtn,
  className,
  borderBottom,
  width,
  textColor,
  placeholderTextColor,
  mLeft,
}) => {
  if (type === "checkbox") return <InputGroup.Checkbox />;
  return (
    <Form className={className}>
      <InputWrapper mLeft={mLeft}>
        <StyledInput
          controlId="formBasicEmail"
          borderBottom={borderBottom}
          width={width}
          placeholderTextColor={placeholderTextColor}
          textColor={textColor}
        >
          <Form.Control type={type} placeholder={placeholder} />
        </StyledInput>
        {showBtn ? (
          <Button className="mx-4" text={formBtnText} variant={variant} />
        ) : null}
      </InputWrapper>
    </Form>
  );
};

export default Input;
