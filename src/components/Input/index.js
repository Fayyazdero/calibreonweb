import { Form } from "react-bootstrap";
import { StyledInput } from "./styles";

const Input = ({ type, placeholder, variant, className, ...rest }) => {
  if (variant === "checkbox") return <Form.Check type="checkbox" {...rest} />;
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      variant={variant}
      className={className}
      {...rest}
    />
  );
};

export default Input;
