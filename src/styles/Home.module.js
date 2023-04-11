import styled from "styled-components";

export const HomeHeadingWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NewsLetterWrapper = styled.div``;
export const ServicesHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 56px 0;
`;
export const ViewAll = styled.p`
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
    display: flex !important;

    &:before {
      background: red;
    }
  }
  & .slick-next {
    height: 100%;
    align-items: flex-end;
  }

  & .slick-prev {
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;

    &:before {
      background: red;
    }
  }
`;
