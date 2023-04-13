import React from "react";
import Wrapper, {
  CategoryTitle,
  ContentWrapper,
  ImageWrapper,
  Title,
} from "./styles";
import Image from "next/image";
import { ArrowRight } from "../Svgs";

const ServiceCard = ({ imgSrc, imgAlt, department, children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <ImageWrapper>
        <Image src={imgSrc} alt={imgAlt} />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{department}</Title>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          {children}
        </CategoryTitle>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ServiceCard;
