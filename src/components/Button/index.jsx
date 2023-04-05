import React from "react";
import { StyledButton } from "./styles";

const Button = ({ text, variant, className }) => {
  return (
    <StyledButton className={className} variant={variant}>
      {text}
    </StyledButton>
  );
};

export default Button;
