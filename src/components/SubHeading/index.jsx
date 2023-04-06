import React from "react";
import { SecHeading, SubHeadingWrapper } from "./styles";

const SubHeading = ({ className, secHeadingText }) => {
  return (
    <SubHeadingWrapper className={className}>
      <SecHeading>{secHeadingText}</SecHeading>
    </SubHeadingWrapper>
  );
};

export default SubHeading;
