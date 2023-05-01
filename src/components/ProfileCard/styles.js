const { default: styled } = require("styled-components");

const Wrapper = styled("div")(({ theme: { colors, breakPoints }, variant }) => ({
  color: "#FFFFFF",
  borderRadius: "19px",
  paddingBottom: "28px",
  background: colors[variant] || colors.primary,
  cursor: "pointer",
  transition: ".3s ease",
  border: `2px solid ${colors[variant]}`,
  width: "auto",
    marginBottom: "28px",
  [`@media screen and (max-width: ${ breakPoints.xs }px)`]: {
    background: colors.primary ? "#F05B25" : "#4D4D4D",
    color: "#FFFFFF",
    borderRadius: "19px",
    paddingBottom: "28px",
    marginBottom: "48px",
    width: "100%",
  },
  "&:hover": {
    color: `${colors[variant] || colors.primary}`,
    background: "transparent",
    h2: {
      color: `${colors[variant] || colors.primary}`,
    },
    p: {
      color: `${colors[variant] || colors.primary}`,
    },
    "svg path": {
      fill: `${colors[variant] || colors.primary}`,
    },
  },
}));

export const ProfileHeader = styled.div((props) => {
  return {
    display: "flex",
    justifyContent: "space-around",

    [`@media screen and (max-width: ${props.theme.breakPoints.xs}px)`]: {
      margin: "0 20px",
      justifyContent: "space-between",
    },
  };
});

export const ProfileTitle = styled.div((props) => {
  return {
    display: "flex",
    flexDirection: "column",
    margin: "33px 0 21px 0",
    "& h2": {
      lineBreak: "anywhere",
    },
    [`@media screen and (max-width: ${props.theme.breakPoints.xs}px)`]: {
      lineBreak: "anywhere",
      fontSize: "38px",
    },
  };
});

export const ProfileImage = styled.div((props) => {
  return {
    paddingTop: "21px",
    "& img": {
      width: "161px",
      height: "161px",
      border: "8px solid #FFFFFF",
      boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.2)",
      filter:
        "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.08)) drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1))",
      borderRadius: "4px",
    },

    [`@media screen and (max-width: ${props.theme.breakPoints.xs}px)`]: {
      paddingTop: "21px",
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
  width: "164px",
  display: "flex",
  alignItems: "center",
  "& img": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
});
export const SubTitle = styled("h4")(({ fontSize }) => ({
  fontFamily: "Inter sans-serif",
  fontStyle: "italic",
  fontWeight: "500",
  fontSize: fontSize ? `${fontSize}px` : "12px",
  lineHeight: "150%",
  letterSpacing: "-2.2%",
  margin: "0",
  [`@media screen and (max-width: 768px)`]: {
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
    paddingTop: "21px",
    paddingLeft: "26px",
    paddingRight: "26px",
    textAlign: "justify",
    [`@media screen and (max-width: ${props.theme.breakPoints.xs}px)`]: {
      fontWeight: "500",
      fontSize: "13.8503px",
      lineHeight: "19px",
    },
  };
});

export default Wrapper;
