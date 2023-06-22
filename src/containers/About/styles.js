import { Heading } from "@/components/Heading";
import { Col, Row } from "react-bootstrap";

const { default: styled } = require("styled-components");

export const MainHeading = styled("div")(({ theme: { spacing }}) => {
  return {
    "@media (max-width: 991px)": {
      display: "flex",
      justifyContent: "center",
      marginBottom: `${spacing * 5}px`,
    },
  }
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
export const MissionHeading = styled(Heading)(({ theme: { spacing }}) => {
  return {
    marginTop: `${spacing * 20}px`,
    "@media (max-width: 991px)": {
      textAlign: "center",
    },
  }
});
export const Content = styled("p")(({ theme: { spacing, colors, fontWeights }}) => {
  return {
    fontWeight: fontWeights.normal,
    fontSize: `${spacing * 8}px`,
    fontFamily: "Hind Madurai",
    color: colors.grey,
  }
});
export const MissionImage = styled("div")({
  width: "100%",
  height: "535px",
  "& img": {
    width: "100%",
    height: "100%",
  },
});
export const ContentWrapper = styled("div")(({ theme: { spacing }}) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: `${spacing * 63}px`,
    padding: "0 10px",
  }
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
export const ProfileWrapper = styled("div")(({ theme: { spacing }}) => {
  return {
    marginTop: `${spacing * 59}px`,
    "& .my-custom-class:last-child": {
      marginTop: `${spacing * 117}px`,
    },
    "@media (max-width: 991px)": {
      ".my-custom-class:last-child": {
        marginTop: "1.5rem !important",
      },
    },
  }
});

export const LoadingWrapper = styled("div")`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
`;