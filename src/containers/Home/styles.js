import Image from "next/image";
import styled from "styled-components";

export const HomeHeadingWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 46px;
`;

export const TestimonialWrapper = styled.div`
  padding: 116px 0;
  & .slick-next {
    background: red !important;
  }
  & .slick-prev {
    display: none !important;
  }
`;
export const NewsLetterWrapper = styled.div`
  padding: 130px 0;
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
  width: 100%;
`;
export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const TestimonialLogosWrapper = styled.div`
  background: #4d4d4d;
  padding: 140px 100px;
`;
export const TestimonialLogos = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ServicesHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;
`;
export const ViewAll = styled.p`
  display: flex;
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;

  & svg {
    padding-left: 20px;
    margin-top: 6px;
  }
`;
export const ServicesWrapper = styled.div`
  background: ${({ theme: { colors } }) => colors.grey};
  padding-top: 56px;
  padding-bottom: 36px;
`;
export const Banner = styled.div`
  padding-bottom: 110px;
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
`;

export const SliderArrow = styled("div")(({ theme: { colors } }) => ({
  display: "flex",
  background: `${colors.primary}`,
}));
