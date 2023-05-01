import React from "react";
import Wrapper, { CategoryTitle, ContentWrapper, ImageWrapper } from "./styles";
import Image from "next/image";
import { ArrowRight } from "../../Svgs";
import { Heading } from "@/components/Heading";
import Typo from "@/components/Typo";

const MobileServiceCard = ({ src, alt, title, children, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <ImageWrapper>
        <Image src={src} alt={alt} fill />
      </ImageWrapper>
      <Heading variant="serviceTitle">{title}</Heading>
    </Wrapper>
  );
};

export default MobileServiceCard;
