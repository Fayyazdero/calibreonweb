import React from "react";
import { ColouredHeading, StyledHeading } from "./style";

export const Heading = ({ title, variant, children, ...rest }) => {
  return (
    <StyledHeading variant={variant} {...rest}>
      {children}
      <ColouredHeading>{title}</ColouredHeading>
    </StyledHeading>
  );
};
