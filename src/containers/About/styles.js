import { Heading } from "@/components/Heading";
import { Col, Row } from "react-bootstrap";

const { default: styled } = require("styled-components");

export const MainHeading = styled("div")({
  "@media (max-width: 991px)": {
    display: "flex",
    justifyContent: "center",
    marginBottom: "9px",
  },
});
export const StyledRow = styled(Row)({
  "@media (max-width: 991px)": {
    flexDirection: "column-reverse",
  },

  ".main-heading": {
    display: "block",
    "@media (max-width: 991px)": {
      display: "none",
    },
  },

  ".responsive-heading": {
    display: "none",
    "@media (max-width: 991px)": {
      display: "block",
    },
  },
});
export const MissionHeading = styled(Heading)({
  marginTop: "41px",
  "@media (max-width: 991px)": {
    textAlign: "center",
  },
});
export const Content = styled("p")({
  fontWeight: "500",
  fontSize: "16px",
  fontFamily: "Hind Madurai",
  color: "#4D4D4D",
});
export const MissionImage = styled("div")({
  width: "100%",
  height: "535px",
  "& img": {
    width: "100%",
    height: "100%",
  },
});
export const ContentWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "125px",
  padding: "0 10px",
});
export const StyledHeading = styled(Heading)({
  width: "70%",
  "@media (max-width: 991px)": {
    width: "100%",
  },
});
export const FounderSection = styled("div")({
  margin: "120px 0",
});
export const FounderHeading = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  h2: {
    display: "grid",
  },
});
export const ProfileWrapper = styled("div")({
  marginTop: "117px",
  "& .my-custom-class:last-child": {
    marginTop: "233px",
  },
  "@media (max-width: 991px)": {
    ".my-custom-class:last-child": {
      marginTop: "1.5rem !important",
    },
  },
});
