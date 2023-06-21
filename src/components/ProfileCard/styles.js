import styled from "styled-components";

const Wrapper = styled("div")(
  ({ theme: { colors, breakPoints }, variant }) => ({
    color: "#FFFFFF",
    border: `3px solid ${
      variant == "primary"
        ? colors.primary
        : variant === "secondary"
        ? colors.grey
        : colors.primary
    }`,
    borderRadius: "19px",
    padding: "20px",
    background: variant == "primary" ? "#F05B25" : "#4D4D4D",
    cursor: "pointer",
    transition: ".3s ease",
    width: "auto",
    height: "496px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: "28px",
    "&:hover": {
      color: `${variant == "primary" ? colors.primary : colors.grey}`,
      background: `${
        variant == "primary" || variant == "secondary"
          ? colors.white
          : colors.primary
      }`,
      h2: {
        color: `${variant == "primary" ? colors.primary : colors.grey}`,
      },
      p: {
        color: `${variant == "primary" ? colors.primary : colors.grey}`,
      },
      "svg path": {
        fill: `${variant == "primary" ? colors.primary : colors.grey}`,
      },
      h4: {
        color: `${variant == "primary" ? colors.primary : colors.grey}`,
      },
    },
    [`@media screen and (max-width: ${breakPoints.sm}px)`]: {
      background: variant == "primary" ? "#F05B25" : "#4D4D4D",
      color: "#FFFFFF",
      borderRadius: "19px",
      paddingBottom: "28px",
      marginBottom: "48px",
      width: "100%",
      height: "496px",
    },
  })
);

export const ProfileHeader = styled.div((props) => {
  return {
    display: "flex",
    [`@media screen and (max-width: ${props.theme.breakPoints.lg}px)`]: {
      flexDirection: "column",
    },
  };
});

export const ProfileTitle = styled.div((props) => {
  return {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
    display: "flex",
    justifyContent: "center",

    [`@media screen and (max-width: ${props.theme.breakPoints.sm}px)`]: {
      lineBreak: "anywhere",
      fontSize: "38px",
    },
    [`@media screen and (max-width: ${props.theme.breakPoints.lg}px)`]: {
      alignItems: "center ",
      lineBreak: "anywhere",
      fontSize: "38px",
      "& h2": {
        lineHeight: "90%",
      },
    },
  };
});

export const ProfileImage = styled.div((props) => {
  return {
    "& img": {
      width: "160px",
      height: "160px",
      border: "8px solid #FFFFFF",
      boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.2)",
      filter:
        "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.08)) drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1))",
      borderRadius: "4px",
    },

    [`@media screen and (max-width: ${props.theme.breakPoints.lg}px)`]: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
      "& img": {
        width: "140px",
        height: "140px",
        border: "8px solid #FFFFFF",
        boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.2)",
        filter:
          "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.08)) drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1))",
        borderRadius: "4px",
      },
    },
  };
});
export const Title = styled("h2")({
  fontFamily: "Montserrat",
  fontWeight: "700",
  fontSize: "46px",
  letterSpacing: "-2.3%",
  margin: "0",
});
export const Certification = styled("div")({
  display: "flex",
  alignItems: "center",
  "& img": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
});
export const SubTitle = styled("h4")(({ fontSize }) => ({
  fontFamily: "Inter",
  fontStyle: "italic",
  fontWeight: "500",
  fontSize: fontSize ? `${fontSize}px` : "14px",
  lineHeight: "22px",
  margin: "0",
  [`@media screen and (max-width: 992px)`]: {
    lineHeight: "150%",
  },
}));
export const VerifiedLogo = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "18px",
  width: "18px",
  marginLeft: "10px",
});

export const Content = styled.div((props) => {
  return {
    marginTop: "20px",
    fontFamily: "Hind Madurai",
    textAlign: "justify",
    [`@media screen and (max-width: ${props.theme.breakPoints.sm}px)`]: {
      fontWeight: "500",
      fontSize: "13.8503px",
      lineHeight: "19px",
    },
  };
});

export default Wrapper;
