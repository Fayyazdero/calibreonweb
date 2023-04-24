import React from "react";
import Image from "next/image";
import TestmonialWrapper, {
  Content,
  Details,
  LogoImage,
  LogoWrapper,
  Role,
  UserImage,
  UserName,
  UserWrapper,
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
      <UserWrapper>
        <Details>
          <UserName>David</UserName>
          <Role>CEO of NorthSpex</Role>
        </Details>
        <UserImage>
          <Image src="/images/user.png" width={70} height={70} alt="user" />
        </UserImage>
      </UserWrapper>
    </TestmonialWrapper>
  );
};

export default TestimonialCard;
