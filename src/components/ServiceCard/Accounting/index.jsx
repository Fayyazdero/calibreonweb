import React from "react";
import Wrapper, {
  CategoryTitle,
  ContentWrapper,
  HeadingWrapper,
  ImageWrapper,
} from "./styles";
import Image from "next/image";
import { ArrowRight } from "../../Svgs";
import { Heading } from "@/components/Heading";
import Typo from "@/components/Typo";

const Accounting = ({
  src,
  variant = "primary",
  alt,
  title,
  children,
  ...rest
}) => {
  return (
    <Wrapper {...rest} variant={variant}>
      <ImageWrapper>
        <Image src={src} alt={alt} fill />
      </ImageWrapper>
      <ContentWrapper className="text-content">
        <HeadingWrapper>
          <Heading variant="serviceTitle">{title}</Heading>
        </HeadingWrapper>
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

export default Accounting;
