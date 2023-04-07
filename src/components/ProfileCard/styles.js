const { default: styled } = require("styled-components");

const Wrapper = styled("div")({
  margin: "20px 20px",
  width: "409px",
  height: "496px",
  background: "#4D4D4D",
  color: "#FFFFFF",
  borderRadius: "19px",
});
export const ProfileHeader = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});
export const ProfileTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "33px",
  marginBottom: "21px",
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
  display: "flex",
  alignItems: "center",
  "& img": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
});
export const SubTitle = styled("h4")({
  fontFamily: "Inter sans-serif",
  fontStyle: "italic",
  fontWeight: "500",
  fontSize: "12px",
  letterSpacing: "-2.2%",
  margin: "0",
});
export const VerifiedLogo = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "18px",
  width: "18px",
  marginLeft: "10px",
});
export const Content = styled("div")({
  paddingLeft: "26px",
  paddingRight: "26px",
});

export default Wrapper;
