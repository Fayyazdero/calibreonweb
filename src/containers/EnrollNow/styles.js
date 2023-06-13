import { Container } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)({
  marginBottom: "121px",
});
export const HeadingWrapper = styled("div")({
  marginBottom: "10px",
});
export const Content = styled("p")(({ theme: { colors, fontSizes, fontWeights } }) => {
  return {
    color: colors?.grey,
    fontSize: fontSizes["2xl"],
    fontWeight: fontWeights.regular,
  }
});
export const TitleWrapper = styled("div")({
  marginTop: "121px",
  "& .heading": {
    display: "inline-block",
    alignItems: "end",
    "& img": {
      marginLeft: "18px",
    },
  },
});

export const LoadingWrapper = styled("div")`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
`;
