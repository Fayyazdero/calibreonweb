import { Container } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)({
  marginBottom: "121px",
});
export const HeadingWrapper = styled("div")({
  marginBottom: "10px",
});
export const Content = styled("p")(({ theme: { colors } }) => ({
  color: colors?.grey,
  fontSize: "22px",
  fontWeight: "400",
}));
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
