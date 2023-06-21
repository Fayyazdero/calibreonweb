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
import { client } from "../../../pages/index";
import imageUrlBuilder from "@sanity/image-url";

const Accounting = ({
  image,
  variant = "primary",
  subCategoryOne,
  subCategoryTwo,
  subCategoryThree,
  alt,
  category,
  children,
  onClick,
  className,
  ...rest
}) => {
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => {
    return builder.image(source);
  };
  return (
    <Wrapper
      {...rest}
      onClick={onClick}
      variant={variant}
      className={className}
    >
      <ImageWrapper>
        <Image src={`${urlFor(image).url()}`} alt={"Image"} fill />
      </ImageWrapper>
      <ContentWrapper className="text-content">
        <HeadingWrapper>
          <Heading variant="serviceTitle">{category}</Heading>
        </HeadingWrapper>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <Typo variant="seviceTypo">{subCategoryOne || "Bookeeping"}</Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <Typo variant="seviceTypo">{subCategoryTwo || "Accounting"}</Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={12} color={"#FFFF"} />
          <Typo variant="seviceTypo">{subCategoryThree || "Bookeeping"}</Typo>
        </CategoryTitle>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Accounting;
