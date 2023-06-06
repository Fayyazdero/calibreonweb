import Wrapper, { CategoryTitle, ContentWrapper, ImageWrapper } from "./styles";
import Image from "next/image";
import { ArrowRight } from "../../Svgs";
import { Heading } from "@/components/Heading";
import Typo from "@/components/Typo";
const Animation = ({
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
        <Image src={src} alt={alt} fill />
      </ImageWrapper>
      <ContentWrapper>
        <Heading variant="serviceTitle">{title}</Heading>
        <CategoryTitle>
          <ArrowRight height={16} color={"#FFFF"} />
          <Typo variant="seviceTypo">2D art/Illustration</Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={16} color={"#FFFF"} />
          <Typo variant="seviceTypo">3D art/Illustration</Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={16} color={"#FFFF"} />
          <Typo variant="seviceTypo">2D art/Illustration</Typo>
        </CategoryTitle>
        <CategoryTitle>
          <ArrowRight height={16} color={"#FFFF"} />
          <Typo variant="seviceTypo">3D art/Illustration</Typo>
        </CategoryTitle>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Animation;
