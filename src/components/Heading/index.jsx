import React from "react";
import { ColouredHeading, StyledHeading, SubHeadingWrapper } from "./style";

export const Heading = ({
  title,
  variant = "subHeading",
  children,
  ...rest
}) => {
  if (variant === "subHeading") {
    return (
      <SubHeadingWrapper {...rest}>
        <ColouredHeading variant={variant}>{title}</ColouredHeading>
      </SubHeadingWrapper>
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
