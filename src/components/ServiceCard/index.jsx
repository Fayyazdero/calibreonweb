import React from "react";
import Wrapper, {
  Background,
  CardWrapper,
  CategoryTitle,
  ContentWrapper,
  ImageWrapper,
  Media,
  Title,
} from "./styles";
import Image from "next/image";

const ServiceCard = ({ src, alt, title, direction= 'row', size=[467,526], variant="primary", children, ...rest }) => {
  return (
    <CardWrapper direction={direction} variant={variant}  {...rest} >
      <Background/>
      <Wrapper >
        <Media>
          <ImageWrapper>
            <Image src={src} alt={alt} height={size[0]} width={size[1]} />
          </ImageWrapper>
        </Media>
        <ContentWrapper>
          <Title>{title}</Title>
          <CategoryTitle>
            {children}
          </CategoryTitle>
        </ContentWrapper>
      </Wrapper>
    </CardWrapper>
  );
};

export default ServiceCard;
