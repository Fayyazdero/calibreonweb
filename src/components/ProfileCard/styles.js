const { default: styled } = require("styled-components");

export const Wrapper = styled.div((props) => {
  return {
    background: props.colourPrimary ? "#F05B25" : "#4D4D4D",
    color: "#FFFFFF",
    borderRadius: "19px",
    paddingBottom: "28px",
    width: "409px",
    marginBottom: "28px",

    [`@media screen and (max-width: ${props.theme.breakPoints.xs}px)`]: {
      background: props.colourPrimary ? "#F05B25" : "#4D4D4D",
      color: "#FFFFFF",
      borderRadius: "19px",
      paddingBottom: "28px",
      marginBottom: "28px",
      width: "100%",
    },
  };
});
export const ProfileHeader = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});
export const ProfileTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "33px 0 21px 0",
});

export const ProfileImage = styled.div((props) => {
  return {
    paddingTop: "21px",
    "& img": {
      width: "161px",
      height: "161px",
    },

    [`@media screen and (max-width: ${props.theme.breakPoints.xs}px)`]: {
      paddingTop: "21px",
      "& img": {
        width: "140px",
        height: "140px",
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
  letterSpacing: "-2.2%",
  margin: "0",
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
      paddingTop: "21px",
      paddingLeft: "26px",
      paddingRight: "26px",
      textAlign: "justify"
    },
  };
});

export default Wrapper;
