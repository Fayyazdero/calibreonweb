import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const HomeHeadingWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 46px;

  & .main-typo {
    @media (max-width: 992px) {
      text-align: center;
    }
  }
   
  & button {
      padding: 8px 64px;
    @media (max-width: 992px) {
      padding: 1px 24px;
    }
  }

   & input {
     font-family: 'Montserrat';
     font-style: normal;
     font-weight: 400;
      @media (max-width: 992px) {
        font-size: 14px;
        line-height: 17px;
      }
    }

    & h2 {
      @media (max-width: 992px) {
        text-align: center;
      }
    }
  }
`;

export const TestimonialWrapper = styled.div`
  padding: 116px 0;
  z-index: 1;
  @media (max-width: 992px) {
    padding: 30px 0;
  }
  & .slick-prev {
    display: none !important;
  }

  & .testinomial {
    @media (max-width: 992px) {
      padding-top: 5px;
      padding-bottom: 22px;
      text-align: center !important;
    }
  }

  & .testinomial-text {
    width: 60%;
    @media (max-width: 992px) {
      width: 100%;
      text-align: center;
    }
  }
`;
export const NewsLetterWrapper = styled.div`
  padding: 130px 0;
  @media (max-width: 992px) {
    padding: 42px 0;
  }

  & button {
    padding: 8px 46px;
    @media (max-width: 992px) {
      padding: 1px 24px;
    }
  }
  & h2 {
    @media (max-width: 992px) {
      text-align: center;
    }
`;
export const StyledContainer = styled.div`
  width: 85%;
  margin: auto;
`;
export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StyledImage = styled(Image)`
  position: unset !important;
  width: 100%;

  &.logos {
    @media (max-width: 992px) {
      height: 70px;
      width: auto;
    }
  }
`;
export const ImageCol = styled(Col)`
  @media (max-width: 992px) {
    display: none;
  }
`;
export const HomeImageWrapper = styled.div`
  z-index: 0;
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;
export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
`;
export const TestimonialLogosWrapper = styled.div`
  background: ${({ theme: { colors } }) => colors.grey};
  padding: 140px 100px;

  @media (max-width: 992px) {
    padding: 22px 40px;
  }
`;
export const TestimonialLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  height: 72px;
  width: auto;
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ServicesHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;
`;

export const ServiceCard = styled.div`
  & > div {
    width: 80%;
  }
`;
export const ViewAll = styled.p`
  display: flex;
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.semi_bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.quotes};
  color: ${({ theme: { colors } }) => colors.white};
  cursor: pointer;

  @media screen and (max-width: 992px) {
    display: none;
  }

  & svg {
    margin-left: 20px;
    margin-top: 6px;
  }
`;
export const ServicesWrapper = styled.div`
  background: ${({ theme: { colors } }) => colors.grey};
  padding-top: 56px;
  padding-bottom: 36px;

  @media (max-width: 992px) {
    padding-top: 40px;
    padding-bottom: 16px;
  }
`;
export const Banner = styled.div`
  padding-bottom: 110px;

  @media (max-width: 992px) {
    padding-bottom: 54px;
  }
`;
export const Testinomials = styled.div`
  display: flex;
`;
export const CardWrapper = styled.div`
  text-align: right;
`;

export const StyledRow = styled(Row)`
  position: relative;

  & .center-card {
  }
`;
export const TestimonialCol = styled(Col)`
  z-index: 1;
  padding-left: 116px;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const NextArrow = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 50px;
  background: ${({ theme: { colors } }) => colors.primary};
  position: absolute;
  left: 55%;
  top: 50%;
  z-index: 3;
  cursor: pointer;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const ArrowsBg = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 50px;
  background: ${({ theme: { colors } }) => colors.primary};
  margin-left: 15px;
  cursor: pointer;
`;
export const Arrows = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 992px) {
    padding-top: 36px;
  }
`;
