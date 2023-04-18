import React from "react";
import { useRouter } from "next/router";
import Wrapper, { CategoryTitle, ContentWrapper, ImageWrapper } from "./styles";
import Image from "next/image";
import { ArrowRight } from "../../Svgs";
import { Heading } from "@/components/Heading";
import Typo from "@/components/Typo";

const Accounting = ({ src, alt, cardTitle, children, ...rest }) => {
  const router = useRouter();
  return (
    <Wrapper {...rest} onClick={() => router.push("/services/accounting")}>
      <ImageWrapper>
        <Image src={src} alt={alt} fill />
      </ImageWrapper>
      <ContentWrapper>
        <Heading variant="serviceTitle">{cardTitle}</Heading>
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
