import { StyledInput } from "./styles";

const Input = ({ type, placeholder, className, ...rest }) => {
  return <StyledInput placeholder={placeholder} type={type} {...rest} />;
};

export default Input;
