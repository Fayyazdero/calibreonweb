import React from "react";
import Wrapper, { CategoryTitle, ContentWrapper, ImageWrapper } from "./styles";
import Image from "next/image";
import { ArrowRight } from "../../Svgs";
import { Heading } from "@/components/Heading";
import Typo from "@/components/Typo";

const FlimTv = ({ src, alt, title, children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <ImageWrapper>
        <Image src={src} alt={alt} fill />
      </ImageWrapper>
      <ContentWrapper>
        <Heading variant="serviceTitle">{title}</Heading>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <Typo variant="seviceTypo">Bookeeping</Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <Typo variant="seviceTypo">Accounting</Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <Typo variant="seviceTypo">Bookeeping</Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <Typo variant="seviceTypo">Accounting</Typo>
        </CategoryTitle>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FlimTv;
