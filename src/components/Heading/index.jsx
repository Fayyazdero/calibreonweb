import React from "react";
import { ColouredHeading, StyledHeading } from "./style";

export const Heading = ({ title, variant, children, ...rest }) => {
  console.log(variant, "variant");
  return (
    <StyledHeading variant={variant} {...rest}>
      {children}
      <ColouredHeading>{title}</ColouredHeading>
    </StyledHeading>
  );
};
