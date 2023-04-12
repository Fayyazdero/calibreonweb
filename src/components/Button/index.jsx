import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children, variant, className, ...args }) => {
  return (
    <StyledButton className={className} variant={variant} {...args}>
      {children}
    </StyledButton>
  );
};

export default Button;
