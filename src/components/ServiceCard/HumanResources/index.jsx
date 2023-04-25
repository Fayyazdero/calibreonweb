import Wrapper, { CategoryTitle, ContentWrapper, ImageWrapper } from "./styles";
import Image from "next/image";
import { ArrowRight } from "../../Svgs";
import { Heading } from "@/components/Heading";
import Typo from "@/components/Typo";
const HumanResources = ({
  src,
  alt,
  variant = "primary",
  title,
  children,
  ...rest
}) => {
  return (
    <Wrapper {...rest} variant={variant}>
      <ImageWrapper>
        <Image src={src} alt={alt} layout="fill" />
      </ImageWrapper>
      <ContentWrapper>
        <Heading variant="serviceTitle">{title}</Heading>
        <CategoryTitle>
          <ArrowRight height={16} color={"#FFFF"} />
          <Typo variant="seviceTypo">Amazon Account setup</Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={16} color={"#FFFF"} />
          <Typo variant="seviceTypo">ebay PPC Ads </Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={16} color={"#FFFF"} />
          <Typo variant="seviceTypo">Order Fulfillment</Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={16} color={"#FFFF"} />
          <Typo variant="seviceTypo">Walmart Bulk Uploads</Typo>
        </CategoryTitle>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HumanResources;
