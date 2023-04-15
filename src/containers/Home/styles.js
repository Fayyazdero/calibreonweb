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
export const StyledContainer = styled.div``;
export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StyledImage = styled(Image)`
  width: 100%;
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
  padding: 56px 0;
`;
export const ViewAll = styled.p`
  display: flex;
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`;
export const ServicesWrapper = styled.div`
  // padding: 20px 0 20px 0;
  background: #4d4d4d;

  & button {
    &:before {
    }
  }
  & .slick-next {
  }

  & .slick-prev {
  }
`;
