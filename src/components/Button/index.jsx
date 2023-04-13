import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children, variant, ...args }) => {
  return (
    <StyledButton variant={variant} {...args}>
      {children}
    </StyledButton>
  );
};

export default Button;
