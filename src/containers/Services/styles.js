import { Row } from "react-bootstrap";
import styled from "styled-components";

export const AccountingWrapper = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing * 105}px;
`;
export const HeadingWrapper = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin-bottom: ${({ theme: { spacing } }) => spacing * 15}px;
  }
`;
export const StyledRow = styled(Row)({
  display: "flex",
  alignItems: "flex-end",

  button: {
    padding: "8px 64px",
  },
});

export const AnimationWrapper = styled("div")(({ theme: { spacing } }) => {
  return {
    marginTop: `${spacing * 70}px`,
  };
});

export const FlimTvWrapper = styled("div")(({ theme: { spacing } }) => {
  return {
    marginTop: `${spacing * 88}px`,
  };
});
export const WebDevWrapper = styled("div")(({ theme: { spacing } }) => {
  return {
    marginTop: `${spacing * 114}px`,
  };
});
export const ArchitectureWrapper = styled("div")(({ theme: { spacing } }) => {
  return {
    marginTop: `${spacing * 116}px`,
    marginBottom: `${spacing * 63}px`,
  };
});
export const GreyBoxWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
});
export const ImageWrapper = styled("div")({
  width: "93px",
  height: "122px",
  marginLeft: "6rem",
  "& img": {
    width: "100%",
    height: "100%",
  },
});

export const Wrapper = styled.div`
  .sm-hidden {
    @media (max-width: 991px) {
      display: none;
    }
  }
  .hidden-sm {
    @media (min-width: 992px) {
      display: none;
    }
  }
  .margin-y-0 {
    @media (max-width: 991px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

export const LoadingWrapper = styled("div")`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
`;
