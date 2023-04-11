import React from "react";
import { ColouredHeading, StyledHeading } from "./style";

export const Heading = ({
  className,
  heading,
  styledHeading,
  fontSize,
  lineHeight,
  column,
}) => {
  return (
    <>
      <StyledHeading
        className={className}
        fontSize={fontSize}
        lineHeight={lineHeight}
        column={column}
      >
        {heading}
        <ColouredHeading>{styledHeading}</ColouredHeading>
      </StyledHeading>
    </>
  );
};
