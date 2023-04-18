import { Col } from "react-bootstrap";
import styled from "styled-components";

export const HeroSection = styled(Col)({
  marginTop: "90px",
});
export const Content = styled("p")({
  fontWeight: "500",
  fontSize: "16px",
  fontFamily: "Hind Madurai",
  color: "#4D4D4D",
});
export const MissionImage = styled("div")({
  width: "100%",
  height: "100%",
  "& img": {
    width: "100%",
    height: "100%",
  },
});
export const StyledContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "125px",
  padding: "0 10px",
  width: "55%",
  marginLeft: "auto",
  marginRight: "auto",

  " @media screen and (max-width: 768px)": {
    width: "100%",
    margin: "148px 0",
  },
});
export const FounderSection = styled("div")({
  margin: "120px 0",
});
export const ProfileWrapper = styled("div")({
  marginTop: "117px",
  "& .card-direction .sc-beqWaB:last-child": {
    marginTop: "233px",
  },
  "@media (max-width: 767px)": {
    ".my-custom-class:last-child": {
      marginTop: "1.5rem !important",
    },
  },
});
