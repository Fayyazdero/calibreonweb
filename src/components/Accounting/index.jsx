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

const Accounting = ({ imgSrc, imgAlt, department, services, children }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imgSrc} alt={imgAlt} />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{department}</Title>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <ul>
            <li>{services}</li>
          </ul>
        </CategoryTitle>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Accounting;
