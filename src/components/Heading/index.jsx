import React from "react";
import { ColouredHeading, StyledHeading, SubHeadingWrapper } from "./style";

export const Heading = ({ title, variant, children, ...rest }) => {
  if (variant === "subHeading") {
    return (
      <SubHeadingWrapper>
        <StyledHeading variant={variant} {...rest}>
          {children}
          <ColouredHeading>{title}</ColouredHeading>
        </StyledHeading>
      </SubHeadingWrapper>
    );
  } else if (variant === "pageHeading") {
    return (
      <StyledHeading variant={variant} {...rest}>
        {children}
        <ColouredHeading>{title}</ColouredHeading>
      </StyledHeading>
    );
  } else {
    return (
      <StyledHeading variant={variant} {...rest}>
        {children}
        <ColouredHeading>{title}</ColouredHeading>
      </StyledHeading>
    );
  }
};
