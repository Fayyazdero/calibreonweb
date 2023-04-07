import React from "react";
import { SecHeading, SubHeadingWrapper } from "./styles";

const SubHeading = ({ className, secHeadingText, color }) => {
  return (
    <SubHeadingWrapper className={className} color={color}>
      <SecHeading>{secHeadingText}</SecHeading>
    </SubHeadingWrapper>
  );
};

export default SubHeading;
