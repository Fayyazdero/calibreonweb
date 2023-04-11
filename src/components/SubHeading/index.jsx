import React from "react";
import { SecHeading, SubHeadingWrapper } from "./styles";

const SubHeading = ({ className, secHeadingText, color }) => {
  return (
    <SubHeadingWrapper className={className}>
      <SecHeading color={color}>{secHeadingText}</SecHeading>
    </SubHeadingWrapper>
  );
};

export default SubHeading;
