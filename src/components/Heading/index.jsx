import React from "react";
import { ColouredHeading, StyledHeading, SubHeadingWrapper } from "./style";

export const Heading = ({
  title,
  variant = "subHeading",
  className,
  children,
  color,
  ...rest
}) => {
  if (variant === "subHeading") {
    return (
      <SubHeadingWrapper variant={variant} {...rest}>
        <ColouredHeading color={color}>{title}</ColouredHeading>
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
