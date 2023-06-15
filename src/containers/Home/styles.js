import Typo from "@/components/Typo";
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

export const BannerRow = styled(Row)`
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
export const BannerCol = styled(Col)`
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const TestimonialWrapper = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing * 58}px;
  z-index: 1;
  @media (max-width: 992px) {
    padding: 30px 0;
  }
  & .slick-prev {
    display: none !important;
  }

  & .testinomial {
    @media (max-width: 992px) {
      padding-top: ${({ theme: { spacing } }) => spacing * 3}px;
      padding-bottom: ${({ theme: { spacing } }) => spacing * 11}px;
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

  & h2 {
    @media (max-width: 992px) {
      text-align: center !important;
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
  & .responsive-image {
    display: none;
    @media (max-width: 992px) {
      display: block;
      margin-top: ${({ theme: { spacing } }) => spacing * 21}px;
      margin-bottom: ${({ theme: { spacing } }) => spacing * 15}px;
    }
  }

  & form {
    margin: 16px 0;
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
  & input {
    @media (max-width: 992px) {
      width: 100%;
      text-align: center;
    }
  }

  & button {
    @media (max-width: 992px) {
      width: max-content;
      margin: auto;
      margin-top: 20px;
      padding: 4px 26px;
    }
  }
`;

export const StyledImgCol = styled(Col)`
  @media (max-width: 992px) {
    display: none;
  }
`;
export const NewsLetterCol = styled(Col)`
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const StyledImage = styled(Image)`
  position: unset !important;
  width: 100%;

  &.logos {
    @media (max-width: 992px) {
      height: 72px;
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

  & img {
    @media (max-width: 992px) {
      height: 270px;
      width: 270px;
    }
  }
`;
export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;

  @media (min-width: 1360px) {
    img {
      width: 1334px;
    }
  }
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
  width: auto;

  & img {
    height: 65px;
    max-width: 100%;
  }
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1360px) {
    row-gap: ${({ theme: { spacing } }) => spacing * 28}px;
    column-gap: ${({ theme: { spacing } }) => spacing * 30}px;
    justify-content: center;
  }
`;

export const ServicesHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;

  @media (max-width: 992px) {
    padding-bottom: 0;
    margin-bottom: -40px;
    & span {
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
      font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
      line-height: ${({ theme: { lineHeights } }) => lineHeights["2xl"]};
    }
  }
`;

export const ServiceCard = styled.div`
  position: relative;
  @media (min-width: 992px) {
    margin-top: ${({ theme: { spacing } }) => spacing * 75}px;
    margin-left: -40px;
  }

  @media (max-width: 992px) {
    margin-left: ${({ theme: { spacing } }) => spacing * 15}px;

    & .exUQgV {
      margin-bottom: 0;
    }
  }
  & > div {
    position: relative;
    width: 100%;

    @media (max-width: 992px) {
      width: 100%;
      height: fit-content;
    }
  }

  & .text-content {
    @media (max-width: 992px) {
      position: absolute;
      bottom: 0;
      margin-top: ${({ theme: { spacing } }) => spacing * 13}px;
    }
  }

  & img {
    @media (min-width: 992px) {
      width: 314px !important;
    }
  }
  & h2 {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.h2Title} !important;
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bolder};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.newLineHeight};

    @media (max-width: 992px) {
      display: none;
    }
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
  align-items: center;
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
  padding-top: ${({ theme: { spacing } }) => spacing * 28}px;
  padding-bottom: ${({ theme: { spacing } }) => spacing * 18}px;

  @media (max-width: 992px) {
    padding-top: ${({ theme: { spacing } }) => spacing * 20}px;
    padding-bottom: ${({ theme: { spacing } }) => spacing * 8}px;
  }
`;
export const Banner = styled.div`
  padding-bottom: ${({ theme: { spacing } }) => spacing * 55}px;

  @media (max-width: 992px) {
    padding-bottom: ${({ theme: { spacing } }) => spacing * 27}px;
  }
`;
export const Testinomials = styled.div`
  display: flex;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const SliderCards = styled.div`
  width: 91%;
`;
export const StyledTitleWrapper = styled.div`
  display: none;
  @media (max-width: 992px) {
    width: 80%;
    margin: auto;
    display: block;
    h2 {
      color: ${({ theme: { colors } }) => colors.white};
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.bolder};
      font-size: ${({ theme: { fontSizes } }) => fontSizes.xl}; !important;
      line-height: ${({ theme: { lineHeights } }) => lineHeights["2xl"]};
    }
  }
`;
export const StyledTitle = styled.h2``;
export const CardWrapper = styled.div`
  text-align: right;
`;

export const StyledRow = styled(Row)`
  margin-top: ${({ theme: { spacing } }) => spacing * 12}px;
`;
export const TestimonialCol = styled(Col)`
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const TCardWrapper = styled.div`
  display: flex !important;
  justify-content: end;
`;
export const LearnMore = styled.div`
  display: none !important;
  @media (max-width: 992px) {
    display: flex !important;
    align-items: ceimport { contact } from './../../components/Footer/footerData';
nter;
    justify-content: end;
    margin-bottom: ${({ theme: { spacing } }) => spacing * 48}px;
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
  left: 115%;
  top: 40%;
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
  margin-left: ${({ theme: { spacing } }) => spacing * 8}px;
  cursor: pointer;
`;
export const Arrows = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme: { spacing } }) => spacing * 38}px;
  @media (max-width: 992px) {
    padding-top: ${({ theme: { spacing } }) => spacing * 18}px;
  }
`;

export const LoadingWrapper = styled("div")`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
`;

export const NotificationBanner = styled("div")`
  margin-top: -100px;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f05b25;
  p {
    color: white;
  }
`;

export const TypoWrapper = styled(Typo)`
  margin-left: ${({ theme: { spacing } }) => spacing * 5}px;
  text-decoration: underline;
  cursor: pointer;
`;
