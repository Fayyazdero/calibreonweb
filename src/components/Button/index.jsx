import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children, padding, variant, ...args }) => {
  console.log(padding, "padd");
  return (
    <StyledButton variant={variant} {...args} padding={padding}>
      {children}
    </StyledButton>
  );
};

export default Button;
