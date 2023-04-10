import React from "react";
import Wrapper, {
  CategoryTitle,
  ContentWrapper,
  ImageWrapper,
  Title,
} from "./styles";
import Banner from "../../assests/Accounting-banner.png";
import Image from "next/image";
import ArrowRight from "../Svgs/ArrowRight";

const Accounting = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={Banner} alt="banner" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>Accounting</Title>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <h4>Book-keeping</h4>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <h4>Accounting</h4>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <h4>UI/UX Designer</h4>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <h4>Frontend</h4>
        </CategoryTitle>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Accounting;
