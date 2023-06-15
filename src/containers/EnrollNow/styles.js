import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

export const ColSelected = styled(Col)({
  [`@media screen and (max-width: 992px)`]: {
    textAlign: "center",
  },
});

export const StyledContainer = styled(Container)(({ theme: { spacing } }) => {
  return {
    marginBottom: `${spacing * 60}px`,
  };
});
export const HeadingWrapper = styled("div")(({ theme: { spacing } }) => {
  return {
    marginBottom: `${spacing * 5}px`,
  };
});
export const Content = styled("p")(
  ({ theme: { colors, fontSizes, fontWeights } }) => {
    return {
      color: colors?.grey,
      fontSize: fontSizes["2xl"],
      fontWeight: fontWeights.regular,
    };
  }
);
export const TitleWrapper = styled("div")(({ theme: { spacing } }) => {
  return {
    marginTop: `${spacing * 60}px`,
    "& .heading": {
      display: "inline-block",
      alignItems: "end",
      "& img": {
        marginLeft: `${spacing * 9}px`,
      },
    },
    [`@media screen and (max-width: 992px)`]: {
      marginBottom: 0,
      marginTop: `${spacing * 25}px`,
    },
  };
});

export const LoadingWrapper = styled("div")`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
`;
