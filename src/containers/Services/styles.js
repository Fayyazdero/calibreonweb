import { Row } from "react-bootstrap";
import styled from "styled-components";

export const AccountingWrapper = styled.div`
  margin-top: 210px;
`;
export const HeadingWrapper = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin-bottom: 31px;
  }
`;
export const StyledRow = styled(Row)({
  display: "flex",
  alignItems: "flex-end",

  button: {
    padding: "8px 64px",
  },
});
export const AnimationWrapper = styled("div")({
  marginTop: "140px",
});
export const FlimTvWrapper = styled("div")({
  marginTop: "176px",
});
export const WebDevWrapper = styled("div")({
  marginTop: "228px",
});
export const ArchitectureWrapper = styled("div")({
  marginTop: "232px",
  marginBottom: "125px",
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
