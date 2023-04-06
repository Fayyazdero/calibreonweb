import React from "react";
import { SecHeading, SectionHeadingWrapper } from "./styles";

const SectionHeading = ({ className, secHeadingText }) => {
  return (
    <SectionHeadingWrapper className={className}>
      <SecHeading>{secHeadingText}</SecHeading>
    </SectionHeadingWrapper>
  );
};

export default SectionHeading;
