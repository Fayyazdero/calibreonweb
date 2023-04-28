const { default: styled } = require("styled-components");

const Wrapper = styled("div")(({ theme: { colors }, variant, clicked }) => ({
  color: "#FFFFFF",
  borderRadius: "19px",
  paddingBottom: "28px",
  background: colors[variant] || colors.primary,
  cursor: "pointer",
  transition: ".3s ease",
  border: `2px solid ${colors[variant]}`,
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
export const ProfileHeader = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});
export const ProfileTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "33px 0 21px 0",
});
export const ProfileImage = styled("div")({
  width: "161px",
  height: "161px",
  paddingTop: "21px",
  "& img": {
    width: "100%",
    height: "100%",
  },
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
export const Content = styled("div")({
  paddingTop: "21px",
  paddingLeft: "26px",
  paddingRight: "26px",
});

export default Wrapper;
