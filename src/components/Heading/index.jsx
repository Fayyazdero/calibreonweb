import React from "react";
import { ColouredHeading, StyledHeading } from "./style";

export const Heading = ({ className, heading, styledHeading, fontSize }) => {
  return (
    <>
      <StyledHeading className={className} fontSize={fontSize}>
        {heading}
        <ColouredHeading>{styledHeading}</ColouredHeading>
      </StyledHeading>
    </>
  );
};
