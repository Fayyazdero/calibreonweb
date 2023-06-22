import React from "react";
import Image from "next/image";
import TestmonialWrapper, {
  Content,
  LogoImage,
  LogoWrapper,
} from "./styles";

const TestimonialCard = ({ imgSrc, review, ...rest }) => {
  return (
    <TestmonialWrapper {...rest}>
      <Content>{review}</Content>
      <LogoWrapper>
        <LogoImage>
          <Image src={imgSrc} alt="Logo" />
        </LogoImage>
      </LogoWrapper>
    </TestmonialWrapper>
  );
};

export default TestimonialCard;
